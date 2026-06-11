import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env";
import { errorHandler, ok } from "./lib/http";
import { alertsRoutes } from "./modules/alerts/alerts.routes";
import { authRoutes } from "./modules/auth/auth.routes";
import { calendarRoutes } from "./modules/calendar/calendar.routes";
import { dashboardRoutes } from "./modules/dashboard/dashboard.routes";
import { filingsRoutes } from "./modules/filings/filings.routes";
import { newsRoutes } from "./modules/news/news.routes";
import { sourcesRoutes } from "./modules/sources/sources.routes";
import { tickersRoutes } from "./modules/tickers/tickers.routes";
import { usersRoutes } from "./modules/users/users.routes";
import { watchlistsRoutes } from "./modules/watchlists/watchlists.routes";

export function createApp() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: env.WEB_ORIGIN, credentials: true }));
  app.use(express.json());
  app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));

  app.get("/health", (_req, res) => ok(res, { ok: true, service: "market-news-api" }));
  app.use("/api/auth", authRoutes);
  app.use("/api/users", usersRoutes);
  app.use("/api/news", newsRoutes);
  app.use("/api/watchlists", watchlistsRoutes);
  app.use("/api/alerts", alertsRoutes);
  app.use("/api/dashboard", dashboardRoutes);
  app.use("/api/economic-calendar", calendarRoutes);
  app.use("/api/filings", filingsRoutes);
  app.use("/api/sources", sourcesRoutes);
  app.use("/api/tickers", tickersRoutes);

  app.use(errorHandler);
  return app;
}
