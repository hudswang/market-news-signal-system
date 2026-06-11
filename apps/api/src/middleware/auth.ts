import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../lib/http";
import { verifyToken, type JwtUser } from "../lib/auth";

declare global {
  namespace Express {
    interface Request {
      user?: JwtUser;
    }
  }
}

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    next(new HttpError(401, "Missing bearer token"));
    return;
  }

  try {
    req.user = verifyToken(header.slice("Bearer ".length));
    next();
  } catch {
    next(new HttpError(401, "Invalid or expired token"));
  }
}
