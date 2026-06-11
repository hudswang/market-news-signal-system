import { Router } from "express";
import { filings } from "../../data/mock-data";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";

export const filingsRoutes = Router();
filingsRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const ticker = typeof req.query.ticker === "string" ? req.query.ticker.toUpperCase() : null;
    ok(res, ticker ? filings.filter((filing) => filing.ticker === ticker) : filings);
  })
);
