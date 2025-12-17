import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { metadataStyles } from '../styles/metadata-styles';
import { overlayStyles } from '../styles/overlay-styles';
import { formatTimestamp, formatRelativeTime } from '../utils/date-formatter';
import type { RadarResponse, MetadataDisplayConfig } from '../types';

@customElement('bom-metadata-section')
export class BomMetadataSection extends LitElement {
  static override styles = [metadataStyles, overlayStyles];

  @property({ attribute: false }) radarData?: RadarResponse;
  @property({ attribute: false }) config?: MetadataDisplayConfig | boolean;
  @property({ attribute: false }) position: 'above' | 'below' | 'overlay' = 'above';
  @property({ attribute: false }) locale: string = 'en-AU';
  @property({ attribute: false }) timeZone?: string;
  @property({ attribute: false }) overlayOpacity?: number;
  @property({ attribute: false }) overlayPosition?: string;

  private _getDisplayConfig(): MetadataDisplayConfig | null {
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

    const configPosition = displayConfig.position ?? 'above';
    
    // Only render if position matches
    if (configPosition !== this.position) {
      return html``;
    }

    // If overlay, render differently
    if (this.position === 'overlay') {
      return this._renderOverlay();
    }

    // Default style is 'cards' if not specified
    const style = displayConfig.style ?? 'cards';

    return html`
      <div class="metadata-section metadata-${this.position} metadata-${style}">
        ${displayConfig.show_cache_status !== false ? this._renderCacheStatus() : ''}
        ${displayConfig.show_observation_time !== false ? this._renderObservationTime() : ''}
        ${displayConfig.show_forecast_time !== false ? this._renderForecastTime() : ''}
        ${displayConfig.show_weather_station !== false ? this._renderWeatherStation() : ''}
        ${displayConfig.show_distance !== false ? this._renderDistance() : ''}
        ${displayConfig.show_next_update !== false ? this._renderNextUpdate() : ''}
      </div>
    `;
  }

  private _renderOverlay(): TemplateResult {
    const displayConfig = this._getDisplayConfig();
    if (!displayConfig) {
      return html``;
    }

    const opacity = this.overlayOpacity ?? 0.85;
    const position = this.overlayPosition ?? 'top';

    return html`
      <div class="metadata-overlay overlay-${position}" style="opacity: ${opacity};">
        ${displayConfig.show_cache_status !== false ? this._renderCacheStatus() : ''}
        ${displayConfig.show_observation_time !== false ? this._renderObservationTime() : ''}
        ${displayConfig.show_forecast_time !== false ? this._renderForecastTime() : ''}
        ${displayConfig.show_weather_station !== false ? this._renderWeatherStation() : ''}
        ${displayConfig.show_distance !== false ? this._renderDistance() : ''}
        ${displayConfig.show_next_update !== false ? this._renderNextUpdate() : ''}
      </div>
    `;
  }

  private _renderCacheStatus(): TemplateResult {
    if (!this.radarData) return html``;
    return html`
      <div class="metadata-item cache-status">
        <span class="metadata-label">Cache:</span>
        <span class="metadata-value">
          ${this.radarData.isUpdating ? 'Updating' : 
            this.radarData.cacheIsValid ? 'Valid' : 'Invalid'}
        </span>
      </div>
    `;
  }

  private _renderObservationTime(): TemplateResult {
    if (!this.radarData?.observationTime) return html``;
    return html`
      <div class="metadata-item observation-time">
        <span class="metadata-label">Observation:</span>
        <span class="metadata-value">
          ${formatTimestamp(this.radarData.observationTime, this.locale, this.timeZone)}
        </span>
        <span class="metadata-relative">
          (${formatRelativeTime(this.radarData.observationTime)})
        </span>
      </div>
    `;
  }

  private _renderForecastTime(): TemplateResult {
    if (!this.radarData?.forecastTime) return html``;
    return html`
      <div class="metadata-item forecast-time">
        <span class="metadata-label">Forecast:</span>
        <span class="metadata-value">${formatTimestamp(this.radarData.forecastTime, this.locale, this.timeZone)}</span>
      </div>
    `;
  }

  private _renderWeatherStation(): TemplateResult {
    if (!this.radarData?.weatherStation) return html``;
    return html`
      <div class="metadata-item weather-station">
        <span class="metadata-label">Station:</span>
        <span class="metadata-value">${this.radarData.weatherStation}</span>
      </div>
    `;
  }

  private _renderDistance(): TemplateResult {
    if (!this.radarData?.distance) return html``;
    return html`
      <div class="metadata-item distance">
        <span class="metadata-label">Distance:</span>
        <span class="metadata-value">${this.radarData.distance}</span>
      </div>
    `;
  }

  private _renderNextUpdate(): TemplateResult {
    if (!this.radarData?.nextUpdateTime) return html``;
    return html`
      <div class="metadata-item next-update">
        <span class="metadata-label">Next Update:</span>
        <span class="metadata-value">${formatTimestamp(this.radarData.nextUpdateTime, this.locale, this.timeZone)}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bom-metadata-section': BomMetadataSection;
  }
}

