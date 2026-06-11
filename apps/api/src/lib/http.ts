import type { NextFunction, Request, Response } from "express";
import type { ApiResponse } from "@market-news/shared";

export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
  }
}

export function ok<T>(res: Response, data: T, meta?: Record<string, unknown>) {
  const body: ApiResponse<T> = { data, ...(meta ? { meta } : {}) };
  return res.json(body);
}

export function notFound(message = "Resource not found") {
  return new HttpError(404, message);
}

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  const statusCode = error instanceof HttpError ? error.statusCode : 500;
  const message = error instanceof Error ? error.message : "Internal server error";
  if (statusCode >= 500) {
    console.error(error);
  }
  res.status(statusCode).json({ error: { message } });
}
