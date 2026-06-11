import { Router } from "express";
import { sources } from "../../data/mock-data";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";

export const sourcesRoutes = Router();
sourcesRoutes.get("/", asyncHandler(async (_req, res) => ok(res, sources)));
