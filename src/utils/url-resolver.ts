/**
 * Resolves a URL relative to the service URL if it's a relative path
 * Service returns relative URLs like "/api/radar/.../frame/..." which need
 * to be resolved against the service_url base
 */
export function resolveImageUrl(url: string, serviceUrl: string): string {
  if (!url) return url;
  
  // If URL is already absolute (starts with http:// or https://), use as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Remove trailing slash from serviceUrl
  const baseUrl = serviceUrl.replace(/\/$/, '');
  
  // If URL is relative (starts with /), resolve against service URL
  if (url.startsWith('/')) {
    return `${baseUrl}${url}`;
  }
  
  // If URL is relative without leading slash, resolve against service URL with path
  return `${baseUrl}/${url}`;
}

