import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { controlsStyles } from '../styles/controls-styles';
import { overlayStyles } from '../styles/overlay-styles';
import { formatTimestamp } from '../utils/date-formatter';
import type { RadarFrame, RadarResponse, ControlsDisplayConfig } from '../types';

@customElement('bom-controls-section')
export class BomControlsSection extends LitElement {
  static override styles = [controlsStyles, overlayStyles];

  @property({ attribute: false }) frames: RadarFrame[] = [];
  @property({ attribute: false }) currentFrameIndex: number = 0;
  @property({ attribute: false }) isPlaying: boolean = false;
  @property({ attribute: false }) isExtendedMode: boolean = false;
  @property({ attribute: false }) radarData?: RadarResponse;
  @property({ attribute: false }) config?: ControlsDisplayConfig | boolean;
  @property({ attribute: false }) position?: 'above' | 'below' | 'overlay';
  @property({ attribute: false }) locale: string = 'en-AU';
  @property({ attribute: false }) timeZone?: string;
  @property({ attribute: false }) overlayOpacity?: number;
  @property({ attribute: false }) overlayPosition?: string;
  @property({ attribute: false }) showFrameTimes?: boolean;

  // Event handlers
  @property({ attribute: false }) onFrameChange?: (index: number) => void;
  @property({ attribute: false }) onPrevious?: () => void;
  @property({ attribute: false }) onNext?: () => void;
  @property({ attribute: false }) onJumpFrame?: (offset: number) => void;
  @property({ attribute: false }) onToggleAnimation?: () => void;

  private _getDisplayConfig(): ControlsDisplayConfig | null {
    if (!this.config || (typeof this.config === 'boolean' && !this.config)) {
      return null;
    }
    return typeof this.config === 'object' ? this.config : {};
  }

  protected override render(): TemplateResult {
    const displayConfig = this._getDisplayConfig();
    if (!displayConfig) {
      return html``;
    }

    const configPosition = displayConfig.position ?? 'below';
    
    // Only render if position matches (or if no position filter specified)
    if (this.position !== undefined && configPosition !== this.position) {
      return html``;
    }

    // If overlay, render differently
    if (configPosition === 'overlay') {
      return this._renderOverlay(displayConfig);
    }

    return html`
      <div class="controls-section controls-${configPosition}">
        ${displayConfig.show_slider !== false ? this._renderFrameSlider() : ''}
        ${displayConfig.show_nav_buttons !== false ? this._renderNavButtons() : ''}
        ${displayConfig.show_play_pause !== false ? this._renderPlayPause() : ''}
        ${displayConfig.show_prev_next !== false ? this._renderPrevNext() : ''}
        ${displayConfig.show_frame_info !== false ? this._renderFrameInfo() : ''}
      </div>
    `;
  }

  private _renderOverlay(displayConfig: ControlsDisplayConfig): TemplateResult {
    const opacity = this.overlayOpacity ?? 0.9;
    const position = this.overlayPosition ?? 'bottom';

    return html`
      <div class="controls-overlay overlay-${position}" style="opacity: ${opacity};">
        ${displayConfig.show_slider !== false ? this._renderFrameSlider() : ''}
        ${displayConfig.show_play_pause !== false ? this._renderPlayPause() : ''}
        ${displayConfig.show_prev_next !== false ? this._renderPrevNext() : ''}
        ${displayConfig.show_frame_info !== false ? this._renderFrameInfo() : ''}
      </div>
    `;
  }

  private _renderFrameSlider(): TemplateResult {
    if (this.frames.length === 0) return html``;

    return html`
      <div class="frame-slider-container">
        <div class="frame-slider-wrapper">
          <input 
            type="range" 
            class="frame-slider" 
            min="0" 
            max="${this.frames.length - 1}" 
            .value="${this.currentFrameIndex}"
            @input="${(e: Event) => {
              const index = parseInt((e.target as HTMLInputElement).value);
              if (this.onFrameChange) {
                this.onFrameChange(index);
              }
            }}"
            aria-label="Frame slider"
          />
        </div>
      </div>
    `;
  }

  private _renderNavButtons(): TemplateResult {
    if (this.frames.length === 0) return html``;

    // Calculate dynamic skip amount based on total frames (1/3 of total, min 1, max 50)
    const skipAmount = this.isExtendedMode 
      ? Math.max(1, Math.min(50, Math.round(this.frames.length / 3)))
      : 0;

    return html`
      <div class="frame-nav-buttons">
        ${this.isExtendedMode ? html`
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onFrameChange && this.onFrameChange(0)}"
            ?disabled="${this.currentFrameIndex === 0}"
            title="First frame"
            aria-label="First frame"
          >⏮</button>
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onJumpFrame && this.onJumpFrame(-skipAmount)}"
            ?disabled="${this.currentFrameIndex === 0}"
            title="Go back ${skipAmount} frames"
            aria-label="Go back ${skipAmount} frames"
          >-${skipAmount}</button>
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onJumpFrame && this.onJumpFrame(skipAmount)}"
            ?disabled="${this.currentFrameIndex >= this.frames.length - 1}"
            title="Go forward ${skipAmount} frames"
            aria-label="Go forward ${skipAmount} frames"
          >+${skipAmount}</button>
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onFrameChange && this.onFrameChange(this.frames.length - 1)}"
            ?disabled="${this.currentFrameIndex >= this.frames.length - 1}"
            title="Last frame"
            aria-label="Last frame"
          >⏭</button>
        ` : html`
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onFrameChange && this.onFrameChange(0)}"
            ?disabled="${this.currentFrameIndex === 0}"
            title="First frame"
            aria-label="First frame"
          >⏮</button>
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onFrameChange && this.onFrameChange(this.frames.length - 1)}"
            ?disabled="${this.currentFrameIndex >= this.frames.length - 1}"
            title="Last frame"
            aria-label="Last frame"
          >⏭</button>
        `}
      </div>
    `;
  }

  private _renderPlayPause(): TemplateResult {
    return html`
      <div class="play-controls">
        <button 
          class="play-btn" 
          @click="${() => this.onToggleAnimation && this.onToggleAnimation()}"
          aria-label="${this.isPlaying ? 'Pause animation' : 'Play animation'}"
          aria-pressed="${this.isPlaying}"
        >
          ${this.isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>
    `;
  }

  private _renderPrevNext(): TemplateResult {
    return html`
      <div class="play-controls">
        <button 
          class="play-btn" 
          @click="${() => this.onPrevious && this.onPrevious()}"
          aria-label="Previous frame"
        >◀ Previous</button>
        <button 
          class="play-btn" 
          @click="${() => this.onNext && this.onNext()}"
          aria-label="Next frame"
        >Next ▶</button>
      </div>
    `;
  }

  private _renderFrameInfo(): TemplateResult {
    const currentFrame = this.frames[this.currentFrameIndex];
    if (!currentFrame) return html``;

    const showFrameTimes = this.showFrameTimes !== false;

    // Format frame info
    let frameInfoText = '';
    if (this.isExtendedMode && currentFrame.absoluteObservationTime) {
      frameInfoText = `Frame ${(currentFrame.sequentialIndex ?? this.currentFrameIndex) + 1} of ${this.frames.length}`;
    } else {
      frameInfoText = `Frame ${currentFrame.frameIndex + 1} of ${this.frames.length}`;
    }

    const progress = this.frames.length > 0 
      ? Math.round(((this.currentFrameIndex + 1) / this.frames.length) * 100) 
      : 0;

    return html`
      <div class="frame-info">
        <span class="frame-index">${frameInfoText}</span>
        ${showFrameTimes && currentFrame.absoluteObservationTime ? html`
          <span class="frame-time">
            ${formatTimestamp(currentFrame.absoluteObservationTime, this.locale, this.timeZone)}
          </span>
        ` : showFrameTimes && currentFrame.minutesAgo !== undefined ? html`
          <span class="frame-time">
            ${currentFrame.minutesAgo} min ago
          </span>
        ` : ''}
        ${this.radarData?.observationTime && showFrameTimes ? html`
          <span class="observation-time">
            Obs: ${formatTimestamp(this.radarData.observationTime, this.locale, this.timeZone)}
          </span>
        ` : ''}
        <span class="frame-progress">${progress}%</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bom-controls-section': BomControlsSection;
  }
}

