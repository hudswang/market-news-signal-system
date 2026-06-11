export type SentimentLabel = "positive" | "neutral" | "negative";
export type ImpactLevel = "low" | "medium" | "high";
export type AlertType =
  | "breaking_news"
  | "negative_sentiment"
  | "high_impact"
  | "earnings"
  | "sec_filing"
  | "unusual_news_volume";

export type ApiResponse<T> = {
  data: T;
  meta?: Record<string, unknown>;
};

export type PaginatedResponse<T> = ApiResponse<T[]> & {
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
};

export type Ticker = {
  symbol: string;
  companyName: string;
  sector: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  tickers: string[];
  sector: string;
  summary: string;
  aiBullets: string[];
  whyItMatters: string;
  possibleMarketImpact: string;
  sentimentLabel: SentimentLabel;
  sentimentScore: number;
  category: string;
  impactLevel: ImpactLevel;
};

export type Watchlist = {
  id: string;
  name: string;
  tickers: string[];
};

export type AlertRule = {
  id: string;
  ticker: string;
  type: AlertType;
  threshold: number;
  active: boolean;
};

export type AlertEvent = {
  id: string;
  ruleId: string;
  articleId?: string;
  message: string;
  triggeredAt: string;
};

export type EconomicEvent = {
  id: string;
  eventName: string;
  country: string;
  scheduledAt: string;
  importance: ImpactLevel;
  relatedAssets: string[];
  actualValue?: string;
  forecastValue?: string;
  previousValue?: string;
};

export type Filing = {
  id: string;
  filingType: string;
  companyName: string;
  ticker: string;
  filedAt: string;
  url: string;
  summary: string;
};

export type NewsSource = {
  id: string;
  name: string;
  category: string;
  reliabilityScore: number;
  enabled: boolean;
};

export type DashboardSummary = {
  trendingTickers: Array<{ ticker: string; mentions: number; impactScore: number }>;
  breakingNews: NewsArticle[];
  highImpactEvents: NewsArticle[];
  marketSentiment: Record<SentimentLabel, number>;
  newsVolumeByTicker: Array<{ ticker: string; count: number }>;
  watchlistNews: NewsArticle[];
};
