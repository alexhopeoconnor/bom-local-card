import { ApiErrorResponse, ErrorState } from '../types';

export interface ErrorHandlerOptions {
  retryAction: () => void;
  defaultRetryAfter?: number;
}

/**
 * Parses API error response and creates ErrorState
 * Consolidates duplicated error handling logic from fetchRadarData and fetchHistoricalRadar
 */
export function parseApiError(
  response: Response,
  errorData: ApiErrorResponse | any,
  parsedJson: boolean,
  options: ErrorHandlerOptions
): ErrorState {
  // Extract error information (support both camelCase and PascalCase)
  const errorCode = errorData.errorCode || errorData.ErrorCode;
  const message = errorData.message || errorData.Message || response.statusText || 'An error occurred';
  const errorType = errorData.errorType || errorData.ErrorType;
  const details = errorData.details || errorData.Details || {};
  const suggestions = errorData.suggestions || errorData.Suggestions || {};

  // Build enhanced error message
  let enhancedMessage = message;

  // Enhance message for cache not found scenarios
  if (errorCode === 'CACHE_NOT_FOUND' || (response.status === 404 && !errorCode)) {
    if (!enhancedMessage.includes('cache') && !enhancedMessage.includes('Cache')) {
      enhancedMessage = 'No cached data found for this location. Cache update has been triggered in background. Please retry in a few moments.';
    }
  }

  // Handle previous update failure
  if (details.previousUpdateFailed) {
    enhancedMessage = `${enhancedMessage}\n\nPrevious update failed: ${details.previousError || 'Unknown error'}`;
    if (details.previousErrorCode) {
      enhancedMessage += ` (${details.previousErrorCode})`;
    }
  }

  // Handle time range errors with available/requested ranges
  if (errorCode === 'TIME_RANGE_ERROR' && details.availableRange) {
    const available = details.availableRange;
    const requested = details.requestedRange;
    enhancedMessage += `\n\nAvailable data: ${available.oldest || 'N/A'} to ${available.newest || 'N/A'}`;
    if (available.totalCacheFolders) {
      enhancedMessage += ` (${available.totalCacheFolders} cache folders)`;
    }
    if (requested) {
      enhancedMessage += `\nRequested: ${requested.start || 'N/A'} to ${requested.end || 'N/A'}`;
    }
    if (details.requestedHours) {
      enhancedMessage += `\nRequested range: ${details.requestedHours} hours (max: ${details.maxHours || 'N/A'} hours)`;
    }
    // Add service suggestion if available
    if (suggestions.suggestion) {
      enhancedMessage += `\n\n💡 ${suggestions.suggestion}`;
    }
  }

  // Determine retry behavior
  const retryAfter = suggestions.retryAfter as number || 
                     details.retryAfter as number || 
                     options.defaultRetryAfter || 30;
  const action = suggestions.action as string || 'retry_after_seconds';
  
  const shouldAutoRetry = action !== 'manual_refresh_recommended' && 
                         action !== 'check_network_and_retry' &&
                         action !== 'adjust_time_range';

  // Map error type
  const mappedType = mapErrorType(errorType || errorCode || (response.status === 404 ? 'CACHE_NOT_FOUND' : 'unknown'));

  // Determine retryable status - for historical endpoint, also allow 400
  const isHistoricalEndpoint = response.url.includes('/timeseries');
  const retryable = response.status === 404 || (isHistoricalEndpoint && response.status === 400);

  return {
    message: enhancedMessage,
    type: mappedType,
    retryable: retryable,
    retryAction: options.retryAction,
    retryAfter: shouldAutoRetry ? retryAfter : undefined,
    errorCode: errorCode || (response.status === 404 ? 'CACHE_NOT_FOUND' : `HTTP_${response.status}`),
    details: {
      ...details,
      action: action,
      refreshEndpoint: suggestions.refreshEndpoint as string,
      statusEndpoint: suggestions.statusEndpoint as string,
      suggestedRange: suggestions.suggestedRange as any,
    },
  };
}

/**
 * Maps API error type to card error type
 */
function mapErrorType(apiErrorType: string): ErrorState['type'] {
  if (!apiErrorType) return 'unknown';
  const type = apiErrorType.toLowerCase();
  if (type.includes('cache') || type === 'cache_not_found' || type === 'cacheerror') return 'cache';
  if (type.includes('validation') || type === 'validation_error' || type === 'validationerror') return 'validation';
  if (type.includes('network') || type.includes('fetch')) return 'network';
  if (type.includes('notfound') || type === 'not_found' || type === 'notfounderror') return 'cache';
  return 'unknown';
}

/**
 * Attempts to parse error response from API
 */
export async function parseErrorResponse(response: Response): Promise<{ errorData: ApiErrorResponse | any; parsedJson: boolean }> {
  let errorData: ApiErrorResponse | any;
  let parsedJson = false;
  
  try {
    errorData = await response.json();
    parsedJson = true;
  } catch {
    // If JSON parsing fails, create a basic error structure
    errorData = { 
      message: response.statusText || 'Unknown error',
      errorCode: response.status === 404 ? 'NOT_FOUND' : 'HTTP_ERROR',
      errorType: 'ServiceError'
    };
  }
  
  return { errorData, parsedJson };
}

