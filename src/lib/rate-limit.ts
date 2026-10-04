/**
 * Límite de envíos en memoria, por instancia de Cloud Run: protección mínima,
 * no distribuida (cada instancia lleva su propio conteo).
 */
export function createRateLimiter(windowMs: number, maxRequests: number) {
  const log = new Map<string, number[]>();

  return function isRateLimited(key: string): boolean {
    const now = Date.now();
    const timestamps = (log.get(key) ?? []).filter((t) => now - t < windowMs);
    timestamps.push(now);
    log.set(key, timestamps);
    return timestamps.length > maxRequests;
  };
}

export function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
