import { RadarResponse, RadarTimeSeriesResponse, RadarFrame, ErrorState } from '../types';
import { parseApiError, parseErrorResponse } from '../utils/error-handler';
import { resolveImageUrl } from '../utils/url-resolver';
import { DEFAULT_SERVICE_URL } from '../const';

export interface FetchRadarOptions {
  serviceUrl: string;
  suburb: string;
  state: string;
  timespan?: string;
  customStartTime?: string;
  customEndTime?: string;
  onError: (error: ErrorState) => void;
}

export class RadarApiService {
  /**
   * Fetches latest radar frames from /api/radar/{suburb}/{state}
   */
  async fetchLatestFrames(options: FetchRadarOptions): Promise<RadarResponse | null> {
    const { serviceUrl, suburb, state, onError } = options;
    const url = `${serviceUrl}/api/radar/${suburb}/${state}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });

      if (!response.ok) {
        const { errorData, parsedJson } = await parseErrorResponse(response);
        const error = parseApiError(response, errorData, parsedJson, {
          retryAction: () => this.fetchLatestFrames(options),
          defaultRetryAfter: 30,
        });
        onError(error);
        return null;
      }

      const data: any = await response.json();
      
      // Handle legacy error format (shouldn't happen with structured errors, but handle for compatibility)
      if (data.error) {
        onError({
          message: data.error || 'Service returned an error',
          type: 'cache',
          retryable: true,
          retryAction: () => this.fetchLatestFrames(options),
          retryAfter: data.retryAfter || 30,
        });
        return null;
      }

      // Validate response has frames
      if (!data.frames || data.frames.length === 0) {
        throw new Error('No frames available in response');
      }

      // Resolve relative image URLs against service URL
      // Service returns relative URLs like "/api/radar/.../frame/..." 
      // which need to be absolute for browser to fetch from correct origin
      data.frames.forEach((frame: RadarFrame) => {
        if (frame.imageUrl) {
          frame.imageUrl = resolveImageUrl(frame.imageUrl, serviceUrl);
        }
      });

      return data;
    } catch (err) {
      this.handleFetchError(err, options);
      return null;
    }
  }

  /**
   * Fetches historical radar data from /api/radar/{suburb}/{state}/timeseries
   */
  async fetchHistoricalFrames(options: FetchRadarOptions): Promise<RadarResponse | null> {
    const { serviceUrl, suburb, state, timespan, customStartTime, customEndTime, onError } = options;
    
    try {
      let startTime: Date | null = null;
      let endTime = new Date();

      if (timespan === 'custom') {
        if (customStartTime) startTime = new Date(customStartTime);
        if (customEndTime) endTime = new Date(customEndTime);
      } else if (timespan) {
        // Calculate hours back from now
        const hours = parseInt(timespan.replace('h', '')) || 1;
        startTime = new Date(endTime.getTime() - (hours * 60 * 60 * 1000));
      }

      if (!startTime) {
        throw new Error('Invalid timespan configuration');
      }

      // Build query parameters for timeseries endpoint
      const url = `${serviceUrl}/api/radar/${suburb}/${state}/timeseries?startTime=${startTime.toISOString()}&endTime=${endTime.toISOString()}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });

      if (!response.ok) {
        const { errorData, parsedJson } = await parseErrorResponse(response);
        const error = parseApiError(response, errorData, parsedJson, {
          retryAction: () => this.fetchHistoricalFrames(options),
          defaultRetryAfter: 30,
        });
        onError(error);
        return null;
      }

      const data: RadarTimeSeriesResponse = await response.json();
      
      if (!data.cacheFolders || data.cacheFolders.length === 0) {
        throw new Error('No historical data found for the specified time range.');
      }

      // Flatten all frames from all cache folders
      // The service already sets absoluteObservationTime on each frame
      const allFrames: RadarFrame[] = [];
      data.cacheFolders.forEach(cacheFolder => {
        cacheFolder.frames.forEach(frame => {
          // Store folder metadata for reference (service already sets absoluteObservationTime)
          frame.cacheTimestamp = cacheFolder.cacheTimestamp;
          frame.observationTime = cacheFolder.observationTime;
          frame.cacheFolderName = cacheFolder.cacheFolderName;
          
          // Resolve relative image URLs against service URL
          if (frame.imageUrl) {
            frame.imageUrl = resolveImageUrl(frame.imageUrl, serviceUrl);
          }
          
          // Ensure absoluteObservationTime is set (service should provide this, but handle if missing)
          if (!frame.absoluteObservationTime && frame.observationTime && frame.minutesAgo !== undefined) {
            // Fallback: calculate from observation time and minutes ago
            const obsTime = new Date(frame.observationTime);
            frame.absoluteObservationTime = new Date(obsTime.getTime() - (frame.minutesAgo * 60 * 1000)).toISOString();
          }
          
          allFrames.push(frame);
        });
      });

      // Re-index frames sequentially
      allFrames.forEach((frame, idx) => {
        frame.sequentialIndex = idx;
      });

      // Fetch latest metadata for display from /api/radar/{suburb}/{state}/metadata
      let metadata: Partial<RadarResponse> = {};
      try {
        const metadataUrl = `${serviceUrl}/api/radar/${suburb}/${state}/metadata`;
        const metadataResponse = await fetch(metadataUrl);
        if (metadataResponse.ok) {
          metadata = await metadataResponse.json();
        }
      } catch (err) {
        console.debug('Could not fetch metadata:', err);
      }

      // Create RadarResponse-like object
      const newestCacheFolder = data.cacheFolders[data.cacheFolders.length - 1];
      const radarResponse: RadarResponse = {
        frames: allFrames,
        lastUpdated: endTime.toISOString(),
        observationTime: metadata.observationTime || newestCacheFolder?.observationTime || endTime.toISOString(),
        forecastTime: endTime.toISOString(),
        weatherStation: metadata.weatherStation,
        distance: metadata.distance,
        cacheIsValid: metadata.cacheIsValid ?? true,
        cacheExpiresAt: metadata.cacheExpiresAt || endTime.toISOString(),
        isUpdating: metadata.isUpdating || false,
        nextUpdateTime: metadata.nextUpdateTime || endTime.toISOString(),
      };

      return radarResponse;
    } catch (err) {
      this.handleFetchError(err, options);
      return null;
    }
  }

  /**
   * Handles fetch errors and categorizes them appropriately
   */
  private handleFetchError(err: any, options: FetchRadarOptions): void {
    if (err instanceof TypeError && err.message.includes('fetch')) {
      options.onError({
        message: 'Network error: Unable to connect to service',
        type: 'network',
        retryable: true,
        retryAction: () => this.fetchLatestFrames(options),
      });
    } else {
      options.onError({
        message: err instanceof Error ? err.message : 'Unknown error occurred',
        type: 'unknown',
        retryable: true,
        retryAction: () => this.fetchLatestFrames(options),
      });
    }
  }
}

