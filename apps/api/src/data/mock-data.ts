import type { AlertRule, EconomicEvent, Filing, NewsArticle, NewsSource, Ticker, Watchlist } from "@market-news/shared";

export const tickers: Ticker[] = [
  { symbol: "NVDA", companyName: "NVIDIA Corp.", sector: "Semiconductors" },
  { symbol: "AAPL", companyName: "Apple Inc.", sector: "Consumer Technology" },
  { symbol: "TSLA", companyName: "Tesla Inc.", sector: "Electric Vehicles" },
  { symbol: "JPM", companyName: "JPMorgan Chase & Co.", sector: "Banks" }
];

export const sources: NewsSource[] = [
  { id: "src-earnings", name: "Earnings Call", category: "Company", reliabilityScore: 92, enabled: true },
  { id: "src-policy", name: "Policy Wire", category: "Macro/Policy", reliabilityScore: 84, enabled: true },
  { id: "src-analyst", name: "Analyst Desk", category: "Research", reliabilityScore: 76, enabled: true },
  { id: "src-sec", name: "Regulatory Filing", category: "Regulatory", reliabilityScore: 90, enabled: true }
];

export const articles: NewsArticle[] = [
  {
    id: "news-nvda-earnings",
    title: "Data center revenue beat expectations on sustained AI accelerator demand",
    source: "Earnings Call",
    sourceUrl: "https://example.com/nvda-earnings",
    publishedAt: "2026-06-10T20:05:00.000Z",
    tickers: ["NVDA"],
    sector: "Semiconductors",
    summary: "Revenue, margin, and forward guide all came in ahead of consensus, lifting AI infrastructure sentiment.",
    aiBullets: ["Revenue beat consensus.", "Forward guidance improved.", "Data center demand remains the core signal."],
    whyItMatters: "AI infrastructure is a key market leadership theme, so NVDA surprises can move semiconductors and the Nasdaq.",
    possibleMarketImpact: "High-impact positive news can support momentum, but valuation sensitivity remains elevated.",
    sentimentLabel: "positive",
    sentimentScore: 0.88,
    category: "earnings",
    impactLevel: "high"
  },
  {
    id: "news-nvda-export",
    title: "Fresh chip export-control headlines weighed on China revenue assumptions",
    source: "Policy Wire",
    sourceUrl: "https://example.com/nvda-policy",
    publishedAt: "2026-06-10T14:10:00.000Z",
    tickers: ["NVDA"],
    sector: "Semiconductors",
    summary: "Policy risk pressured revenue assumptions for China-related accelerator demand.",
    aiBullets: ["Export rules are the core risk.", "Revenue exposure is uncertain.", "The headline reverses part of the prior bullish signal."],
    whyItMatters: "Policy headlines can interrupt otherwise strong fundamental momentum.",
    possibleMarketImpact: "Likely negative near term, especially if restrictions broaden.",
    sentimentLabel: "negative",
    sentimentScore: -0.72,
    category: "regulatory",
    impactLevel: "high"
  },
  {
    id: "news-aapl-ai",
    title: "New on-device AI features highlighted privacy-first product positioning",
    source: "Company Event",
    sourceUrl: "https://example.com/aapl-ai",
    publishedAt: "2026-06-09T18:00:00.000Z",
    tickers: ["AAPL"],
    sector: "Consumer Technology",
    summary: "Product announcements improved upgrade-cycle sentiment while monetization timing remains unclear.",
    aiBullets: ["AI features improve the device story.", "Privacy remains the differentiator.", "Revenue impact may lag."],
    whyItMatters: "Apple's product cycle can affect mega-cap tech sentiment.",
    possibleMarketImpact: "Constructive for sentiment, less certain for immediate earnings.",
    sentimentLabel: "positive",
    sentimentScore: 0.64,
    category: "product",
    impactLevel: "medium"
  },
  {
    id: "news-tsla-probe",
    title: "Safety investigation headline pressured autonomy multiple",
    source: "Legal Wire",
    sourceUrl: "https://example.com/tsla-probe",
    publishedAt: "2026-06-09T15:35:00.000Z",
    tickers: ["TSLA"],
    sector: "Electric Vehicles",
    summary: "An investigation headline hit the autonomy narrative and increased regulatory uncertainty.",
    aiBullets: ["Autonomy expectations are sensitive.", "Legal timelines are uncertain.", "Risk premium may rise."],
    whyItMatters: "A large part of TSLA valuation depends on future software and autonomy assumptions.",
    possibleMarketImpact: "Negative sentiment may persist until the investigation scope is clearer.",
    sentimentLabel: "negative",
    sentimentScore: -0.69,
    category: "legal",
    impactLevel: "medium"
  },
  {
    id: "news-jpm-stress",
    title: "Stress-test result cleared path for larger capital return plan",
    source: "Regulatory Filing",
    sourceUrl: "https://example.com/jpm-stress",
    publishedAt: "2026-06-08T21:00:00.000Z",
    tickers: ["JPM"],
    sector: "Banks",
    summary: "Capital return visibility improved after a favorable stress-test result.",
    aiBullets: ["Stress-test result was supportive.", "Capital return visibility improved.", "Credit risk remains the key monitor."],
    whyItMatters: "Bank capital plans affect buybacks, dividends, and investor confidence.",
    possibleMarketImpact: "Positive for JPM and potentially supportive for large bank peers.",
    sentimentLabel: "positive",
    sentimentScore: 0.71,
    category: "regulatory",
    impactLevel: "medium"
  }
];

export const watchlists: Watchlist[] = [
  { id: "wl-ai", name: "AI Infrastructure", tickers: ["NVDA", "AAPL"] },
  { id: "wl-risk", name: "Risk Watch", tickers: ["TSLA", "NVDA"] }
];

export const alertRules: AlertRule[] = [
  { id: "rule-nvda-high", ticker: "NVDA", type: "high_impact", threshold: 80, active: true },
  { id: "rule-tsla-neg", ticker: "TSLA", type: "negative_sentiment", threshold: 60, active: true }
];

export const economicEvents: EconomicEvent[] = [
  { id: "econ-cpi", eventName: "CPI Inflation", country: "United States", scheduledAt: "2026-06-12T12:30:00.000Z", importance: "high", relatedAssets: ["SPY", "QQQ", "JPM"], forecastValue: "3.1%", previousValue: "3.2%" },
  { id: "econ-fed", eventName: "Fed Decision", country: "United States", scheduledAt: "2026-06-17T18:00:00.000Z", importance: "high", relatedAssets: ["SPY", "TLT", "JPM"], forecastValue: "Hold", previousValue: "Hold" }
];

export const filings: Filing[] = [
  { id: "filing-nvda-10q", filingType: "10-Q", companyName: "NVIDIA Corp.", ticker: "NVDA", filedAt: "2026-05-29T20:00:00.000Z", url: "https://www.sec.gov/", summary: "Quarterly filing with AI accelerator demand, supply capacity, and customer concentration disclosures." },
  { id: "filing-jpm-10q", filingType: "10-Q", companyName: "JPMorgan Chase & Co.", ticker: "JPM", filedAt: "2026-05-08T20:00:00.000Z", url: "https://www.sec.gov/", summary: "Quarterly filing covering credit quality, capital ratios, and net interest income sensitivity." }
];
