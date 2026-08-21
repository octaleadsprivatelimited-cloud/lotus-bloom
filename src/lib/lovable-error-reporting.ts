/**
 * Simple error reporting utility.
 * Reports errors to the console for server-side logging.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}): void {
  if (typeof window !== "undefined") {
    console.error("Client error:", { error, ...context });
  }
}
