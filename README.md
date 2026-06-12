# Stock News Impact Analysis System

A personal research product for studying how specific stocks reacted around news events and prior signals.

The app lets you choose a ticker, inspect a professional close-price line chart, overlay news markers, compare previous signals, and review post-news return windows such as 1 day, 1 week, 1 month, 3 months, and 1 year. It uses realistic sample data and intentionally describes results as associated reactions rather than guaranteed causation.

## Run Locally

Use the local Node server when you want live news refresh, because it serves the static app and proxies public live-news requests from the same origin.

```bash
npm start
```

Then open:

```text
http://127.0.0.1:4182/
```

The original static preview still has no build step, but direct browser calls to live news providers may be blocked in some environments.

```bash
python3 -m http.server 4182
```

Then open the matching local URL:

```text
http://127.0.0.1:4182/
```

Any free port works; use a different number if `4182` is already occupied.

## Optional Full-Stack Scaffold

The repo also includes a production-oriented scaffold for turning the stock news impact analysis product into a backend-backed app:

```text
apps/api        Node.js + Express + TypeScript API
apps/web        React + TypeScript + Tailwind frontend
packages/shared Shared API response types and domain models
infra           PostgreSQL and Redis Docker Compose
```

Install dependencies:

```bash
npm install
```

Start PostgreSQL and Redis:

```bash
docker compose -f infra/docker-compose.yml up -d
```

Set up the database:

```bash
cp .env.example .env
npm run db:generate
npm run db:migrate
npm run db:seed
```

Run the API:

```bash
npm run dev
```

Run the optional React scaffold:

```bash
npm run dev:web
```

Demo credentials:

```text
demo@market.local
password123
```

The API uses mock provider adapters by default, so the app runs without paid data APIs. Real providers can be plugged into the provider interfaces under `apps/api/src/providers`. The richer stock-impact dashboard remains the root static app.

## API Surface

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/profile`
- `GET /api/users/me`
- `GET /api/news`
- `GET /api/tickers`
- `GET /api/watchlists`
- `POST /api/watchlists`
- `POST /api/watchlists/:id/tickers`
- `DELETE /api/watchlists/:id/tickers/:ticker`
- `GET /api/alerts`
- `POST /api/alerts`
- `GET /api/alerts/events`
- `GET /api/dashboard`
- `GET /api/economic-calendar`
- `GET /api/filings`
- `GET /api/sources`

## Current Features

- Ticker dashboard for NVDA, AAPL, TSLA, and JPM.
- Price and volume chart with clickable news event markers.
- Professional close-price line chart with exact open, high, low, close, volume, range, active-window zooming, and news signal markers.
- Event impact windows for 1D, 1W, 1M, 3M, and 1Y returns.
- Return-window controls resize the chart to the selected post-news reaction window and filter chart/timeline signals to that same period.
- Chart zoom controls let users zoom in, zoom out, or reset the visible window without changing the selected signal.
- Sentiment, event type, surprise level, volume anomaly, and confidence signals.
- Previous-signal analysis showing the prior event, prior return, confidence delta, and whether the new headline confirmed or reversed the earlier signal.
- Similar-event comparison for recurring event patterns.
- Dense desktop layout with responsive mobile behavior.
- Multi-view stock-impact interface with Impact Dashboard, Signal Feed, Watchlists, Alerts, Economic Calendar, SEC Filings, and Sources/Admin pages.
- Mock market news feed with article cards, source, URL, published time, tickers, AI-style bullets, summary, sentiment score, category, impact level, why-it-matters, and possible-impact fields.
- Clickable news detail drawer for opening a full impact brief with AI summary bullets, signal telemetry, prior-signal comparison, and 1D/1W/1M/3M/1Y reaction table.
- Live news refresh button and five-minute background polling through the local server, using public GDELT article search with a Google News RSS fallback, merged into the stock signal feed as live impact candidates.
- Professional chart hover tooltip that updates OHLC values and shows the news signal linked to hovered price markers.
- Search and filters for ticker, source, category, and sentiment.
- Watchlist management UI with multiple watchlists, add/remove ticker controls, and watchlist-specific news.
- Alert rule UI for breaking news, negative sentiment, high-impact events, earnings news, SEC filings, and unusual news volume.
- Economic calendar and SEC filing mock adapter pages.
- Source management view with reliability score, category, and enabled status.
- Full-stack coverage checklist showing which requested features are implemented in the static MVP and which still need a real backend.

## Full-Stack Spec Coverage

Covered in this static MVP:

- Stock news impact feed
- Live article refresh from public no-key news search sources through the local server
- Ticker filtering
- Watchlists
- Alerts UI and mock rule evaluation
- AI-style summaries
- Mock sentiment analysis
- Impact dashboard cards
- Economic calendar
- SEC filings
- Source/admin management display
- Responsive financial dashboard UI
- Mock data that runs without paid APIs

Not yet implemented as true backend infrastructure:

- Completed 1D/1W/1M/3M/1Y return windows for live articles from a real price-history provider
- JWT authentication
- Node/Express REST API
- PostgreSQL database
- Prisma schema and migrations
- BullMQ/Redis background jobs
- React/TypeScript monorepo
- Zod validation and backend tests

## Future Data Sources

The sample dataset in `src/app.js` can later be replaced with:

- Price history from Polygon, Alpha Vantage, IEX Cloud, Tiingo, or Yahoo Finance-compatible exports.
- News from Benzinga, Finnhub, NewsAPI, GDELT, SEC filings, or company press releases.
- AI summaries and classification from a backend service.

## Important Note

This is a research and learning tool, not financial advice. Market movements are affected by many factors beyond a single headline, including rates, earnings expectations, liquidity, positioning, and broader macro conditions.
