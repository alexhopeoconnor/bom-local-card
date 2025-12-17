/**
 * Formats timestamp for display
 */
export function formatTimestamp(
  isoString: string,
  locale: string = 'en-AU',
  timeZone?: string
): string {
  if (!isoString) return '-';
  const date = new Date(isoString);
  const tz = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  return date.toLocaleString(locale, {
    timeZone: tz,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Relative time (e.g., "5 min ago", "2 hours ago")
 */
export function formatRelativeTime(isoString: string): string {
  if (!isoString) return '-';
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

