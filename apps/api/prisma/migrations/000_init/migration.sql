CREATE TABLE "User" (
  "id" TEXT PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE "Ticker" (
  "id" TEXT PRIMARY KEY,
  "symbol" TEXT NOT NULL UNIQUE,
  "companyName" TEXT NOT NULL,
  "sector" TEXT NOT NULL
);

CREATE TABLE "NewsSource" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "category" TEXT NOT NULL,
  "reliabilityScore" INTEGER NOT NULL,
  "enabled" BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE "NewsArticle" (
  "id" TEXT PRIMARY KEY,
  "title" TEXT NOT NULL,
  "sourceUrl" TEXT NOT NULL,
  "publishedAt" TIMESTAMP NOT NULL,
  "summary" TEXT NOT NULL,
  "aiBullets" TEXT[] NOT NULL,
  "whyItMatters" TEXT NOT NULL,
  "possibleMarketImpact" TEXT NOT NULL,
  "sentimentLabel" TEXT NOT NULL,
  "sentimentScore" DOUBLE PRECISION NOT NULL,
  "category" TEXT NOT NULL,
  "impactLevel" TEXT NOT NULL,
  "sourceId" TEXT NOT NULL REFERENCES "NewsSource"("id"),
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "NewsTickerMention" (
  "id" TEXT PRIMARY KEY,
  "articleId" TEXT NOT NULL REFERENCES "NewsArticle"("id") ON DELETE CASCADE,
  "tickerId" TEXT NOT NULL REFERENCES "Ticker"("id") ON DELETE CASCADE,
  UNIQUE ("articleId", "tickerId")
);

CREATE TABLE "Watchlist" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "WatchlistTicker" (
  "id" TEXT PRIMARY KEY,
  "watchlistId" TEXT NOT NULL REFERENCES "Watchlist"("id") ON DELETE CASCADE,
  "symbol" TEXT NOT NULL,
  UNIQUE ("watchlistId", "symbol")
);

CREATE TABLE "AlertRule" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "ticker" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "threshold" INTEGER NOT NULL,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "AlertEvent" (
  "id" TEXT PRIMARY KEY,
  "ruleId" TEXT NOT NULL REFERENCES "AlertRule"("id") ON DELETE CASCADE,
  "articleId" TEXT REFERENCES "NewsArticle"("id"),
  "message" TEXT NOT NULL,
  "triggeredAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "EconomicEvent" (
  "id" TEXT PRIMARY KEY,
  "eventName" TEXT NOT NULL,
  "country" TEXT NOT NULL,
  "scheduledAt" TIMESTAMP NOT NULL,
  "importance" TEXT NOT NULL,
  "relatedAssets" TEXT[] NOT NULL,
  "actualValue" TEXT,
  "forecastValue" TEXT,
  "previousValue" TEXT
);

CREATE TABLE "Filing" (
  "id" TEXT PRIMARY KEY,
  "filingType" TEXT NOT NULL,
  "companyName" TEXT NOT NULL,
  "tickerId" TEXT NOT NULL REFERENCES "Ticker"("id"),
  "filedAt" TIMESTAMP NOT NULL,
  "url" TEXT NOT NULL,
  "summary" TEXT NOT NULL
);
