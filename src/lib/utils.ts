export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

/** Metadata title helper that keeps pages readable in search results. */
export function pageTitle(title: string): string {
  return `${title} | HAFERA FRESH Pekanbaru`;
}
