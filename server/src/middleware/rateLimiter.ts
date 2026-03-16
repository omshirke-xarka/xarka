import type { Request, Response, NextFunction } from "express";

const MAX_REQUESTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const CLEANUP_INTERVAL = 10 * 60 * 1000; // 10 minutes

const requestLog = new Map<string, number[]>();

// Periodically clean up stale entries
const cleanup = setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of requestLog) {
    const valid = timestamps.filter((t) => now - t < WINDOW_MS);
    if (valid.length === 0) {
      requestLog.delete(ip);
    } else {
      requestLog.set(ip, valid);
    }
  }
}, CLEANUP_INTERVAL);
cleanup.unref();

export function rateLimiter(req: Request, res: Response, next: NextFunction): void {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();

  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    res.status(429).json({ success: false, message: "Too many requests. Please try again later." });
    return;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  next();
}
