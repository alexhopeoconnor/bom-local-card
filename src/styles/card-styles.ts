import { css, CSSResultGroup } from 'lit';

/**
 * Base card styles including CSS variables and root layout
 */
export const cardStyles: CSSResultGroup = css`
  :host {
    --bom-primary-color: var(--primary-color, #667eea);
    --bom-secondary-color: var(--secondary-text-color, #666);
    --bom-card-background: var(--card-background-color, white);
    --bom-text-color: var(--primary-text-color, #333);
    --bom-border-color: var(--divider-color, #e0e0e0);
  }

  #root {
    width: 100%;
    position: relative;
  }
`;

