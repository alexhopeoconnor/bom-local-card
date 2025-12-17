import { css, CSSResultGroup } from 'lit';

/**
 * Styles for error display components
 */
export const errorStyles: CSSResultGroup = css`
  /* Error Display */
  .error-container {
    padding: 16px;
  }

  .error-card {
    background: var(--card-background-color, #ffffff);
    border-radius: 12px;
    border-left: 4px solid var(--error-color);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .error-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 18px 20px;
    background: var(--secondary-background-color, #fafafa);
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
  }

  .error-icon {
    color: var(--error-color);
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .error-title {
    font-size: 1.1em;
    font-weight: 600;
    color: var(--primary-text-color, #212121);
    flex: 1;
  }

  .error-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .error-message {
    font-weight: 500;
    line-height: 1.7;
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: var(--primary-text-color, #212121);
    font-size: 1.05em;
    margin-bottom: 4px;
  }

  .error-line {
    min-height: 1.2em;
  }

  .error-line-spacer {
    height: 0.5em;
  }

  .error-code {
    font-size: 0.85em;
    font-family: monospace;
    color: var(--secondary-text-color, #666);
    background: var(--secondary-background-color, #f5f5f5);
    padding: 6px 12px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
  }

  .code-icon {
    width: 16px;
    height: 16px;
    opacity: 0.7;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .error-retry-info {
    font-size: 0.9em;
    color: var(--primary-text-color, #212121);
    padding: 10px 14px;
    background: linear-gradient(135deg, 
      rgba(33, 150, 243, 0.08) 0%, 
      rgba(33, 150, 243, 0.04) 100%);
    border-radius: 8px;
    border-left: 3px solid var(--primary-color, #2196f3);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
  }

  .error-retry-info::before {
    content: '⏱';
    font-size: 1.1em;
  }

  .error-details {
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .error-detail-item {
    font-size: 0.9em;
    line-height: 1.6;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px;
    background: var(--secondary-background-color, #fafafa);
    border-radius: 8px;
    transition: background 0.2s ease;
  }

  .error-detail-item:hover {
    background: var(--secondary-background-color, #f0f0f0);
  }

  .detail-icon {
    color: var(--error-color);
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }

  .detail-content {
    flex: 1;
    color: var(--primary-text-color, #212121);
  }

  .detail-content strong {
    font-weight: 600;
    color: var(--primary-text-color, #212121);
  }

  .detail-content code {
    font-family: monospace;
    font-size: 0.9em;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
    color: var(--primary-text-color, #212121);
    display: inline-block;
    word-break: break-all;
  }

  .error-detail-item.suggested-range {
    background: linear-gradient(135deg, 
      rgba(255, 193, 7, 0.1) 0%, 
      rgba(255, 193, 7, 0.05) 100%);
    border-left: 3px solid var(--warning-color, #ffc107);
  }

  .suggestion-hint {
    font-size: 0.85em;
    color: var(--secondary-text-color, #666);
    margin-top: 4px;
    font-style: italic;
  }

  .error-actions {
    margin-top: 16px;
    display: flex;
    gap: 12px;
    justify-content: flex-start;
  }

  .retry-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    min-height: 44px;
    background: var(--error-color, #f44336);
    color: white !important;
    border: 2px solid var(--error-color, #f44336);
    border-radius: 8px;
    font-size: 0.95em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    font-family: inherit;
    -webkit-appearance: none;
    appearance: none;
    user-select: none;
    position: relative;
    z-index: 1;
    filter: brightness(1.05);
  }
  
  .retry-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    pointer-events: none;
    z-index: -1;
  }

  .retry-button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    filter: brightness(0.95);
  }

  .retry-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .retry-button:focus {
    outline: 2px solid var(--error-color);
    outline-offset: 2px;
  }

  .retry-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .retry-icon {
    width: 18px;
    height: 18px;
    color: white;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }

  .retry-button span {
    color: white;
  }
`;

