import { Router } from "express";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";
import { requireAuth } from "../../middleware/auth";

export const usersRoutes = Router();

usersRoutes.get(
  "/me",
  requireAuth,
  asyncHandler(async (req, res) => ok(res, { id: req.user!.sub, email: req.user!.email, role: "researcher" }))
);
