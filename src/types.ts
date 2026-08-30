import { LovelaceCardConfig } from 'custom-card-helpers';

// API Response types matching the .NET service
export interface RadarResponse {
  frames: RadarFrame[];
  lastUpdated: string;  // ISO 8601 UTC
  observationTime: string;  // ISO 8601 UTC
  forecastTime: string;  // ISO 8601 UTC
  weatherStation?: string;
  distance?: string;
  cacheIsValid: boolean;
  cacheExpiresAt?: string;  // ISO 8601 UTC
  isUpdating: boolean;
  nextUpdateTime?: string;  // ISO 8601 UTC
}

export interface RadarFrame {
  frameIndex: number;
  imageUrl: string;
  minutesAgo: number;
  absoluteObservationTime?: string;  // ISO 8601 UTC
  cacheTimestamp?: string;  // For extended mode
  observationTime?: string;  // For extended mode
  cacheFolderName?: string;  // For extended mode
  sequentialIndex?: number;  // For extended mode
}

export interface RadarTimeSeriesResponse {
  cacheFolders: RadarCacheFolderFrames[];
  startTime?: string;
  endTime?: string;
  totalFrames: number;
}

export interface RadarCacheFolderFrames {
  cacheFolderName: string;
  cacheTimestamp: string;
  observationTime: string;
  frames: RadarFrame[];
}

export interface CacheRangeInfo {
  totalCacheFolders: number;
  timeSpanMinutes?: number;
  oldestCache: {
    cacheTimestamp: string;
  };
  newestCache: {
    cacheTimestamp: string;
  };
}

// Metadata display configuration
export interface MetadataDisplayConfig {
  show_cache_status?: boolean;
  show_observation_time?: boolean;
  show_forecast_time?: boolean;
  show_weather_station?: boolean;
  show_distance?: boolean;
  show_next_update?: boolean;
  show_frame_times?: boolean;  // Show frame observation times
  position?: 'above' | 'below' | 'overlay';
  style?: 'cards' | 'compact' | 'minimal';
}

// Controls display configuration
export interface ControlsDisplayConfig {
  show_play_pause?: boolean;
  show_prev_next?: boolean;
  show_slider?: boolean;
  show_nav_buttons?: boolean;  // First, -10, +10, Last
  show_frame_info?: boolean;  // Frame X of Y, timestamp
  position?: 'above' | 'below' | 'overlay';
}

// API Error Response structure matching the service
export interface ApiErrorResponse {
  errorCode: string;
  message: string;
  errorType: string;
  details?: Record<string, any>;
  suggestions?: Record<string, any>;
  timestamp?: string;
}

// Error state interface
export interface ErrorState {
  message: string;
  type: 'network' | 'cache' | 'config' | 'validation' | 'unknown';
  retryable: boolean;
  retryAction?: () => void;
  retryAfter?: number; // seconds (undefined if manual refresh recommended)
  errorCode?: string;
  details?: Record<string, any>; // Includes action, refreshEndpoint, statusEndpoint from API suggestions
}

// Grid options for HA sections view
export interface GridOptions {
  columns?: number;
  /**
   * A fixed row count. Omit this for content whose height changes after it is
   * rendered, such as a radar image loaded asynchronously.
   */
  rows?: number;
  min_columns?: number;
  min_rows?: number;
  max_columns?: number;
  max_rows?: number;
}

// Card configuration
export interface BomLocalRadarCardConfig extends LovelaceCardConfig {
  type: 'custom:bom-local-card';
  
  // Service configuration
  service_url?: string;  // Internal/Legacy: now managed by the Home Assistant integration
  suburb: string;  // Required: suburb name (e.g., "Pomona")
  state: string;  // Required: state abbreviation (e.g., "QLD")
  
  // Display
  show_card_title?: boolean;  // Show/hide card title (uses HA card header)
  card_title?: string;
  show_metadata?: boolean | MetadataDisplayConfig;  // Granular metadata display
  
  // Control visibility
  show_controls?: boolean | ControlsDisplayConfig;  // Granular control visibility
  
  // Image display
  image_zoom?: number;  // 1.0 = 100%, 1.5 = 150%, etc. (0.5 to 3.0)
  image_fit?: 'contain' | 'cover' | 'fill';
  
  // Controls overlay options (separate from metadata overlay)
  controls_overlay_position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  controls_overlay_opacity?: number;  // 0.0 to 1.0
  
  // Metadata overlay options (separate from controls overlay)
  metadata_overlay_position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  metadata_overlay_opacity?: number;  // 0.0 to 1.0
  
  // Slideshow configuration
  timespan?: 'latest' | '1h' | '3h' | '6h' | '12h' | '24h' | 'custom';  // Historical data timespan
  frame_interval?: number;  // Seconds between frames (default: 2.0)
  auto_play?: boolean;  // Auto-start animation (default: true)
  
  // Auto-refresh
  refresh_interval?: number;  // Seconds between API refreshes (default: 30)
  
  // Custom time range (for timespan: 'custom')
  custom_start_time?: string;  // ISO 8601 datetime
  custom_end_time?: string;  // ISO 8601 datetime
  
  // Localization
  locale?: string;  // Override locale (defaults to HA locale)
}










