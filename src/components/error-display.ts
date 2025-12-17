import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { errorStyles } from '../styles/error-styles';
import { formatTimestamp } from '../utils/date-formatter';
import type { ErrorState } from '../types';

@customElement('bom-error-display')
export class BomErrorDisplay extends LitElement {
  static override styles = [errorStyles];

  @property({ attribute: false }) error?: ErrorState;
  @property({ attribute: false }) locale: string = 'en-AU';
  @property({ attribute: false }) timeZone?: string;
  @property({ attribute: false }) onRetry?: () => void;

  private _getErrorIcon(): string {
    if (!this.error) return 'mdi:alert';
    switch (this.error.type) {
      case 'cache':
        return 'mdi:database-alert';
      case 'validation':
        return 'mdi:alert-circle';
      case 'network':
        return 'mdi:wifi-off';
      default:
        return 'mdi:alert';
    }
  }

  private _getErrorColor(): string {
    if (!this.error) return '#f44336';
    switch (this.error.type) {
      case 'cache':
        return '#ff9800';
      case 'validation':
        return '#f44336';
      case 'network':
        return '#2196f3';
      default:
        return '#f44336';
    }
  }

  private _getErrorTitle(): string {
    if (!this.error) return 'Error';
    switch (this.error.type) {
      case 'cache':
        return 'Cache Error';
      case 'validation':
        return 'Validation Error';
      case 'network':
        return 'Network Error';
      default:
        return 'Error';
    }
  }

  protected override render(): TemplateResult {
    if (!this.error) {
      return html``;
    }

    const action = this.error.details?.action as string;
    const isManualRefreshRecommended = action === 'manual_refresh_recommended';
    const refreshEndpoint = this.error.details?.refreshEndpoint as string;
    
    const retryInfo = this.error.retryAfter 
      ? html`<div class="error-retry-info">Auto-retrying in ${this.error.retryAfter} seconds...</div>`
      : isManualRefreshRecommended
      ? html`<div class="error-retry-info">Manual refresh recommended. Previous update failed.</div>`
      : '';
    
    // Format error message with line breaks (preserve empty lines)
    const errorLines = this.error.message.split('\n');
    const errorMessage = errorLines.map((line, index) => 
      line.trim() 
        ? html`<div class="error-line">${line}</div>`
        : html`<div class="error-line-spacer"></div>`
    );
    
    // Show additional details if available
    const showDetails = this.error.details && (
      this.error.details.previousUpdateFailed ||
      this.error.details.availableRange ||
      this.error.details.requestedRange ||
      this.error.details.suggestedRange ||
      refreshEndpoint
    );
    
    // Determine icon and color based on error type
    const errorIcon = this._getErrorIcon();
    const errorColor = this._getErrorColor();
    
    return html`
      <div class="error-container">
        <div class="error-card" style="--error-color: ${errorColor}">
          <div class="error-header">
            <ha-icon class="error-icon" .icon=${errorIcon}></ha-icon>
            <div class="error-title">${this._getErrorTitle()}</div>
          </div>
          <div class="error-content">
            <div class="error-message">${errorMessage}</div>
            ${this.error.errorCode ? html`
              <div class="error-code">
                <ha-icon class="code-icon" icon="mdi:code-tags"></ha-icon>
                <span>Error Code: ${this.error.errorCode}</span>
              </div>
            ` : ''}
            ${showDetails ? html`
              <div class="error-details">
                ${this.error.details?.previousUpdateFailed ? html`
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:alert-circle"></ha-icon>
                    <div class="detail-content">
                      <strong>Previous Update Failed:</strong> ${this.error.details.previousError || 'Unknown error'}
                      ${this.error.details.previousErrorCode ? html` (${this.error.details.previousErrorCode})` : ''}
                    </div>
                  </div>
                ` : ''}
                ${this.error.details?.availableRange ? html`
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:database-clock"></ha-icon>
                    <div class="detail-content">
                      <strong>Available Data Range:</strong> ${this.error.details.availableRange.oldest ? formatTimestamp(this.error.details.availableRange.oldest, this.locale, this.timeZone) : 'N/A'} to ${this.error.details.availableRange.newest ? formatTimestamp(this.error.details.availableRange.newest, this.locale, this.timeZone) : 'N/A'}
                      ${this.error.details.availableRange.totalCacheFolders ? html` (${this.error.details.availableRange.totalCacheFolders} folders)` : ''}
                    </div>
                  </div>
                ` : ''}
                ${this.error.details?.requestedRange ? html`
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:calendar-range"></ha-icon>
                    <div class="detail-content">
                      <strong>Requested Range:</strong> ${this.error.details.requestedRange.start ? formatTimestamp(this.error.details.requestedRange.start, this.locale, this.timeZone) : 'N/A'} to ${this.error.details.requestedRange.end ? formatTimestamp(this.error.details.requestedRange.end, this.locale, this.timeZone) : 'N/A'}
                    </div>
                  </div>
                ` : ''}
                ${this.error.details?.suggestedRange ? html`
                  <div class="error-detail-item suggested-range">
                    <ha-icon class="detail-icon" icon="mdi:lightbulb-on"></ha-icon>
                    <div class="detail-content">
                      <strong>Suggested Range:</strong> ${this.error.details.suggestedRange.start ? formatTimestamp(this.error.details.suggestedRange.start, this.locale, this.timeZone) : 'N/A'} to ${this.error.details.suggestedRange.end ? formatTimestamp(this.error.details.suggestedRange.end, this.locale, this.timeZone) : 'N/A'}
                      <div class="suggestion-hint">Try using this time range instead</div>
                    </div>
                  </div>
                ` : ''}
                ${refreshEndpoint ? html`
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:refresh"></ha-icon>
                    <div class="detail-content">
                      <strong>Refresh Endpoint:</strong> <code>${refreshEndpoint}</code>
                    </div>
                  </div>
                ` : ''}
              </div>
            ` : ''}
            ${retryInfo}
            ${this.error.retryable && this.onRetry ? html`
              <div class="error-actions">
                <button
                  class="retry-button"
                  type="button"
                  style="--error-color: ${errorColor}"
                  @click=${(e: Event) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.onRetry) {
                      this.onRetry();
                    }
                  }}
                >
                  <ha-icon class="retry-icon" icon="mdi:refresh"></ha-icon>
                  <span>${isManualRefreshRecommended ? 'Retry Anyway' : 'Retry Now'}</span>
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bom-error-display': BomErrorDisplay;
  }
}

