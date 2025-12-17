import { css, CSSResultGroup } from 'lit';

/**
 * Styles for metadata display sections
 */
export const metadataStyles: CSSResultGroup = css`
  /* Metadata Section */
  .metadata-section {
    margin-bottom: 15px;
  }

  .metadata-section.metadata-cards {
    display: grid;
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 12px;
  }

  @media (min-width: 480px) {
    .metadata-section.metadata-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .metadata-section.metadata-cards {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
  }

  .metadata-section.metadata-cards .metadata-item {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }

  .metadata-section.metadata-cards .metadata-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }

  .metadata-section.metadata-cards .metadata-label {
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.7;
    margin-bottom: 2px;
  }

  .metadata-section.metadata-cards .metadata-value {
    font-size: 1.1em;
    font-weight: 600;
  }

  .metadata-section.metadata-compact {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 0.9em;
  }

  .metadata-section.metadata-compact .metadata-item {
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    padding: 8px 12px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .metadata-section.metadata-minimal {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.85em;
  }

  .metadata-section.metadata-minimal .metadata-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }

  .metadata-section.metadata-minimal .metadata-item:last-child {
    border-bottom: none;
  }

  .metadata-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .metadata-label {
    color: var(--bom-secondary-color);
    font-weight: 600;
    font-size: 0.85em;
  }

  .metadata-value {
    color: var(--bom-text-color);
    font-weight: 600;
  }

  .metadata-relative {
    color: var(--bom-secondary-color);
    font-size: 0.85em;
  }

  .info-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 15px;
  }

  .info-card {
    background: var(--bom-card-background);
    border-radius: 8px;
    padding: 15px;
    border-left: 4px solid var(--bom-primary-color);
  }

  .info-card h3 {
    font-size: 0.8em;
    text-transform: uppercase;
    color: var(--bom-secondary-color);
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }

  .info-card .value {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--bom-text-color);
  }
`;

