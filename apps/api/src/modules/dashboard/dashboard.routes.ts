import { Router } from "express";
import { articles, watchlists } from "../../data/mock-data";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";

export const dashboardRoutes = Router();

dashboardRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const watchlist = watchlists.find((item) => item.id === req.query.watchlistId) ?? watchlists[0];
    const tickerCounts = new Map<string, number>();
    const sentiment = { positive: 0, neutral: 0, negative: 0 };
    articles.forEach((article) => {
      sentiment[article.sentimentLabel] += 1;
      article.tickers.forEach((ticker) => tickerCounts.set(ticker, (tickerCounts.get(ticker) ?? 0) + 1));
    });
    const newsVolumeByTicker = [...tickerCounts.entries()].map(([ticker, count]) => ({ ticker, count }));
    ok(res, {
      trendingTickers: newsVolumeByTicker.map((item) => ({ ticker: item.ticker, mentions: item.count, impactScore: item.count * 100 })),
      breakingNews: articles.slice(0, 5),
      highImpactEvents: articles.filter((article) => article.impactLevel === "high"),
      marketSentiment: sentiment,
      newsVolumeByTicker,
      watchlistNews: articles.filter((article) => article.tickers.some((ticker) => watchlist.tickers.includes(ticker)))
    });
  })
);
