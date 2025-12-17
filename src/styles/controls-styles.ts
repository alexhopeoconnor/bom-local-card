import { css, CSSResultGroup } from 'lit';

/**
 * Styles for frame slider, navigation buttons, and play controls
 */
export const controlsStyles: CSSResultGroup = css`
  .frame-slider-container {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 12px;
    border: 2px solid #e0e0e0;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  .frame-slider-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .frame-nav-btn {
    padding: 10px 16px;
    border: 2px solid var(--primary-color, #667eea);
    background: white;
    color: var(--primary-color, #667eea);
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9em;
    transition: all 0.2s;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame-nav-btn:hover:not(:disabled) {
    background: var(--primary-color, #667eea);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  .frame-nav-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #f0f0f0;
    border-color: #d0d0d0;
    color: #999;
  }

  .frame-slider {
    flex: 1;
    min-width: 120px;
    height: 10px;
    border-radius: 5px;
    background: #e0e0e0;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
    order: 3;
  }

  .frame-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
    border: 3px solid white;
    transition: all 0.2s;
    margin-top: -7px; /* Center the 24px thumb on the 10px track: (24-10)/2 = 7 */
  }

  .frame-slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.6);
  }

  .frame-slider::-webkit-slider-runnable-track {
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
  }

  .frame-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    cursor: pointer;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  }

  .frame-slider::-moz-range-track {
    height: 10px;
    border-radius: 5px;
    background: #e0e0e0;
  }

  .frame-slider::-moz-range-progress {
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
  }

  .play-controls {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .play-btn {
    padding: 10px 16px;
    border: 2px solid var(--primary-color, #667eea);
    background: var(--primary-color, #667eea);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9em;
    transition: all 0.2s;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-btn:hover:not(:disabled) {
    background: var(--primary-color-dark, #5568d3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  .play-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .frame-info {
    text-align: center;
    color: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
    font-size: 0.85em;
    margin-top: 6px;
    margin-bottom: 4px;
    padding: 6px 12px;
    background: var(--card-background-color, #fff);
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    line-height: 1.4;
  }

  .frame-index {
    font-weight: 600;
    color: var(--primary-text-color, rgba(0, 0, 0, 0.87));
    white-space: nowrap;
  }

  .frame-time {
    white-space: nowrap;
    color: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
  }

  .observation-time {
    white-space: nowrap;
    color: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
  }

  .frame-progress {
    white-space: nowrap;
    color: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
    font-size: 0.9em;
  }

  .frame-nav-buttons {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .controls-section {
    margin-top: 15px;
  }

  /* Responsive adjustments */
  @media (min-width: 480px) {
    .frame-slider-wrapper {
      flex-wrap: nowrap;
    }
    .frame-slider {
      order: 0;
    }
  }
`;

