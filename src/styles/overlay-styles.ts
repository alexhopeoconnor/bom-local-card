import { css, CSSResultGroup } from 'lit';

/**
 * Styles for overlay controls and metadata overlays
 */
export const overlayStyles: CSSResultGroup = css`
  /* Overlay Controls */
  .controls-overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    padding: 12px;
    z-index: 10;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 200px;
  }

  .controls-overlay.overlay-top {
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
  }

  .controls-overlay.overlay-bottom {
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }

  .controls-overlay.overlay-left {
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .controls-overlay.overlay-right {
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .controls-overlay.overlay-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Metadata Overlay */
  .metadata-overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    border-radius: 6px;
    padding: 8px 12px;
    z-index: 5;
    font-size: 0.85em;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .metadata-overlay .metadata-item {
    color: white;
  }

  .metadata-overlay .metadata-label {
    color: rgba(255, 255, 255, 0.8);
  }

  .metadata-overlay.overlay-top {
    top: 12px;
    left: 12px;
    right: auto;
  }

  .metadata-overlay.overlay-bottom {
    bottom: 12px;
    left: 12px;
    right: auto;
  }

  .metadata-overlay.overlay-left {
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .metadata-overlay.overlay-right {
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .metadata-overlay.overlay-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

