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
- Event impact windows for 1D, 3D, 7D, and 30D returns.
- Sentiment, event type, surprise level, volume anomaly, and confidence signals.
- Similar-event comparison for recurring event patterns.
- Dense desktop layout with responsive mobile behavior.

## Future Data Sources

The sample dataset in `src/app.js` can later be replaced with:

- Price candles from Polygon, Alpha Vantage, IEX Cloud, Tiingo, or Yahoo Finance-compatible exports.
- News from Benzinga, Finnhub, NewsAPI, GDELT, SEC filings, or company press releases.
- AI summaries and classification from a backend service.

## Important Note

This is a research and learning tool, not financial advice. Market movements are affected by many factors beyond a single headline, including rates, earnings expectations, liquidity, positioning, and broader macro conditions.
