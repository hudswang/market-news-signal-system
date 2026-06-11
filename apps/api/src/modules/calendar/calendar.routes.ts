import { Router } from "express";
import { economicEvents } from "../../data/mock-data";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";

export const calendarRoutes = Router();
calendarRoutes.get("/", asyncHandler(async (_req, res) => ok(res, economicEvents)));
