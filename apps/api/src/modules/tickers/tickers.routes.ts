import { Router } from "express";
import { tickers } from "../../data/mock-data";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";

export const tickersRoutes = Router();
tickersRoutes.get("/", asyncHandler(async (_req, res) => ok(res, tickers)));
