import { Router } from "express";
import { z } from "zod";
import { watchlists } from "../../data/mock-data";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";
import { requireAuth } from "../../middleware/auth";

const createSchema = z.object({ name: z.string().min(1) });
const tickerSchema = z.object({ ticker: z.string().min(1).max(8).transform((value) => value.toUpperCase()) });

export const watchlistsRoutes = Router();
watchlistsRoutes.use(requireAuth);

watchlistsRoutes.get("/", asyncHandler(async (_req, res) => ok(res, watchlists)));

watchlistsRoutes.post(
  "/",
  asyncHandler(async (req, res) => {
    const input = createSchema.parse(req.body);
    const watchlist = { id: `wl-${Date.now()}`, name: input.name, tickers: [] };
    watchlists.push(watchlist);
    ok(res.status(201), watchlist);
  })
);

watchlistsRoutes.post(
  "/:id/tickers",
  asyncHandler(async (req, res) => {
    const { ticker } = tickerSchema.parse(req.body);
    const watchlist = watchlists.find((item) => item.id === req.params.id);
    if (watchlist && !watchlist.tickers.includes(ticker)) watchlist.tickers.push(ticker);
    ok(res, watchlist);
  })
);

watchlistsRoutes.delete(
  "/:id/tickers/:ticker",
  asyncHandler(async (req, res) => {
    const watchlist = watchlists.find((item) => item.id === req.params.id);
    if (watchlist) watchlist.tickers = watchlist.tickers.filter((ticker) => ticker !== req.params.ticker.toUpperCase());
    ok(res, watchlist);
  })
);
