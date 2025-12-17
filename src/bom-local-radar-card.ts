import { LitElement, html, type CSSResultGroup, type TemplateResult } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor, LovelaceCard } from 'custom-card-helpers';
import './editor';
import { BomLocalRadarCardConfig, RadarResponse, RadarFrame, MetadataDisplayConfig, ControlsDisplayConfig, ErrorState, GridOptions } from './types';
import { CARD_VERSION, DEFAULT_SERVICE_URL, DEFAULT_FRAME_INTERVAL, DEFAULT_REFRESH_INTERVAL, DEFAULT_RESTART_DELAY } from './const';
import { RadarApiService } from './services/radar-api-service';
import { cardStyles } from './styles/card-styles';
import { imageStyles } from './styles/image-styles';
import { controlsStyles } from './styles/controls-styles';
import { metadataStyles } from './styles/metadata-styles';
import { overlayStyles } from './styles/overlay-styles';
import { errorStyles } from './styles/error-styles';
import './components/error-display';
import './components/metadata-section';
import './components/controls-section';

console.info(
  `%c  BOM-LOCAL-RADAR-CARD  \n%c  Version ${CARD_VERSION}   `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

type LovelaceCustomCard = {
  type: string;
  name: string;
  preview?: boolean;
  description?: string;
};

declare global {
  interface Window {
    customCards?: LovelaceCustomCard[];
  }
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: 'bom-local-radar-card',
  name: 'BOM Local Radar Card',
  description: 'A rain radar card using the local BOM service',
});

@customElement('bom-local-radar-card')
export class BomLocalRadarCard extends LitElement implements LovelaceCard {
  static override styles: CSSResultGroup = [
    cardStyles,
    imageStyles,
    controlsStyles,
    metadataStyles,
    overlayStyles,
    errorStyles,
  ];

  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: BomLocalRadarCardConfig;
  @property({ attribute: false }) public editMode?: boolean;

  @state() private radarData?: RadarResponse;
  @state() private currentFrameIndex = 0;
  @state() private isLoading = false;
  @state() private error?: ErrorState;
  @state() private animationTimer?: number; // Changed to number for requestAnimationFrame
  @state() private refreshTimer?: number;
  @state() private retryTimer?: number;
  @state() private isPlaying = false;
  @state() private frames: RadarFrame[] = [];
  @state() private isExtendedMode = false;
  private preloadedImages: HTMLImageElement[] = [];
  private _debouncedImageLoad?: (url: string) => void;
  private apiService = new RadarApiService();

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('bom-local-radar-card-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(): Record<string, unknown> {
    return {
      type: 'custom:bom-local-radar-card',
      suburb: 'Pomona',
      state: 'QLD',
      service_url: 'http://localhost:8082',
    };
  }

  public setConfig(config: BomLocalRadarCardConfig): void {
    if (!config.suburb || !config.state) {
      throw new Error('suburb and state are required');
    }
    this._config = config;
  }

  /**
   * Dynamic card size based on configuration
   * Returns height in units (1 unit = 50px)
   */
  getCardSize(): number {
    let size = 4; // Base size for image (200px)
    
    // Add space for metadata if shown above/below
    const metadataConfig = this._getMetadataConfig();
    if (metadataConfig && typeof metadataConfig !== 'boolean') {
      if (metadataConfig.position !== 'overlay') {
        size += 1; // +50px for metadata section
      }
    } else if (metadataConfig === true) {
      size += 1;
    }
    
    // Add space for controls if shown below (not overlay)
    const controlsConfig = this._getControlsConfig();
    if (controlsConfig && typeof controlsConfig !== 'boolean') {
      if (controlsConfig.position !== 'overlay') {
        size += 2; // +100px for controls
      }
    } else if (controlsConfig === true) {
      // Default position is 'below', so add space
      size += 2;
    }
    
    return size;
  }

  /**
   * Define grid options for HA's sections view
   * This allows the card to integrate with HA's grid system
   */
  public getGridOptions(): GridOptions {
    // Calculate based on whether controls are visible
    const hasControls = this._shouldShowControls();
    const hasMetadata = this._shouldShowMetadata();
    
    // Base size: 6 columns (half width), 2 rows
    // Adjust based on content
    const baseRows = 2;
    const additionalRows = (hasControls ? 1 : 0) + (hasMetadata ? 0.5 : 0);
    
    return {
      columns: 6,  // Default: half width
      rows: baseRows + additionalRows,
      min_columns: 3,  // Minimum: quarter width
      min_rows: 2,     // Minimum: always show image
      max_columns: 12, // Can span full width
      max_rows: 8,     // Can be tall for detailed view
    };
  }

  /**
   * Fetches radar data from the local service
   * Supports both latest frames and historical timeseries
   */
  private async fetchRadarData(): Promise<RadarResponse | null> {
    const serviceUrl = this._config.service_url || DEFAULT_SERVICE_URL;
    const suburb = encodeURIComponent(this._config.suburb);
    const state = encodeURIComponent(this._config.state);
    const timespan = this._config.timespan || 'latest';
    
    this.isLoading = true;

    const options = {
      serviceUrl,
      suburb,
      state,
      timespan: timespan !== 'latest' ? timespan : undefined,
      customStartTime: this._config.custom_start_time,
      customEndTime: this._config.custom_end_time,
      onError: (error: ErrorState) => {
        this.error = error;
        this.isLoading = false;
        
        // Auto-retry if applicable
        if (error.retryable && error.retryAfter) {
          if (this.retryTimer) {
            window.clearTimeout(this.retryTimer);
          }
          this.retryTimer = window.setTimeout(() => {
            this.retryTimer = undefined;
            this.fetchRadarData();
          }, error.retryAfter * 1000);
        }
      },
    };

    let data: RadarResponse | null = null;
    
    if (timespan !== 'latest') {
      data = await this.apiService.fetchHistoricalFrames(options);
    } else {
      data = await this.apiService.fetchLatestFrames(options);
    }

    if (data) {
      this.error = undefined;
      this.radarData = data;
      this.frames = data.frames.sort((a, b) => a.frameIndex - b.frameIndex);
      this.isExtendedMode = timespan !== 'latest';
      this.isLoading = false;
      
      this.preloadImages(this.frames);
      
      if (this._config.auto_play !== false && !this.isPlaying) {
        this.startAnimation();
      }
    }

    return data;
  }

  /**
   * Gets the current frame image URL
   */
  private getCurrentFrameUrl(): string | null {
    if (!this.frames || this.frames.length === 0) {
      return null;
    }
    const frame = this.frames[this.currentFrameIndex];
    return frame?.imageUrl || null;
  }

  /**
   * Helper to get metadata config
   */
  private _getMetadataConfig(): boolean | MetadataDisplayConfig | undefined {
    const showMetadata = this._config.show_metadata;
    if (showMetadata === undefined) {
      return true; // Default: show all metadata
    }
    return showMetadata;
  }

  /**
   * Helper to get controls config
   */
  private _getControlsConfig(): boolean | ControlsDisplayConfig | undefined {
    const showControls = this._config.show_controls;
    if (showControls === undefined) {
      return true; // Default: show all controls
    }
    return showControls;
  }

  /**
   * Check if metadata should be shown
   */
  private _shouldShowMetadata(): boolean {
    const config = this._getMetadataConfig();
    return config !== false;
  }

  /**
   * Check if controls should be shown
   */
  private _shouldShowControls(): boolean {
    const config = this._getControlsConfig();
    return config !== false;
  }

  /**
   * Get locale for formatting
   */
  private _getLocale(): string {
    return this._config.locale || this.hass?.locale?.language || 'en-AU';
  }



  /**
   * Check if frame should be preloaded (only nearby frames)
   */
  private _shouldPreloadFrame(index: number): boolean {
    const currentIndex = this.currentFrameIndex;
    // Preload current, next, and previous frames
    return Math.abs(index - currentIndex) <= 1;
  }

  /**
   * Preloads nearby frame images to prevent jiggle when switching
   * Cleans up old preloaded images to prevent memory leaks
   * Only preloads frames near the current frame for performance
   */
  private preloadImages(frames: RadarFrame[]): void {
    // Clean up old preloaded images
    this.preloadedImages.forEach(img => {
      img.src = '';
      img.onload = null;
      img.onerror = null;
    });
    this.preloadedImages = [];

    // Only preload nearby frames
    frames.forEach((frame, index) => {
      if (this._shouldPreloadFrame(index)) {
        const img = new Image();
        img.src = frame.imageUrl;
        this.preloadedImages.push(img);
      }
    });
  }

  /**
   * Debounce helper
   */
  private _debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: number | undefined;
    return (...args: Parameters<T>) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => func(...args), wait);
    };
  }

  /**
   * Starts the frame animation loop using requestAnimationFrame
   * Ensures only one animation timer is active at a time
   */
  private startAnimation(): void {
    // Always stop existing animation first to prevent accumulation
    this.stopAnimation();

    if (this.frames.length === 0) {
      return;
    }

    this.isPlaying = true;
    const frameInterval = (this._config.frame_interval || DEFAULT_FRAME_INTERVAL) * 1000;
    const restartDelay = DEFAULT_RESTART_DELAY;
    const maxFrame = this.frames.length - 1;

    let lastFrameTime = performance.now();
    let frameStartTime = lastFrameTime;

    const animate = (currentTime: number) => {
      // Check if we're still playing (might have been stopped)
      if (!this.isPlaying) {
        return;
      }

      // Check if animation was cleared (component disconnected)
      if (!this.animationTimer) {
        return;
      }

      const elapsed = currentTime - lastFrameTime;

      if (this.currentFrameIndex >= maxFrame) {
        // Check if we've waited long enough before restarting
        if (elapsed >= restartDelay) {
          this.currentFrameIndex = 0;
          this.requestUpdate();
          frameStartTime = currentTime;
          lastFrameTime = currentTime;
        }
      } else {
        // Check if it's time to advance to next frame
        if (elapsed >= frameInterval) {
          this.currentFrameIndex++;
          this.requestUpdate();
          lastFrameTime = currentTime;
        }
      }

      // Continue animation
      this.animationTimer = requestAnimationFrame(animate);
    };

    // Start animation
    this.animationTimer = requestAnimationFrame(animate);
  }

  /**
   * Stops the animation
   */
  private stopAnimation(): void {
    if (this.animationTimer) {
      cancelAnimationFrame(this.animationTimer);
      this.animationTimer = undefined;
    }
    this.isPlaying = false;
  }

  /**
   * Toggles play/pause
   */
  private toggleAnimation(): void {
    if (this.isPlaying) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
  }

  /**
   * Shows a specific frame
   */
  private showFrame(index: number): void {
    if (index < 0 || index >= this.frames.length) {
      return;
    }
    this.currentFrameIndex = index;
    this.requestUpdate();
  }

  /**
   * Navigate to previous frame
   */
  private previousFrame(): void {
    this.stopAnimation();
    const newIndex = this.currentFrameIndex > 0 ? this.currentFrameIndex - 1 : this.frames.length - 1;
    this.showFrame(newIndex);
  }

  /**
   * Navigate to next frame
   */
  private nextFrame(): void {
    this.stopAnimation();
    const newIndex = (this.currentFrameIndex + 1) % this.frames.length;
    this.showFrame(newIndex);
  }

  /**
   * Jump forward/backward by N frames
   */
  private jumpFrame(offset: number): void {
    const newIndex = Math.max(0, Math.min(this.frames.length - 1, this.currentFrameIndex + offset));
    this.showFrame(newIndex);
  }

  /**
   * Auto-refresh data
   */
  private startAutoRefresh(): void {
    if (this.refreshTimer) {
      window.clearInterval(this.refreshTimer);
    }

    const refreshInterval = (this._config.refresh_interval || DEFAULT_REFRESH_INTERVAL) * 1000;
    this.refreshTimer = window.setInterval(() => {
      this.fetchRadarData();
    }, refreshInterval);
  }

  /**
   * Stops auto-refresh
   */
  private stopAutoRefresh(): void {
    if (this.refreshTimer) {
      window.clearInterval(this.refreshTimer);
      this.refreshTimer = undefined;
    }
  }

  async firstUpdated(): Promise<void> {
    await this.fetchRadarData();
    this.startAutoRefresh();
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._handleKeyDown);
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._handleKeyDown);
    this.stopAnimation();
    this.stopAutoRefresh();
    
    // Clean up retry timer
    if (this.retryTimer) {
      window.clearTimeout(this.retryTimer);
      this.retryTimer = undefined;
    }
    
    // Clean up preloaded images
    this.preloadedImages.forEach(img => {
      img.src = '';
      img.onload = null;
      img.onerror = null;
    });
    this.preloadedImages = [];
  }

  /**
   * Handle keyboard navigation
   */
  private _handleKeyDown = (e: KeyboardEvent): void => {
    // Only handle if card is focused or contains focused element
    if (!this.shadowRoot?.activeElement && document.activeElement !== this) {
      return;
    }

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        this.previousFrame();
        break;
      case 'ArrowRight':
        e.preventDefault();
        this.nextFrame();
        break;
      case ' ':
        e.preventDefault();
        this.toggleAnimation();
        break;
      case 'Home':
        e.preventDefault();
        this.showFrame(0);
        break;
      case 'End':
        e.preventDefault();
        this.showFrame(this.frames.length - 1);
        break;
    }
  };

  protected override updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    
    // Handle config changes
    if (changedProperties.has('_config')) {
      const oldConfig = changedProperties.get('_config') as BomLocalRadarCardConfig | undefined;
      if (oldConfig && this._config) {
        // If location or timespan changed, refetch data
        if (oldConfig.suburb !== this._config.suburb || 
            oldConfig.state !== this._config.state ||
            oldConfig.timespan !== this._config.timespan ||
            oldConfig.custom_start_time !== this._config.custom_start_time ||
            oldConfig.custom_end_time !== this._config.custom_end_time) {
          this.fetchRadarData();
        }
        // If service URL changed, refetch
        if (oldConfig.service_url !== this._config.service_url) {
          this.fetchRadarData();
        }
        // If refresh interval changed, restart auto-refresh
        if (oldConfig.refresh_interval !== this._config.refresh_interval) {
          this.startAutoRefresh();
        }
        // If frame interval changed and playing, restart animation
        if (oldConfig.frame_interval !== this._config.frame_interval && this.isPlaying) {
          this.stopAnimation();
          this.startAnimation();
        }
      }
    }
  }

  /**
   * Render metadata section
   */
  private _renderMetadata(position: 'above' | 'below' | 'overlay'): TemplateResult | string {
    const config = this._getMetadataConfig();
    if (!config || (typeof config === 'boolean' && !config)) {
      return '';
    }

    const displayConfig = typeof config === 'object' ? config : {};
    // Default position is 'above' if not specified
    const configPosition = displayConfig.position ?? 'above';
    
    // Only render if position matches
    if (configPosition !== position) {
      return '';
    }

    return html`
      <bom-metadata-section
        .radarData=${this.radarData}
        .config=${config}
        .position=${position}
        .locale=${this._getLocale()}
        .timeZone=${this.hass?.config?.time_zone}
        .overlayOpacity=${this._config.metadata_overlay_opacity}
        .overlayPosition=${this._config.metadata_overlay_position}
      ></bom-metadata-section>
    `;
  }


  /**
   * Render radar image with zoom and overlay support
   */
  private _renderRadarImage(): TemplateResult {
    const zoom = this._config.image_zoom || 1.0;
    const fit = this._config.image_fit || 'contain';
    const controlsConfig = this._getControlsConfig();
    const controlsPosition = typeof controlsConfig === 'object' && controlsConfig.position === 'overlay';
    const metadataConfig = this._getMetadataConfig();
    const metadataPosition = typeof metadataConfig === 'object' && metadataConfig.position === 'overlay';
    const currentFrameUrl = this.getCurrentFrameUrl();

    return html`
      <div class="radar-image-container" style="--zoom: ${zoom};">
        ${this.isLoading 
          ? html`
              <div class="loading">
                <ha-circular-progress indeterminate></ha-circular-progress>
                <div class="loading-message">Loading radar data...</div>
              </div>
            `
          : currentFrameUrl 
            ? html`
                <img 
                  class="radar-image radar-image-${fit}"
                  src="${currentFrameUrl}" 
                  alt="Radar frame ${this.currentFrameIndex}"
                  style="transform: scale(${zoom}); transform-origin: center center;"
                  @error="${() => { 
                    this.error = {
                      message: 'Failed to load radar image',
                      type: 'unknown',
                      retryable: true,
                      retryAction: () => this.fetchRadarData(),
                    };
                  }}"
                />
                ${controlsPosition ? this._renderControls('overlay') : ''}
                ${metadataPosition ? this._renderMetadata('overlay') : ''}
              `
            : ''
        }
      </div>
    `;
  }

  /**
   * Render controls section
   */
  private _renderControls(position?: 'above' | 'below' | 'overlay'): TemplateResult {
    const config = this._getControlsConfig();
    if (!config || (typeof config === 'boolean' && !config)) {
      return html``;
    }

    const metadataConfig = this._getMetadataConfig();
    const showFrameTimes = metadataConfig && typeof metadataConfig === 'object' && metadataConfig.show_frame_times !== false;

    return html`
      <bom-controls-section
        .frames=${this.frames}
        .currentFrameIndex=${this.currentFrameIndex}
        .isPlaying=${this.isPlaying}
        .isExtendedMode=${this.isExtendedMode}
        .radarData=${this.radarData}
        .config=${config}
        .position=${position}
        .locale=${this._getLocale()}
        .timeZone=${this.hass?.config?.time_zone}
        .overlayOpacity=${this._config.controls_overlay_opacity}
        .overlayPosition=${this._config.controls_overlay_position}
        .showFrameTimes=${showFrameTimes}
        .onFrameChange=${(index: number) => this.showFrame(index)}
        .onPrevious=${() => this.previousFrame()}
        .onNext=${() => this.nextFrame()}
        .onJumpFrame=${(offset: number) => this.jumpFrame(offset)}
        .onToggleAnimation=${() => this.toggleAnimation()}
      ></bom-controls-section>
    `;
  }

  protected override render(): TemplateResult {
    if (!this._config) {
      return html`<hui-warning>Configuration error</hui-warning>`;
    }

    // Use HA card header if title is configured
    const cardTitle = this._config.show_card_title !== false && this._config.card_title
      ? this._config.card_title
      : undefined;

    // Render error state
    if (this.error) {
      return html`
        <ha-card .header=${cardTitle} tabindex="0" role="region" aria-label="BOM Radar Card">
          <bom-error-display
            .error=${this.error}
            .locale=${this._getLocale()}
            .timeZone=${this.hass?.config?.time_zone}
            .onRetry=${() => {
              if (this.error?.retryAction) {
                this.error.retryAction();
              }
            }}
          ></bom-error-display>
        </ha-card>
      `;
    }

    return html`
      <ha-card 
        .header=${cardTitle} 
        tabindex="0" 
        role="region" 
        aria-label="BOM Radar Card"
        class=${this._getRootClasses()}
      >
        <div id="root">
          ${this._renderMetadata('above')}
          ${this._renderControls('above')}
          ${this._renderRadarImage()}
          ${this._renderMetadata('below')}
          ${this._renderControls('below')}
        </div>
      </ha-card>
    `;
  }

  /**
   * Get CSS classes for root element
   */
  private _getRootClasses(): string {
    const classes: string[] = [];
    const controlsConfig = this._getControlsConfig();
    const controlsPosition = typeof controlsConfig === 'object' && controlsConfig.position === 'overlay';
    const metadataConfig = this._getMetadataConfig();
    const metadataPosition = typeof metadataConfig === 'object' && metadataConfig.position === 'overlay';
    
    if (controlsPosition || metadataPosition) {
      classes.push('overlay-enabled');
    }
    return classes.join(' ');
  }
}

if (!customElements.get('bom-local-radar-card')) {
  customElements.define('bom-local-radar-card', BomLocalRadarCard);
}









