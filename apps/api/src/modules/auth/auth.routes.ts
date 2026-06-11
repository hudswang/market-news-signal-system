import { Router } from "express";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";
import { requireAuth } from "../../middleware/auth";
import { login, loginSchema, profile, signup, signupSchema } from "./auth.service";

export const authRoutes = Router();

authRoutes.post(
  "/signup",
  asyncHandler(async (req, res) => ok(res, await signup(signupSchema.parse(req.body))))
);

authRoutes.post(
  "/login",
  asyncHandler(async (req, res) => ok(res, await login(loginSchema.parse(req.body))))
);

authRoutes.get(
  "/profile",
  requireAuth,
  asyncHandler(async (req, res) => ok(res, profile(req.user!.email)))
);
