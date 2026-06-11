# Market News Signal System

A personal research MVP for studying how stock prices reacted around market news events.

The app lets you choose a ticker, inspect a historical price chart, overlay news markers, and compare post-news return windows such as 1 day, 3 days, 7 days, and 30 days. It uses realistic sample data and intentionally describes results as associated reactions rather than guaranteed causation.

## Run Locally

This project has no build step.

```bash
python3 -m http.server 4182
```

Then open the matching local URL:

```text
http://127.0.0.1:4182/
```

Any free port works; use a different number if `4182` is already occupied.

## Current Features

- Ticker dashboard for NVDA, AAPL, TSLA, and JPM.
- Price and volume chart with clickable news event markers.
- Professional OHLC candlestick chart with exact open, high, low, close, volume, range, 20-period moving average, and news signal markers.
- Event impact windows for 1D, 3D, 7D, and 30D returns.
- Sentiment, event type, surprise level, volume anomaly, and confidence signals.
- Previous-signal analysis showing the prior event, prior return, confidence delta, and whether the new headline confirmed or reversed the earlier signal.
- Similar-event comparison for recurring event patterns.
- Dense desktop layout with responsive mobile behavior.
- Multi-view market news interface with Dashboard, News Feed, Watchlists, Alerts, Economic Calendar, SEC Filings, and Sources/Admin pages.
- Mock market news feed with article cards, source, URL, published time, tickers, AI-style bullets, summary, sentiment score, category, impact level, why-it-matters, and possible-impact fields.
- Search and filters for ticker, source, category, and sentiment.
- Watchlist management UI with multiple watchlists, add/remove ticker controls, and watchlist-specific news.
- Alert rule UI for breaking news, negative sentiment, high-impact events, earnings news, SEC filings, and unusual news volume.
- Economic calendar and SEC filing mock adapter pages.
- Source management view with reliability score, category, and enabled status.
- Full-stack coverage checklist showing which requested features are implemented in the static MVP and which still need a real backend.

## Full-Stack Spec Coverage

Covered in this static MVP:

- Market news feed
- Ticker filtering
- Watchlists
- Alerts UI and mock rule evaluation
- AI-style summaries
- Mock sentiment analysis
- Dashboard cards
- Economic calendar
- SEC filings
- Source/admin management display
- Responsive financial dashboard UI
- Mock data that runs without paid APIs

Not yet implemented as true backend infrastructure:

- JWT authentication
- Node/Express REST API
- PostgreSQL database
- Prisma schema and migrations
- BullMQ/Redis background jobs
- React/TypeScript monorepo
- Zod validation and backend tests

## Future Data Sources

The sample dataset in `src/app.js` can later be replaced with:

- Price candles from Polygon, Alpha Vantage, IEX Cloud, Tiingo, or Yahoo Finance-compatible exports.
- News from Benzinga, Finnhub, NewsAPI, GDELT, SEC filings, or company press releases.
- AI summaries and classification from a backend service.

## Important Note

This is a research and learning tool, not financial advice. Market movements are affected by many factors beyond a single headline, including rates, earnings expectations, liquidity, positioning, and broader macro conditions.
