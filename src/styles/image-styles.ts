import { css, CSSResultGroup } from 'lit';

/**
 * Styles for radar image container and loading states
 */
export const imageStyles: CSSResultGroup = css`
  /* Radar Image Container */
  .radar-image-container {
    position: relative;
    width: 100%;
    background: #000;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
    aspect-ratio: 16/9;
    min-height: 200px; /* Smaller on mobile */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 480px) {
    .radar-image-container {
      min-height: 300px;
    }
  }

  @media (min-width: 768px) {
    .radar-image-container {
      min-height: 400px;
    }
  }

  .radar-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    image-rendering: crisp-edges;
    transition: transform 0.3s ease;
  }

  .radar-image-contain {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .radar-image-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .radar-image-fill {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .loading-message {
    font-size: 0.9em;
    opacity: 0.9;
  }
`;

