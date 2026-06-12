const stocks = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    sector: "Semiconductors",
    regime: "AI infrastructure cycle with high earnings sensitivity",
    basePrice: 860,
    chartColor: "#2563eb",
    events: [
      {
        id: "nvda-earnings-beat",
        date: "2025-02-26",
        source: "Earnings Call",
        headline: "Data center revenue beat expectations on sustained AI accelerator demand",
        summary:
          "The event combined a revenue beat, stronger forward guidance, and elevated volume. The associated reaction was positive, but valuation risk remained high because the move followed a long prior rally.",
        type: "Earnings",
        sentiment: "Positive",
        surprise: "High positive",
        confidence: 88,
        volumeAnomaly: 2.7,
        risk: "Expectations were already elevated before the release.",
        returns: { "1d": 8.9, "3d": 11.4, "7d": 14.2, "30d": 18.6 }
      },
      {
        id: "nvda-export-controls",
        date: "2025-04-15",
        source: "Policy Wire",
        headline: "Fresh chip export-control headlines weighed on China revenue assumptions",
        summary:
          "Policy uncertainty created a negative sentiment shock. The stock recovered part of the initial move as investors separated near-term sales risk from broader AI infrastructure demand.",
        type: "Regulatory",
        sentiment: "Negative",
        surprise: "Medium negative",
        confidence: 74,
        volumeAnomaly: 1.9,
        risk: "Policy details were incomplete when the market first reacted.",
        returns: { "1d": -4.8, "3d": -2.1, "7d": 1.4, "30d": 5.2 }
      },
      {
        id: "nvda-product-launch",
        date: "2025-06-03",
        source: "Company Event",
        headline: "Next-generation GPU roadmap emphasized faster enterprise deployment cycles",
        summary:
          "The product update strengthened the long-term narrative, but the immediate price reaction was smaller than earnings because investors had anticipated a strong launch.",
        type: "Product",
        sentiment: "Positive",
        surprise: "Low positive",
        confidence: 68,
        volumeAnomaly: 1.4,
        risk: "Roadmap announcements can be priced in before the event.",
        returns: { "1d": 2.2, "3d": 3.1, "7d": 4.6, "30d": 7.9 }
      },
      {
        id: "nvda-analyst-pt",
        date: "2025-08-19",
        source: "Analyst Desk",
        headline: "Major broker raised price target after supply-chain checks",
        summary:
          "The note added confirmation to existing bullish positioning. The reaction was constructive but less durable than hard financial updates.",
        type: "Analyst",
        sentiment: "Positive",
        surprise: "Medium positive",
        confidence: 61,
        volumeAnomaly: 1.2,
        risk: "Analyst notes can amplify existing sentiment without changing fundamentals.",
        returns: { "1d": 1.7, "3d": 2.8, "7d": 1.1, "30d": 4.4 }
      }
    ]
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Consumer Technology",
    regime: "Mature mega-cap with product-cycle and services sensitivity",
    basePrice: 190,
    chartColor: "#0f766e",
    events: [
      {
        id: "aapl-services-growth",
        date: "2025-01-31",
        source: "Earnings Call",
        headline: "Services margin expansion offset softer hardware unit commentary",
        summary:
          "Investors rewarded the margin mix even though hardware demand commentary was mixed. The associated reaction was steady rather than explosive.",
        type: "Earnings",
        sentiment: "Positive",
        surprise: "Medium positive",
        confidence: 78,
        volumeAnomaly: 1.8,
        risk: "Hardware weakness can reassert itself in later quarters.",
        returns: { "1d": 3.1, "3d": 4.2, "7d": 3.7, "30d": 6.4 }
      },
      {
        id: "aapl-regulatory-app-store",
        date: "2025-03-21",
        source: "Regulatory Filing",
        headline: "App store policy scrutiny renewed concerns around services take rates",
        summary:
          "The headline pressured services valuation assumptions. The immediate decline was meaningful, though longer-window performance depended on whether actual policy changes followed.",
        type: "Regulatory",
        sentiment: "Negative",
        surprise: "Medium negative",
        confidence: 72,
        volumeAnomaly: 1.6,
        risk: "Legal timelines are slow and market reactions can fade.",
        returns: { "1d": -2.4, "3d": -3.9, "7d": -1.8, "30d": 0.7 }
      },
      {
        id: "aapl-ai-product",
        date: "2025-06-10",
        source: "Developer Conference",
        headline: "New on-device AI features highlighted privacy-first product positioning",
        summary:
          "The announcement improved sentiment around the next product cycle. The reaction was positive but moderated by questions about monetization timing.",
        type: "Product",
        sentiment: "Positive",
        surprise: "Low positive",
        confidence: 66,
        volumeAnomaly: 1.3,
        risk: "Feature adoption and upgrade demand take time to measure.",
        returns: { "1d": 1.9, "3d": 3.4, "7d": 5.1, "30d": 8.3 }
      }
    ]
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    sector: "Electric Vehicles",
    regime: "High beta stock driven by margins, deliveries, and autonomy narratives",
    basePrice: 248,
    chartColor: "#b45309",
    events: [
      {
        id: "tsla-deliveries-miss",
        date: "2025-01-03",
        source: "Delivery Report",
        headline: "Quarterly deliveries missed consensus as price cuts pressured margins",
        summary:
          "The miss combined demand and margin concerns, creating a sharp negative reaction. Follow-through stayed weak while investors waited for margin evidence.",
        type: "Earnings",
        sentiment: "Negative",
        surprise: "High negative",
        confidence: 84,
        volumeAnomaly: 2.4,
        risk: "Delivery data can be distorted by regional timing and incentives.",
        returns: { "1d": -6.3, "3d": -8.1, "7d": -10.5, "30d": -7.6 }
      },
      {
        id: "tsla-autonomy-demo",
        date: "2025-05-08",
        source: "Company Event",
        headline: "Autonomy demo renewed optimism around software-led margin upside",
        summary:
          "Narrative momentum improved after the demo, but confidence was lower because commercialization timing remained uncertain.",
        type: "Product",
        sentiment: "Positive",
        surprise: "Medium positive",
        confidence: 59,
        volumeAnomaly: 1.7,
        risk: "Technical demos do not guarantee regulatory or commercial rollout.",
        returns: { "1d": 4.7, "3d": 6.8, "7d": 2.6, "30d": -1.2 }
      },
      {
        id: "tsla-probe",
        date: "2025-07-17",
        source: "Legal Wire",
        headline: "Safety investigation headline pressured autonomy multiple",
        summary:
          "The legal headline hit the part of the valuation tied to future autonomy. The stock initially fell, then stabilized as investors assessed scope.",
        type: "Legal",
        sentiment: "Negative",
        surprise: "Medium negative",
        confidence: 71,
        volumeAnomaly: 1.9,
        risk: "Investigation outcomes are uncertain and can take months.",
        returns: { "1d": -3.8, "3d": -5.2, "7d": -2.7, "30d": 1.8 }
      }
    ]
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    sector: "Banks",
    regime: "Large bank tied to rates, credit quality, and capital return expectations",
    basePrice: 208,
    chartColor: "#6d28d9",
    events: [
      {
        id: "jpm-net-interest",
        date: "2025-01-15",
        source: "Earnings Call",
        headline: "Net interest income guide came in above bank-sector expectations",
        summary:
          "The beat supported earnings quality and helped the stock outperform peers. Credit commentary remained an important offset to monitor.",
        type: "Earnings",
        sentiment: "Positive",
        surprise: "Medium positive",
        confidence: 82,
        volumeAnomaly: 1.6,
        risk: "Rate assumptions can change quickly after macro data.",
        returns: { "1d": 2.8, "3d": 4.5, "7d": 5.6, "30d": 7.2 }
      },
      {
        id: "jpm-fed-cut",
        date: "2025-04-30",
        source: "Macro Desk",
        headline: "Rate-cut expectations moved lower after firm inflation data",
        summary:
          "The macro headline supported bank earnings expectations but raised broader market volatility. JPM reaction was positive relative to growth-heavy sectors.",
        type: "Macro",
        sentiment: "Neutral",
        surprise: "Medium",
        confidence: 64,
        volumeAnomaly: 1.3,
        risk: "Macro signals can reverse with the next data release.",
        returns: { "1d": 1.1, "3d": 2.3, "7d": 1.7, "30d": 3.9 }
      },
      {
        id: "jpm-capital-plan",
        date: "2025-06-27",
        source: "Regulatory Release",
        headline: "Stress-test result cleared path for larger capital return plan",
        summary:
          "The capital plan improved shareholder return visibility. The associated reaction was positive and relatively stable over the following month.",
        type: "Regulatory",
        sentiment: "Positive",
        surprise: "Low positive",
        confidence: 76,
        volumeAnomaly: 1.5,
        risk: "Future capital rules may still limit payout growth.",
        returns: { "1d": 1.8, "3d": 2.9, "7d": 4.1, "30d": 6.8 }
      }
    ]
  }
];

const supplementalSignals = {
  NVDA: [
    {
      id: "nvda-supply-chain-check",
      date: "2025-02-24",
      source: "Supply Chain Desk",
      headline: "Server OEM checks pointed to tighter AI accelerator allocation",
      summary:
        "Channel checks suggested demand was still running ahead of near-term supply. The signal helped set a bullish tone into earnings, though the strongest confirmation still depended on guidance.",
      type: "Analyst",
      sentiment: "Positive",
      surprise: "Medium positive",
      confidence: 73,
      volumeAnomaly: 1.6,
      risk: "Pre-earnings checks can overstate demand when customers double-order capacity.",
      returns: { "1d": 2.4, "3d": 5.8, "7d": 8.7, "30d": 13.2 }
    },
    {
      id: "nvda-options-positioning",
      date: "2025-02-25",
      source: "Market Structure",
      headline: "Options market priced a wider-than-usual post-earnings move",
      summary:
        "Implied volatility and call skew rose before the report. The setup signaled crowded optimism, which increased both upside follow-through potential and reversal risk.",
      type: "Macro",
      sentiment: "Neutral",
      surprise: "Medium",
      confidence: 62,
      volumeAnomaly: 1.5,
      risk: "Positioning signals can amplify volatility without changing fundamentals.",
      returns: { "1d": 1.2, "3d": 6.5, "7d": 9.8, "30d": 14.5 }
    },
    {
      id: "nvda-analyst-follow-through",
      date: "2025-02-27",
      source: "Analyst Desk",
      headline: "Post-earnings estimate revisions lifted data center revenue models",
      summary:
        "Analysts raised forward estimates after the company update. The follow-through signal helped explain why the move extended beyond the first reaction day.",
      type: "Analyst",
      sentiment: "Positive",
      surprise: "High positive",
      confidence: 81,
      volumeAnomaly: 2.1,
      risk: "Estimate revisions can chase price after the initial earnings move.",
      returns: { "1d": 3.7, "3d": 5.2, "7d": 6.4, "30d": 10.1 }
    },
    {
      id: "nvda-margin-follow-through",
      date: "2025-03-05",
      source: "Earnings Call",
      headline: "Gross-margin commentary kept investors focused on premium AI chip mix",
      summary:
        "A deeper read of the earnings transcript emphasized mix and pricing power. The signal helped explain why the 1W window held more strength than the first-day move alone.",
      type: "Earnings",
      sentiment: "Positive",
      surprise: "Medium positive",
      confidence: 72,
      volumeAnomaly: 1.5,
      risk: "Margin commentary can fade if supply-chain costs rise later.",
      returns: { "1d": 1.8, "3d": 2.9, "7d": 4.8, "30d": 8.2 }
    },
    {
      id: "nvda-competitor-launch",
      date: "2025-03-20",
      source: "Product Desk",
      headline: "Competitor accelerator launch raised questions about future pricing power",
      summary:
        "The market treated the competing product as a medium-term risk rather than an immediate demand shock. It mattered more in the 1M read than the first reaction week.",
      type: "Product",
      sentiment: "Negative",
      surprise: "Medium negative",
      confidence: 64,
      volumeAnomaly: 1.4,
      risk: "Competitive comparisons often change after benchmark and supply data arrive.",
      returns: { "1d": -1.6, "3d": -2.8, "7d": -1.2, "30d": 3.4 }
    },
    {
      id: "nvda-fund-rebalance",
      date: "2025-04-04",
      source: "Market Structure",
      headline: "Mega-cap growth rebalance flow created short-term pressure after rally",
      summary:
        "Positioning and index-flow headlines created a later-window drag. This signal shows why 1M performance can differ from the clean post-earnings reaction.",
      type: "Macro",
      sentiment: "Neutral",
      surprise: "Low",
      confidence: 57,
      volumeAnomaly: 1.3,
      risk: "Flow-driven moves may reverse once rebalancing pressure passes.",
      returns: { "1d": -0.9, "3d": -1.4, "7d": 0.6, "30d": 2.9 }
    },
    {
      id: "nvda-chip-waiver-rumor",
      date: "2025-04-16",
      source: "Policy Wire",
      headline: "Potential license-waiver headlines eased part of export-control selloff",
      summary:
        "A follow-up policy report softened the prior negative read. The signal did not remove regulatory risk, but it changed the near-term path from panic selling to reassessment.",
      type: "Regulatory",
      sentiment: "Neutral",
      surprise: "Medium",
      confidence: 58,
      volumeAnomaly: 1.4,
      risk: "Policy exemptions can be narrow and reversible.",
      returns: { "1d": 1.6, "3d": 2.8, "7d": 3.3, "30d": 5.7 }
    },
    {
      id: "nvda-cloud-capex-check",
      date: "2025-06-02",
      source: "Cloud Capex Tracker",
      headline: "Hyperscaler capex commentary supported another AI server buildout leg",
      summary:
        "Large customer spending plans improved the read-through for accelerator demand before the product roadmap update. The signal made the launch feel more commercially relevant.",
      type: "Macro",
      sentiment: "Positive",
      surprise: "Medium positive",
      confidence: 70,
      volumeAnomaly: 1.5,
      risk: "Cloud capex budgets can be delayed if utilization assumptions weaken.",
      returns: { "1d": 1.5, "3d": 3.8, "7d": 6.2, "30d": 8.6 }
    },
    {
      id: "nvda-supplier-capacity",
      date: "2025-06-04",
      source: "Supply Chain Desk",
      headline: "Advanced packaging capacity update reduced delivery bottleneck worries",
      summary:
        "Supplier commentary suggested capacity constraints were easing. That supported the durability of the product-cycle signal after the roadmap announcement.",
      type: "Product",
      sentiment: "Positive",
      surprise: "Low positive",
      confidence: 67,
      volumeAnomaly: 1.3,
      risk: "Capacity additions can arrive later than planned.",
      returns: { "1d": 1.1, "3d": 2.7, "7d": 4.0, "30d": 6.8 }
    }
  ],
  AAPL: [
    {
      id: "aapl-china-channel",
      date: "2025-01-30",
      source: "Channel Checks",
      headline: "China smartphone checks showed mixed premium demand into earnings",
      summary:
        "The pre-earnings signal was cautious on hardware volumes but constructive on mix. It helped explain why services commentary mattered more than unit noise.",
      type: "Analyst",
      sentiment: "Neutral",
      surprise: "Medium",
      confidence: 61,
      volumeAnomaly: 1.2,
      risk: "Regional channel checks can miss online and carrier timing effects.",
      returns: { "1d": -0.4, "3d": 2.1, "7d": 3.0, "30d": 5.5 }
    },
    {
      id: "aapl-services-note",
      date: "2025-02-03",
      source: "Analyst Desk",
      headline: "Services take-rate note reinforced margin expansion thesis",
      summary:
        "A follow-up research note framed services growth as the cleaner driver of earnings quality. The signal supported follow-through after the earnings reaction.",
      type: "Analyst",
      sentiment: "Positive",
      surprise: "Low positive",
      confidence: 69,
      volumeAnomaly: 1.3,
      risk: "Services growth is sensitive to regulatory pressure on platform economics.",
      returns: { "1d": 1.1, "3d": 2.0, "7d": 2.7, "30d": 4.8 }
    },
    {
      id: "aapl-ai-developer-response",
      date: "2025-06-11",
      source: "Developer Conference",
      headline: "Developer reaction to on-device AI tools improved upgrade-cycle sentiment",
      summary:
        "Follow-up commentary focused on integration depth and privacy positioning. The signal strengthened the product narrative after the initial announcement.",
      type: "Product",
      sentiment: "Positive",
      surprise: "Medium positive",
      confidence: 63,
      volumeAnomaly: 1.2,
      risk: "Developer enthusiasm may not translate into near-term device upgrades.",
      returns: { "1d": 1.4, "3d": 2.6, "7d": 4.4, "30d": 7.2 }
    }
  ],
  TSLA: [
    {
      id: "tsla-price-cut-readthrough",
      date: "2025-01-06",
      source: "Auto Pricing Desk",
      headline: "Fresh price-cut data intensified margin concern after delivery miss",
      summary:
        "Pricing data made the delivery miss feel more margin-sensitive. The signal extended the negative reaction as investors lowered near-term profitability assumptions.",
      type: "Earnings",
      sentiment: "Negative",
      surprise: "Medium negative",
      confidence: 76,
      volumeAnomaly: 2.0,
      risk: "Price changes can be temporary incentives rather than permanent margin resets.",
      returns: { "1d": -3.4, "3d": -5.9, "7d": -8.2, "30d": -5.4 }
    },
    {
      id: "tsla-fsd-timeline",
      date: "2025-05-09",
      source: "Company Event",
      headline: "Autonomy rollout timeline remained the key debate after demo",
      summary:
        "The market kept rewarding the autonomy story, but the signal was less clean because investors still needed proof of regulatory and commercial timing.",
      type: "Product",
      sentiment: "Neutral",
      surprise: "Medium",
      confidence: 55,
      volumeAnomaly: 1.5,
      risk: "Timeline uncertainty can quickly reverse narrative-led gains.",
      returns: { "1d": 0.8, "3d": 2.2, "7d": 1.5, "30d": -0.6 }
    },
    {
      id: "tsla-insurance-probe",
      date: "2025-07-18",
      source: "Legal Wire",
      headline: "Insurance and liability questions widened autonomy-risk discount",
      summary:
        "A related legal headline extended the prior investigation signal. The market reaction focused on whether liability costs could delay software-led margin upside.",
      type: "Legal",
      sentiment: "Negative",
      surprise: "Medium negative",
      confidence: 68,
      volumeAnomaly: 1.7,
      risk: "Legal interpretation can shift as more facts become available.",
      returns: { "1d": -1.9, "3d": -3.1, "7d": -1.4, "30d": 2.1 }
    }
  ],
  JPM: [
    {
      id: "jpm-credit-card-spend",
      date: "2025-01-16",
      source: "Macro Desk",
      headline: "Card-spend trends supported consumer resilience after bank earnings",
      summary:
        "Spending data backed the earnings call message that credit quality remained manageable. The signal helped extend bank-sector outperformance.",
      type: "Macro",
      sentiment: "Positive",
      surprise: "Low positive",
      confidence: 65,
      volumeAnomaly: 1.2,
      risk: "Consumer data can weaken quickly if labor-market conditions change.",
      returns: { "1d": 0.9, "3d": 1.8, "7d": 3.3, "30d": 5.1 }
    },
    {
      id: "jpm-yield-curve",
      date: "2025-05-01",
      source: "Rates Desk",
      headline: "Yield-curve steepening improved large-bank net interest income read-through",
      summary:
        "Rates moved in a way that improved the bank earnings read-through. The signal was positive for JPM but carried macro-volatility risk for the broader tape.",
      type: "Macro",
      sentiment: "Positive",
      surprise: "Medium positive",
      confidence: 67,
      volumeAnomaly: 1.3,
      risk: "The rates impulse can reverse after the next inflation or jobs print.",
      returns: { "1d": 1.0, "3d": 1.9, "7d": 2.4, "30d": 4.0 }
    },
    {
      id: "jpm-buyback-plan",
      date: "2025-06-30",
      source: "Regulatory Release",
      headline: "Buyback authorization details clarified capital-return upside",
      summary:
        "The follow-up capital plan gave investors cleaner visibility into payout timing. The signal reinforced the positive stress-test reaction.",
      type: "Regulatory",
      sentiment: "Positive",
      surprise: "Medium positive",
      confidence: 74,
      volumeAnomaly: 1.4,
      risk: "Management can slow buybacks if macro or credit risks rise.",
      returns: { "1d": 1.2, "3d": 2.4, "7d": 3.6, "30d": 5.9 }
    }
  ]
};

stocks.forEach((stock) => {
  stock.events.push(...(supplementalSignals[stock.symbol] || []));
  stock.events.sort((a, b) => new Date(a.date) - new Date(b.date));
});

function scaledReturn(value, multiplier) {
  return Number((value * multiplier).toFixed(1));
}

function expandReturnWindows(returns) {
  const oneDay = returns["1d"] ?? 0;
  const oneWeek = returns["1w"] ?? returns["7d"] ?? returns["3d"] ?? oneDay;
  const oneMonth = returns["1m"] ?? returns["30d"] ?? oneWeek;
  const continuation = Math.abs(oneMonth) >= 8 ? 1.14 : 1.28;
  const longRun = Math.abs(oneMonth) >= 8 ? 1.42 : 1.76;

  return {
    ...returns,
    "1d": oneDay,
    "1w": oneWeek,
    "1m": oneMonth,
    "3m": returns["3m"] ?? scaledReturn(oneMonth, continuation),
    "1y": returns["1y"] ?? scaledReturn(oneMonth, longRun)
  };
}

stocks.forEach((stock) => {
  stock.events.forEach((event) => {
    event.returns = expandReturnWindows(event.returns);
  });
});

const newsSources = [
  { name: "Earnings Call", category: "Company", reliability: 92, enabled: true },
  { name: "Policy Wire", category: "Macro/Policy", reliability: 84, enabled: true },
  { name: "Company Event", category: "Company", reliability: 88, enabled: true },
  { name: "Analyst Desk", category: "Research", reliability: 76, enabled: true },
  { name: "Regulatory Filing", category: "Regulatory", reliability: 90, enabled: true },
  { name: "Macro Desk", category: "Macro", reliability: 82, enabled: true },
  { name: "Legal Wire", category: "Legal", reliability: 73, enabled: true },
  { name: "GDELT Live Search", category: "Live News", reliability: 70, enabled: true },
  { name: "Google News RSS", category: "Live News", reliability: 68, enabled: true }
];

const watchlists = [
  { id: "wl-ai", name: "AI Infrastructure", tickers: ["NVDA", "AAPL"] },
  { id: "wl-vol", name: "High Beta Movers", tickers: ["TSLA", "NVDA"] },
  { id: "wl-fin", name: "Banks And Macro", tickers: ["JPM"] }
];

const alertRules = [
  { id: "alert-1", ticker: "NVDA", type: "High impact", threshold: 80, active: true },
  { id: "alert-2", ticker: "TSLA", type: "Negative sentiment", threshold: 65, active: true },
  { id: "alert-3", ticker: "JPM", type: "SEC filing", threshold: 70, active: false }
];

const LIVE_REFRESH_INTERVAL_MS = 5 * 60 * 1000;
const RETURN_WINDOWS = ["1d", "1w", "1m", "3m", "1y"];
const CHART_ZOOM_LEVELS = [0.5, 0.75, 1, 1.5, 2, 3, 4];
const WINDOW_CONFIG = {
  "1d": { sessions: 1, context: 2, label: "1D" },
  "1w": { sessions: 5, context: 3, label: "1W" },
  "1m": { sessions: 21, context: 6, label: "1M" },
  "3m": { sessions: 63, context: 14, label: "3M" },
  "1y": { sessions: 252, context: 28, label: "1Y" }
};

const economicEvents = [
  {
    name: "CPI Inflation",
    country: "United States",
    scheduledTime: "2026-06-12 08:30 ET",
    importance: "High",
    relatedAssets: ["SPY", "QQQ", "JPM"],
    actual: "Pending",
    forecast: "3.1%",
    previous: "3.2%"
  },
  {
    name: "Fed Decision",
    country: "United States",
    scheduledTime: "2026-06-17 14:00 ET",
    importance: "High",
    relatedAssets: ["SPY", "TLT", "JPM"],
    actual: "Pending",
    forecast: "Hold",
    previous: "Hold"
  },
  {
    name: "Jobs Report",
    country: "United States",
    scheduledTime: "2026-07-03 08:30 ET",
    importance: "High",
    relatedAssets: ["SPY", "QQQ", "TSLA"],
    actual: "Pending",
    forecast: "185K",
    previous: "172K"
  },
  {
    name: "NVIDIA Earnings Date",
    country: "United States",
    scheduledTime: "2026-08-26 16:05 ET",
    importance: "High",
    relatedAssets: ["NVDA", "QQQ", "SOXX"],
    actual: "Pending",
    forecast: "$6.22 EPS",
    previous: "$5.98 EPS"
  }
];

const filings = [
  {
    type: "10-Q",
    company: "NVIDIA Corp.",
    ticker: "NVDA",
    filedDate: "2026-05-29",
    url: "https://www.sec.gov/",
    summary: "Quarterly filing with revenue concentration, supply-chain capacity, and customer demand risk notes."
  },
  {
    type: "8-K",
    company: "Apple Inc.",
    ticker: "AAPL",
    filedDate: "2026-06-03",
    url: "https://www.sec.gov/",
    summary: "Current report covering executive compensation and services-segment disclosure updates."
  },
  {
    type: "8-K",
    company: "Tesla Inc.",
    ticker: "TSLA",
    filedDate: "2026-06-05",
    url: "https://www.sec.gov/",
    summary: "Current report related to delivery update commentary and risk factor language."
  },
  {
    type: "10-Q",
    company: "JPMorgan Chase & Co.",
    ticker: "JPM",
    filedDate: "2026-05-08",
    url: "https://www.sec.gov/",
    summary: "Quarterly filing with credit quality, capital ratio, net interest income, and market risk updates."
  }
];

const coverage = [
  { label: "User authentication", status: "missing", note: "Not in the static MVP. Needs JWT backend, protected routes, and profile endpoint." },
  { label: "Market news feed", status: "done", note: "Implemented as a searchable/filterable feed with historical signal records plus live GDELT article refresh where the browser can reach the public API." },
  { label: "Watchlists", status: "done", note: "Implemented multiple mock watchlists with add/remove ticker controls and watchlist news filtering." },
  { label: "Alerts", status: "done", note: "Implemented mock alert rules and rule evaluation against article impact/sentiment/filing-style events." },
  { label: "AI summaries", status: "done", note: "Implemented mock bullet summaries, why-it-matters, and possible-impact fields." },
  { label: "Sentiment analysis", status: "done", note: "Implemented mock sentiment label and -1 to 1 score per article." },
  { label: "Impact dashboard", status: "done", note: "Implemented ticker trends, breaking signals, sentiment, news volume, watchlist news, previous-signal analysis, chart hover signal tooltips, and the professional reaction chart." },
  { label: "Economic calendar", status: "done", note: "Implemented CPI, jobs, Fed, GDP-style, and earnings events using mock data." },
  { label: "SEC filings", status: "done", note: "Implemented mock filing list by ticker with type, company, date, URL, and summary." },
  { label: "Admin/source management", status: "done", note: "Implemented source reliability/category/enabled display." },
  { label: "Live refresh logic", status: "partial", note: "Implemented client-side refresh and five-minute polling using public live-news search. Completed live return windows still need a real price data provider." },
  { label: "REST API", status: "partial", note: "Documented in UI only. A real Express API is not created yet." },
  { label: "Database schema", status: "partial", note: "Models are represented by frontend mock data. Prisma/PostgreSQL is not created yet." },
  { label: "Background jobs", status: "partial", note: "Mock producer/evaluator behavior exists in the frontend. BullMQ/Redis jobs are not created yet." },
  { label: "TypeScript monorepo", status: "missing", note: "Current implementation is a static zero-dependency app. React/Express/Prisma scaffold can be added next." }
];

const state = {
  selectedSymbol: "NVDA",
  selectedEventId: "nvda-earnings-beat",
  selectedWindow: "1d",
  chartZoom: 1,
  filterType: "All",
  bullishOnly: false,
  points: [],
  activePage: "dashboard",
  globalSearch: "",
  newsTicker: "All",
  newsSentiment: "All",
  newsCategory: "All",
  newsSource: "All",
  selectedWatchlistId: "wl-ai",
  liveArticles: [],
  liveStatus: "Live refresh idle",
  lastRefreshAt: null,
  refreshInFlight: false,
  chartMeta: null,
  windowEvents: []
};

const els = {
  tickerSearch: document.querySelector("#tickerSearch"),
  tickerList: document.querySelector("#tickerList"),
  eventTypeFilter: document.querySelector("#eventTypeFilter"),
  bullishOnly: document.querySelector("#bullishOnly"),
  marketRegime: document.querySelector("#marketRegime"),
  stockTitle: document.querySelector("#stockTitle"),
  selectedReturn: document.querySelector("#selectedReturn"),
  selectedReturnLabel: document.querySelector("#selectedReturnLabel"),
  signalStrength: document.querySelector("#signalStrength"),
  signalStrengthLabel: document.querySelector("#signalStrengthLabel"),
  volumeAnomaly: document.querySelector("#volumeAnomaly"),
  similarCount: document.querySelector("#similarCount"),
  similarSummary: document.querySelector("#similarSummary"),
  chartSubtitle: document.querySelector("#chartSubtitle"),
  selectedDate: document.querySelector("#selectedDate"),
  chartZoomOut: document.querySelector("#chartZoomOut"),
  chartZoomIn: document.querySelector("#chartZoomIn"),
  chartZoomReset: document.querySelector("#chartZoomReset"),
  chartZoomLabel: document.querySelector("#chartZoomLabel"),
  quoteOpen: document.querySelector("#quoteOpen"),
  quoteHigh: document.querySelector("#quoteHigh"),
  quoteLow: document.querySelector("#quoteLow"),
  quoteClose: document.querySelector("#quoteClose"),
  quoteVolume: document.querySelector("#quoteVolume"),
  quoteRange: document.querySelector("#quoteRange"),
  chartSignalNote: document.querySelector("#chartSignalNote"),
  priceChart: document.querySelector("#priceChart"),
  eventSource: document.querySelector("#eventSource"),
  sentimentPill: document.querySelector("#sentimentPill"),
  eventHeadline: document.querySelector("#eventHeadline"),
  eventSummary: document.querySelector("#eventSummary"),
  previousSignalTitle: document.querySelector("#previousSignalTitle"),
  previousSignalSummary: document.querySelector("#previousSignalSummary"),
  previousSignalReturn: document.querySelector("#previousSignalReturn"),
  previousSignalDelta: document.querySelector("#previousSignalDelta"),
  previousSignalRelationship: document.querySelector("#previousSignalRelationship"),
  eventType: document.querySelector("#eventType"),
  eventSurprise: document.querySelector("#eventSurprise"),
  eventConfidence: document.querySelector("#eventConfidence"),
  eventRisk: document.querySelector("#eventRisk"),
  reactionRows: document.querySelector("#reactionRows"),
  eventCount: document.querySelector("#eventCount"),
  eventList: document.querySelector("#eventList"),
  similarPatternLabel: document.querySelector("#similarPatternLabel"),
  similarEvents: document.querySelector("#similarEvents"),
  exportButton: document.querySelector("#exportButton"),
  globalSearch: document.querySelector("#globalSearch"),
  navButtons: document.querySelectorAll(".nav-button"),
  pageViews: document.querySelectorAll(".page-view"),
  trendingTickers: document.querySelector("#trendingTickers"),
  sentimentOverview: document.querySelector("#sentimentOverview"),
  breakingNews: document.querySelector("#breakingNews"),
  watchlistNewsLabel: document.querySelector("#watchlistNewsLabel"),
  watchlistNews: document.querySelector("#watchlistNews"),
  newsTickerFilter: document.querySelector("#newsTickerFilter"),
  newsSentimentFilter: document.querySelector("#newsSentimentFilter"),
  newsCategoryFilter: document.querySelector("#newsCategoryFilter"),
  newsSourceFilter: document.querySelector("#newsSourceFilter"),
  newsFeed: document.querySelector("#newsFeed"),
  paginationInfo: document.querySelector("#paginationInfo"),
  watchlistList: document.querySelector("#watchlistList"),
  watchlistNameInput: document.querySelector("#watchlistNameInput"),
  createWatchlistButton: document.querySelector("#createWatchlistButton"),
  activeWatchlistTitle: document.querySelector("#activeWatchlistTitle"),
  activeWatchlistMeta: document.querySelector("#activeWatchlistMeta"),
  watchlistTickerSelect: document.querySelector("#watchlistTickerSelect"),
  addTickerButton: document.querySelector("#addTickerButton"),
  watchlistTickerChips: document.querySelector("#watchlistTickerChips"),
  watchlistMatchedNews: document.querySelector("#watchlistMatchedNews"),
  alertForm: document.querySelector("#alertForm"),
  alertTicker: document.querySelector("#alertTicker"),
  alertType: document.querySelector("#alertType"),
  alertThreshold: document.querySelector("#alertThreshold"),
  alertRules: document.querySelector("#alertRules"),
  calendarList: document.querySelector("#calendarList"),
  filingsList: document.querySelector("#filingsList"),
  sourceList: document.querySelector("#sourceList"),
  coverageList: document.querySelector("#coverageList"),
  newsModal: document.querySelector("#newsModal"),
  newsModalTitle: document.querySelector("#newsModalTitle"),
  newsModalMeta: document.querySelector("#newsModalMeta"),
  newsModalBody: document.querySelector("#newsModalBody"),
  newsModalClose: document.querySelector("#newsModalClose"),
  refreshNewsButton: document.querySelector("#refreshNewsButton"),
  liveStatus: document.querySelector("#liveStatus"),
  chartTooltip: document.querySelector("#chartTooltip")
};

function getStock() {
  return stocks.find((stock) => stock.symbol === state.selectedSymbol);
}

function getEvents(stock = getStock()) {
  return stock.events.filter((event) => {
    const typeMatch = state.filterType === "All" || event.type === state.filterType;
    const sentimentMatch = !state.bullishOnly || event.sentiment !== "Negative";
    return typeMatch && sentimentMatch;
  });
}

function sortEventsByDate(events) {
  return [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
}

function getVisibleEventsWithSelection(stock) {
  const events = getEvents(stock);
  const selected = stock.events.find((event) => event.id === state.selectedEventId);

  if (!selected) {
    state.selectedEventId = events[0]?.id || stock.events[0].id;
    return events;
  }

  if (events.some((event) => event.id === selected.id)) {
    return events;
  }

  return sortEventsByDate([...events, selected]);
}

function getSelectedEvent(stock = getStock()) {
  return stock.events.find((event) => event.id === state.selectedEventId) || stock.events[0];
}

function percent(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function returnFor(item, windowKey = state.selectedWindow) {
  const returns = item?.returns || {};
  return returns[windowKey] ?? returns["1m"] ?? returns["30d"] ?? returns["1w"] ?? returns["7d"] ?? returns["1d"] ?? 0;
}

function windowLabel(windowKey = state.selectedWindow) {
  return WINDOW_CONFIG[windowKey]?.label || windowKey.toUpperCase();
}

function sentimentClass(value) {
  if (value > 0.2) return "positive";
  if (value < -0.2) return "negative";
  return "neutral";
}

function dateLabel(value) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function timeLabel(value) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(value);
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function parseGdeltDate(value) {
  if (!value || value.length < 14) return new Date();
  const year = value.slice(0, 4);
  const month = value.slice(4, 6);
  const day = value.slice(6, 8);
  const hour = value.slice(8, 10);
  const minute = value.slice(10, 12);
  const second = value.slice(12, 14);
  return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}Z`);
}

function inferSentiment(title) {
  const text = title.toLowerCase();
  const positiveWords = ["beat", "beats", "raise", "raised", "growth", "surge", "rally", "strong", "upgrade", "record", "wins", "optimism"];
  const negativeWords = ["miss", "cuts", "probe", "lawsuit", "falls", "drop", "weak", "warning", "downgrade", "risk", "delay", "scrutiny"];
  const positiveScore = positiveWords.filter((word) => text.includes(word)).length;
  const negativeScore = negativeWords.filter((word) => text.includes(word)).length;
  if (positiveScore > negativeScore) return { label: "Positive", score: Math.min(0.82, 0.38 + positiveScore * 0.12) };
  if (negativeScore > positiveScore) return { label: "Negative", score: -Math.min(0.82, 0.38 + negativeScore * 0.12) };
  return { label: "Neutral", score: 0 };
}

function inferCategory(title) {
  const text = title.toLowerCase();
  if (text.includes("earnings") || text.includes("revenue") || text.includes("profit")) return "Earnings";
  if (text.includes("sec") || text.includes("regulator") || text.includes("regulatory") || text.includes("probe")) return "Regulatory";
  if (text.includes("fed") || text.includes("inflation") || text.includes("rates") || text.includes("jobs")) return "Macro";
  if (text.includes("launch") || text.includes("product") || text.includes("ai") || text.includes("chip")) return "Product";
  if (text.includes("analyst") || text.includes("upgrade") || text.includes("downgrade") || text.includes("price target")) return "Analyst";
  if (text.includes("lawsuit") || text.includes("court") || text.includes("legal")) return "Legal";
  return "Market";
}

function buildLiveNewsQuery(stock) {
  const companyCore = stock.name.replace(/\b(Corp\.|Inc\.|Co\.|Corporation|Chase|&)\b/g, "").trim();
  return `("${stock.symbol}" OR "${companyCore}") (stock OR shares OR earnings OR market OR revenue OR outlook)`;
}

function liveNewsUrl(stock) {
  const params = new URLSearchParams({
    query: buildLiveNewsQuery(stock),
    mode: "ArtList",
    format: "json",
    maxrecords: "8",
    sort: "HybridRel"
  });
  return `https://api.gdeltproject.org/api/v2/doc/doc?${params.toString()}`;
}

function sameOriginLiveNewsUrl(stock) {
  const params = new URLSearchParams({
    symbol: stock.symbol,
    name: stock.name
  });
  return `/api/live-news?${params.toString()}`;
}

function sameOriginCombinedLiveNewsUrl() {
  return "/api/live-news";
}

function matchLiveArticleStock(item) {
  if (item.matchedSymbol) return stocks.find((stock) => stock.symbol === item.matchedSymbol);
  const text = [item.title, item.description, item.url].filter(Boolean).join(" ").toLowerCase();
  return stocks.find((stock) => {
    const aliases = [stock.symbol, stock.name.split(" ")[0], stock.name.replace(/\b(Corp\.|Inc\.|Co\.|Corporation|Chase|&)\b/g, "").trim()];
    return aliases.some((alias) => alias && text.includes(alias.toLowerCase()));
  });
}

function normalizeLiveArticle(stock, item) {
  const title = item.title || `${stock.symbol} market news update`;
  const published = item.pubDate ? new Date(item.pubDate) : parseGdeltDate(item.seendate || item.seendateutc || "");
  const sentiment = inferSentiment(title);
  const category = inferCategory(title);
  const absoluteScore = Math.abs(sentiment.score);
  const confidence = Math.round(58 + absoluteScore * 34);
  const impactLevel = confidence >= 78 ? "High" : confidence >= 66 ? "Medium" : "Low";

  return {
    id: `live-${stock.symbol}-${hashString(item.url || title)}`,
    title,
    source: item.domain || "GDELT Live Search",
    url: item.url || "https://www.gdeltproject.org/",
    publishedTime: timeLabel(published),
    publishedMs: published.getTime(),
    tickers: [stock.symbol],
    company: stock.name,
    sector: stock.sector,
    summary: item.description || `Live article matched to ${stock.symbol}. The app can monitor it now and measure price reaction as market data becomes available.`,
    sentimentLabel: sentiment.label,
    sentimentScore: sentiment.score,
    category,
    impactLevel,
    whyItMatters: `This live article matters because ${stock.symbol} is currently analyzed around ${stock.regime.toLowerCase()}.`,
    possibleImpact:
      "Live article queued for impact analysis. Completed 1D, 1W, 1M, 3M, and 1Y reactions require price data after the article timestamp.",
    bullets: [
      `Live source matched this article to ${stock.symbol} from ${item.domain || "GDELT"}.`,
      `Signal classifier tagged it as ${sentiment.label.toLowerCase()} ${category.toLowerCase()} news with ${confidence}/100 confidence.`,
      "Impact windows are pending until the app observes post-news price data."
    ],
    returns: { "1d": 0, "1w": 0, "1m": 0, "3m": 0, "1y": 0 },
    confidence,
    volumeAnomaly: 1 + absoluteScore,
    isLive: true
  };
}

async function fetchLiveArticlesForStock(stock) {
  const urls = [sameOriginLiveNewsUrl(stock), liveNewsUrl(stock)];
  for (const url of urls) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) continue;
      const payload = await response.json();
      const articles = (payload.articles || []).map((item) => normalizeLiveArticle(stock, item));
      if (articles.length) return articles;
    } catch {
      continue;
    } finally {
      window.clearTimeout(timeout);
    }
  }
  return [];
}

async function fetchLiveArticles() {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(sameOriginCombinedLiveNewsUrl(), { signal: controller.signal });
    if (!response.ok) return [];
    const payload = await response.json();
    return (payload.articles || [])
      .map((item) => {
        const stock = matchLiveArticleStock(item);
        return stock ? normalizeLiveArticle(stock, item) : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  } finally {
    window.clearTimeout(timeout);
  }
}

function dedupeArticles(articles) {
  const seen = new Set();
  return articles.filter((article) => {
    const key = article.url || article.id;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getAllArticles() {
  const historicalArticles = stocks
    .flatMap((stock) =>
      stock.events.map((event, index) => ({
        id: `article-${event.id}`,
        title: event.headline,
        source: event.source,
        url: "https://example.com/mock-market-news",
        publishedTime: `${event.date} ${index % 2 === 0 ? "08:30" : "16:05"} ET`,
        tickers: [stock.symbol],
        company: stock.name,
        sector: stock.sector,
        summary: event.summary,
        sentimentLabel: event.sentiment,
        sentimentScore: event.sentiment === "Positive" ? Math.min(0.95, event.confidence / 100) : event.sentiment === "Negative" ? -Math.min(0.95, event.confidence / 100) : 0,
        category: event.type,
        impactLevel: event.confidence >= 80 || event.volumeAnomaly >= 2.2 ? "High" : event.confidence >= 65 ? "Medium" : "Low",
        whyItMatters: `This matters because ${stock.symbol} is currently trading around ${stock.regime.toLowerCase()}.`,
        possibleImpact: `Associated ${windowLabel()} reaction in the sample: ${percent(returnFor(event))}. Treat this as correlation research, not causation.`,
        bullets: [
          event.summary,
          `Sentiment analyzer classified this as ${event.sentiment.toLowerCase()} with a score of ${event.sentiment === "Positive" ? "+" : ""}${(event.sentiment === "Negative" ? -event.confidence / 100 : event.confidence / 100).toFixed(2)}.`,
          `Impact level is ${event.confidence >= 80 || event.volumeAnomaly >= 2.2 ? "high" : event.confidence >= 65 ? "medium" : "low"} based on confidence and ${event.volumeAnomaly.toFixed(1)}x news-volume anomaly.`
        ],
        returns: event.returns,
        confidence: event.confidence,
        volumeAnomaly: event.volumeAnomaly
      }))
    )
    .sort((a, b) => new Date(b.publishedTime.slice(0, 10)) - new Date(a.publishedTime.slice(0, 10)));

  return dedupeArticles([...state.liveArticles, ...historicalArticles]).sort((a, b) => {
    const aTime = a.publishedMs ?? new Date(a.publishedTime.slice(0, 10)).getTime();
    const bTime = b.publishedMs ?? new Date(b.publishedTime.slice(0, 10)).getTime();
    return bTime - aTime;
  });
}

function activeWatchlist() {
  return watchlists.find((watchlist) => watchlist.id === state.selectedWatchlistId) || watchlists[0];
}

function articleMatchesQuery(article) {
  const query = state.globalSearch.trim().toLowerCase();
  if (!query) return true;
  return [article.title, article.source, article.summary, article.category, article.sector, article.tickers.join(" ")]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function getFilteredArticles() {
  return getAllArticles().filter((article) => {
    const tickerMatch = state.newsTicker === "All" || article.tickers.includes(state.newsTicker);
    const sentimentMatch = state.newsSentiment === "All" || article.sentimentLabel === state.newsSentiment;
    const categoryMatch = state.newsCategory === "All" || article.category === state.newsCategory;
    const sourceMatch = state.newsSource === "All" || article.source === state.newsSource;
    return articleMatchesQuery(article) && tickerMatch && sentimentMatch && categoryMatch && sourceMatch;
  });
}

function impactClass(impact) {
  if (impact === "High") return "Negative";
  if (impact === "Medium") return "Neutral";
  return "Positive";
}

function articleEventId(article) {
  return article.id.replace("article-", "");
}

function findArticleContext(article) {
  const eventId = articleEventId(article);
  const stock =
    stocks.find((item) => item.events.some((event) => event.id === eventId)) ||
    stocks.find((item) => article.tickers.includes(item.symbol));
  const event = stock?.events.find((item) => item.id === eventId);
  return { stock, event };
}

function findArticleForEvent(event) {
  return getAllArticles().find((article) => article.id === `article-${event.id}`);
}

function focusSignal(symbol, eventId) {
  state.selectedSymbol = symbol;
  state.selectedEventId = eventId;
  render();
}

function focusArticleSignal(article) {
  const { stock, event } = findArticleContext(article);
  if (stock) state.selectedSymbol = stock.symbol;
  if (event) state.selectedEventId = event.id;
  render();
}

function renderReturnRows(returns) {
  return RETURN_WINDOWS
    .map(
      (windowKey) => {
        const value = returnFor({ returns }, windowKey);
        return `
        <tr>
          <td>${windowLabel(windowKey)}</td>
          <td class="${sentimentClass(value)}">${percent(value)}</td>
        </tr>
      `;
      }
    )
    .join("");
}

function renderArticleReturnRows(article) {
  if (article.isLive) {
    return `
      <tr>
        <td>${RETURN_WINDOWS.map((windowKey) => windowLabel(windowKey)).join("/")}</td>
        <td>Pending price observation</td>
      </tr>
    `;
  }
  return renderReturnRows(article.returns);
}

function renderPreviousSignalBrief(stock, event) {
  if (!stock || !event) {
    return `
      <section class="detail-section">
        <h4>Previous Signal Impact</h4>
        <p>This live article is not yet linked to a completed price-reaction window. It will become a measured signal after post-news price data is available.</p>
      </section>
    `;
  }

  const previous = getPreviousSignal(stock, event);
  if (!previous) {
    return `
      <section class="detail-section">
        <h4>Previous Signal Impact</h4>
        <p>This is the first tracked ${stock.symbol} signal in the sample window, so there is no prior market-moving headline to compare.</p>
      </section>
    `;
  }

  const previousReturn = returnFor(previous);
  const currentReturn = returnFor(event);
  const sameDirection = (previousReturn >= 0 && currentReturn >= 0) || (previousReturn < 0 && currentReturn < 0);
  const relationship = sameDirection ? "Confirmed the prior signal" : "Reversed the prior signal";
  return `
    <section class="detail-section">
      <div class="modal-section-heading">
        <h4>Previous Signal Impact</h4>
        <span class="status-pill ${sameDirection ? "done" : "partial"}">${relationship}</span>
      </div>
      <p><strong>${dateLabel(previous.date)}:</strong> ${previous.headline}</p>
      <div class="modal-stat-grid three-up">
        <div>
          <span>Prior ${windowLabel()}</span>
          <strong class="${sentimentClass(previousReturn)}">${percent(previousReturn)}</strong>
        </div>
        <div>
          <span>Current ${windowLabel()}</span>
          <strong class="${sentimentClass(currentReturn)}">${percent(currentReturn)}</strong>
        </div>
        <div>
          <span>Confidence Delta</span>
          <strong class="${sentimentClass(event.confidence - previous.confidence)}">${event.confidence - previous.confidence > 0 ? "+" : ""}${event.confidence - previous.confidence} pts</strong>
        </div>
      </div>
      <p>${sameDirection ? "The newer article reinforced the direction of the earlier read." : "The newer article pushed against the previous read, which is why the dashboard treats it as a changed signal."}</p>
    </section>
  `;
}

function openNewsModal(article) {
  const { stock, event } = findArticleContext(article);
  const currentReturn = event ? returnFor(event) : returnFor(article);
  const reactionText = article.isLive ? "Pending" : percent(currentReturn);
  const reactionClass = article.isLive ? "neutral" : sentimentClass(currentReturn);

  els.newsModalTitle.textContent = article.title;
  els.newsModalMeta.textContent = `${article.source} - ${article.publishedTime} - ${article.tickers.join(", ")}`;
  els.newsModalBody.innerHTML = `
    <section class="detail-section lead-detail">
      <div class="modal-section-heading">
        <h4>${article.company}</h4>
        <span class="tag-chip ${article.sentimentLabel}">${article.sentimentLabel} ${article.sentimentScore.toFixed(2)}</span>
      </div>
      <p>${article.summary}</p>
      <div class="chip-grid">
        ${article.tickers.map((ticker) => `<span class="ticker-chip">${ticker}</span>`).join("")}
        <span class="ticker-chip">${article.sector}</span>
        <span class="ticker-chip">${article.category}</span>
        <span class="tag-chip ${impactClass(article.impactLevel)}">${article.impactLevel} impact</span>
      </div>
    </section>

    <section class="detail-section">
      <h4>Signal Telemetry</h4>
      <div class="modal-stat-grid">
        <div>
          <span>Confidence</span>
          <strong>${article.confidence}/100</strong>
        </div>
        <div>
          <span>News Volume</span>
          <strong>${article.volumeAnomaly.toFixed(1)}x</strong>
        </div>
        <div>
          <span>${windowLabel()} Reaction</span>
          <strong class="${reactionClass}">${reactionText}</strong>
        </div>
        <div>
          <span>Category</span>
          <strong>${article.category}</strong>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <h4>AI News Brief</h4>
      <ul class="ai-bullets modal-bullets">
        ${article.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
      </ul>
    </section>

    <section class="detail-section">
      <h4>Why It Matters</h4>
      <p>${article.whyItMatters}</p>
      <p>${article.possibleImpact}</p>
    </section>

    ${renderPreviousSignalBrief(stock, event)}

    <section class="detail-section">
      <h4>Return Windows After Headline</h4>
      <table class="modal-return-table">
        <thead>
          <tr>
            <th>Window</th>
            <th>Associated Reaction</th>
          </tr>
        </thead>
        <tbody>${renderArticleReturnRows(article)}</tbody>
      </table>
    </section>

    <section class="detail-section">
      <h4>Source</h4>
      <p>${article.source} source reliability is shown in Sources/Admin. ${article.isLive ? "This is a live fetched article candidate." : "This mock article is a sample record for product testing."}</p>
      <a href="${article.url}" target="_blank" rel="noreferrer">${article.isLive ? "Open live source URL" : "Open mock source URL"}</a>
    </section>
  `;

  els.newsModal.classList.add("is-open");
  els.newsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  els.newsModalClose.focus();
}

function closeNewsModal() {
  els.newsModal.classList.remove("is-open");
  els.newsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function makeArticleOpenable(element, article) {
  element.tabIndex = 0;
  element.setAttribute("role", "button");
  element.setAttribute("aria-label", `Open news detail: ${article.title}`);
  element.addEventListener("click", () => {
    focusArticleSignal(article);
    openNewsModal(article);
  });
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      focusArticleSignal(article);
      openNewsModal(article);
    }
  });
}

function renderOptions(select, values, current, prefix) {
  select.innerHTML = "";
  const all = document.createElement("option");
  all.value = "All";
  all.textContent = prefix;
  select.appendChild(all);
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
  select.value = current;
}

function renderProductNavigation() {
  els.navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.page === state.activePage);
  });
  els.pageViews.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.pagePanel === state.activePage);
  });
}

function renderDashboardSystem() {
  const articles = getAllArticles();
  const trendCounts = stocks
    .map((stock) => {
      const stockArticles = articles.filter((article) => article.tickers.includes(stock.symbol));
      const score = stockArticles.reduce((sum, article) => sum + article.confidence + article.volumeAnomaly * 10, 0);
      return { stock, count: stockArticles.length, score };
    })
    .sort((a, b) => b.score - a.score);

  els.trendingTickers.innerHTML = "";
  trendCounts.forEach(({ stock, count, score }) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "ticker-chip";
    chip.textContent = `${stock.symbol} ${count} news / ${Math.round(score)} score`;
    chip.addEventListener("click", () => {
      state.selectedSymbol = stock.symbol;
      state.selectedEventId = stock.events[0].id;
      render();
    });
    els.trendingTickers.appendChild(chip);
  });

  const sentimentTotals = ["Positive", "Neutral", "Negative"].map((label) => ({
    label,
    count: articles.filter((article) => article.sentimentLabel === label).length
  }));
  const total = Math.max(1, articles.length);
  els.sentimentOverview.innerHTML = "";
  sentimentTotals.forEach((item) => {
    const row = document.createElement("div");
    row.className = "sentiment-bar";
    row.innerHTML = `
      <span>${item.label}</span>
      <span class="bar-track"><span class="bar-fill ${item.label}" style="width:${(item.count / total) * 100}%"></span></span>
      <span>${item.count}</span>
    `;
    els.sentimentOverview.appendChild(row);
  });

  renderMiniList(els.breakingNews, articles.slice(0, 4));
  const watchlist = activeWatchlist();
  const watched = articles.filter((article) => article.tickers.some((ticker) => watchlist.tickers.includes(ticker))).slice(0, 4);
  els.watchlistNewsLabel.textContent = `${watchlist.name} news only`;
  renderMiniList(els.watchlistNews, watched);
}

function renderMiniList(container, articles) {
  container.innerHTML = "";
  if (!articles.length) {
    const empty = document.createElement("div");
    empty.className = "mini-item";
    empty.innerHTML = "<strong>No matching news</strong><span>Adjust filters or watchlist tickers.</span>";
    container.appendChild(empty);
    return;
  }
  articles.forEach((article) => {
    const item = document.createElement("article");
    item.className = "mini-item";
    item.innerHTML = `
      <strong>${article.tickers.join(", ")} - ${article.title}</strong>
      <span>${article.source} - ${article.isLive ? "live candidate" : `${article.impactLevel} impact`} - ${article.sentimentLabel}</span>
    `;
    makeArticleOpenable(item, article);
    container.appendChild(item);
  });
}

function renderNewsFeed() {
  const articles = getFilteredArticles();
  els.newsFeed.innerHTML = "";
  articles.slice(0, 8).forEach((article) => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.innerHTML = `
      <div class="news-card-header">
        <span class="news-meta">${article.source} - ${article.publishedTime}</span>
        <span class="tag-chip ${impactClass(article.impactLevel)}">${article.impactLevel} impact</span>
      </div>
      <h4>${article.title}</h4>
      <p>${article.summary}</p>
      <div class="chip-grid">
        ${article.tickers.map((ticker) => `<span class="ticker-chip">${ticker}</span>`).join("")}
        <span class="tag-chip ${article.sentimentLabel}">${article.sentimentLabel} ${article.sentimentScore.toFixed(2)}</span>
        <span class="ticker-chip">${article.category}</span>
      </div>
      <div class="news-card-footer">
        <span class="news-meta">${article.sector}</span>
        <span class="news-meta">${article.isLive ? "Live impact pending" : "Open full impact brief"}</span>
      </div>
    `;
    makeArticleOpenable(card, article);
    els.newsFeed.appendChild(card);
  });
  els.paginationInfo.textContent = `Showing ${Math.min(8, articles.length)} of ${articles.length} matching articles. Mock pagination page 1.`;
}

function renderWatchlists() {
  els.watchlistList.innerHTML = "";
  watchlists.forEach((watchlist) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `watchlist-button ${watchlist.id === state.selectedWatchlistId ? "is-active" : ""}`;
    button.innerHTML = `<strong>${watchlist.name}</strong><span>${watchlist.tickers.join(", ") || "No tickers yet"}</span>`;
    button.addEventListener("click", () => {
      state.selectedWatchlistId = watchlist.id;
      render();
    });
    els.watchlistList.appendChild(button);
  });

  const watchlist = activeWatchlist();
  els.activeWatchlistTitle.textContent = watchlist.name;
  els.activeWatchlistMeta.textContent = `${watchlist.tickers.length} tickers tracked`;
  els.watchlistTickerChips.innerHTML = "";
  watchlist.tickers.forEach((ticker) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "remove-chip";
    chip.textContent = `${ticker} remove`;
    chip.addEventListener("click", () => {
      watchlist.tickers = watchlist.tickers.filter((item) => item !== ticker);
      render();
    });
    els.watchlistTickerChips.appendChild(chip);
  });

  const matchedNews = getAllArticles().filter((article) => article.tickers.some((ticker) => watchlist.tickers.includes(ticker)));
  renderMiniList(els.watchlistMatchedNews, matchedNews.slice(0, 6));
}

function renderAlerts() {
  els.alertRules.innerHTML = "";
  const articles = getAllArticles();
  alertRules.forEach((rule) => {
    const matches = articles.filter((article) => {
      if (!article.tickers.includes(rule.ticker)) return false;
      if (rule.type === "Negative sentiment") return article.sentimentLabel === "Negative";
      if (rule.type === "High impact") return article.impactLevel === "High";
      if (rule.type === "Earnings") return article.category === "Earnings";
      if (rule.type === "SEC filing") return filings.some((filing) => filing.ticker === rule.ticker);
      if (rule.type === "Unusual volume") return article.volumeAnomaly >= 1.8;
      return true;
    });
    const item = document.createElement("article");
    item.className = "alert-item";
    item.innerHTML = `
      <strong>${rule.ticker} - ${rule.type}</strong>
      <span>Threshold ${rule.threshold} - ${rule.active ? "Active" : "Paused"} - ${matches.length} mock matches</span>
    `;
    els.alertRules.appendChild(item);
  });
}

function renderCalendar() {
  els.calendarList.innerHTML = "";
  economicEvents.forEach((event) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <div class="data-row">
        <h4>${event.name}</h4>
        <span class="tag-chip ${event.importance === "High" ? "Negative" : "Neutral"}">${event.importance}</span>
      </div>
      <p>${event.country} - ${event.scheduledTime}</p>
      <div class="chip-grid">${event.relatedAssets.map((asset) => `<span class="ticker-chip">${asset}</span>`).join("")}</div>
      <p>Actual: ${event.actual} - Forecast: ${event.forecast} - Previous: ${event.previous}</p>
    `;
    els.calendarList.appendChild(card);
  });
}

function renderFilings() {
  els.filingsList.innerHTML = "";
  filings
    .filter((filing) => state.newsTicker === "All" || filing.ticker === state.newsTicker || state.selectedSymbol === filing.ticker)
    .forEach((filing) => {
      const card = document.createElement("article");
      card.className = "data-card";
      card.innerHTML = `
        <div class="data-row">
          <h4>${filing.ticker} - ${filing.type}</h4>
          <span class="ticker-chip">${filing.filedDate}</span>
        </div>
        <p>${filing.company}</p>
        <p>${filing.summary}</p>
        <a href="${filing.url}" target="_blank" rel="noreferrer">SEC mock adapter URL</a>
      `;
      els.filingsList.appendChild(card);
    });
}

function renderSources() {
  els.sourceList.innerHTML = "";
  newsSources.forEach((source) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <div class="data-row">
        <h4>${source.name}</h4>
        <span class="status-pill ${source.enabled ? "done" : "missing"}">${source.enabled ? "Enabled" : "Disabled"}</span>
      </div>
      <p>${source.category} - Reliability ${source.reliability}/100</p>
    `;
    els.sourceList.appendChild(card);
  });

  els.coverageList.innerHTML = "";
  coverage.forEach((item) => {
    const row = document.createElement("article");
    row.className = "coverage-item";
    row.innerHTML = `
      <div class="data-row">
        <h4>${item.label}</h4>
        <span class="status-pill ${item.status}">${item.status}</span>
      </div>
      <p>${item.note}</p>
    `;
    els.coverageList.appendChild(row);
  });
}

function renderLiveStatus() {
  els.liveStatus.textContent = state.liveStatus;
  els.refreshNewsButton.disabled = state.refreshInFlight;
  els.refreshNewsButton.textContent = state.refreshInFlight ? "Refreshing..." : "Refresh News";
}

async function refreshLiveNews() {
  if (state.refreshInFlight) return;
  state.refreshInFlight = true;
  state.liveStatus = "Refreshing live news";
  renderLiveStatus();

  const combinedArticles = await fetchLiveArticles();
  const fallbackArticles = combinedArticles.length ? [] : (await fetchLiveArticlesForStock(getStock())).slice(0, 8);
  const articles = dedupeArticles([...combinedArticles, ...fallbackArticles]).slice(0, 24);
  state.liveArticles = articles;
  state.lastRefreshAt = new Date();
  state.refreshInFlight = false;
  state.liveStatus = articles.length
    ? `Live: ${articles.length} articles at ${timeLabel(state.lastRefreshAt)}`
    : `Live unavailable at ${timeLabel(state.lastRefreshAt)}`;
  render();
}

function populateStaticSelects() {
  const articles = getAllArticles();
  renderOptions(els.newsTickerFilter, stocks.map((stock) => stock.symbol), state.newsTicker, "All tickers");
  renderOptions(els.newsCategoryFilter, [...new Set(articles.map((article) => article.category))], state.newsCategory, "All categories");
  renderOptions(els.newsSourceFilter, [...new Set(articles.map((article) => article.source))], state.newsSource, "All sources");
  els.newsSentimentFilter.value = state.newsSentiment;

  els.watchlistTickerSelect.innerHTML = "";
  els.alertTicker.innerHTML = "";
  stocks.forEach((stock) => {
    const option = document.createElement("option");
    option.value = stock.symbol;
    option.textContent = stock.symbol;
    els.watchlistTickerSelect.appendChild(option.cloneNode(true));
    els.alertTicker.appendChild(option);
  });
}

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function formatVolume(value) {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`;
  return `${(value / 1_000_000).toFixed(1)}M`;
}

function movingAverage(points, index, length) {
  const start = Math.max(0, index - length + 1);
  const window = points.slice(start, index + 1);
  return window.reduce((sum, point) => sum + point.close, 0) / window.length;
}

function chartZoomIndex() {
  return CHART_ZOOM_LEVELS.indexOf(state.chartZoom);
}

function setChartZoom(index) {
  const boundedIndex = Math.max(0, Math.min(CHART_ZOOM_LEVELS.length - 1, index));
  state.chartZoom = CHART_ZOOM_LEVELS[boundedIndex];
}

function renderChartZoomControls() {
  const zoomIndex = chartZoomIndex();
  els.chartZoomLabel.textContent = `${state.chartZoom}x range`;
  els.chartZoomIn.disabled = zoomIndex <= 0;
  els.chartZoomOut.disabled = zoomIndex >= CHART_ZOOM_LEVELS.length - 1;
  els.chartZoomReset.disabled = state.chartZoom === 1;
}

function createPriceSeries(stock) {
  const start = new Date("2025-01-01T00:00:00");
  const end = new Date("2025-12-31T00:00:00");
  const eventMap = new Map(stock.events.map((event) => [event.date, event]));
  const points = [];
  let close = stock.basePrice;
  let previousClose = close;
  let index = 0;

  for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
    const day = date.getDay();
    if (day === 0 || day === 6) continue;

    const iso = date.toISOString().slice(0, 10);
    const event = eventMap.get(iso);
    const cycle = Math.sin(index / 3.2) * 0.009 + Math.cos(index / 11.4) * 0.006;
    const volatility = 0.012 + Math.abs(Math.sin(index / 5.7)) * 0.011;
    const drift = stock.symbol === "NVDA" ? 0.0028 : stock.symbol === "TSLA" ? -0.0006 : stock.symbol === "JPM" ? 0.0014 : 0.0018;
    const eventShock = event ? event.returns["1d"] / 100 : 0;
    const overnightGap = Math.sin(index / 2.8) * volatility * 0.38 + eventShock * 0.3;
    const intradayMove = cycle + drift + eventShock * 0.34;
    const open = Math.max(8, previousClose * (1 + overnightGap));
    close = Math.max(8, open * (1 + intradayMove));
    const high = Math.max(open, close) * (1 + volatility * (0.55 + Math.abs(Math.sin(index / 4.2))));
    const low = Math.min(open, close) * (1 - volatility * (0.45 + Math.abs(Math.cos(index / 4.9))));
    const baseVolume = stock.symbol === "NVDA" ? 62_000_000 : stock.symbol === "TSLA" ? 95_000_000 : stock.symbol === "AAPL" ? 54_000_000 : 15_000_000;
    const volumeMultiplier = 0.75 + Math.abs(cycle) * 18 + Math.abs(close - open) / open * 12 + (event ? event.volumeAnomaly : 0);
    const volume = Math.round(baseVolume * volumeMultiplier);
    const returnPct = ((close - previousClose) / previousClose) * 100;

    points.push({ date: iso, open, high, low, close, price: close, previousClose, returnPct, volume, event });
    previousClose = close;
    index += 1;
  }

  return points;
}

function matchEventToPoint(points, eventDate) {
  return points.reduce((best, point) => {
    const bestDistance = Math.abs(new Date(`${best.date}T00:00:00`) - new Date(`${eventDate}T00:00:00`));
    const pointDistance = Math.abs(new Date(`${point.date}T00:00:00`) - new Date(`${eventDate}T00:00:00`));
    return pointDistance < bestDistance ? point : best;
  }, points[0]);
}

function getWindowConfig() {
  return WINDOW_CONFIG[state.selectedWindow] || WINDOW_CONFIG["1d"];
}

function eventPointIndex(points, event) {
  const point = matchEventToPoint(points, event.date);
  return Math.max(0, points.indexOf(point));
}

function getChartWindow(points, selectedEvent) {
  const config = getWindowConfig();
  const selectedIndex = eventPointIndex(points, selectedEvent);
  const context = Math.max(1, Math.round(config.context * state.chartZoom));
  const sessions = Math.max(1, Math.round(config.sessions * state.chartZoom));
  const startIndex = Math.max(0, selectedIndex - context);
  const endIndex = Math.min(points.length - 1, selectedIndex + sessions);
  const visiblePoints = points.slice(startIndex, endIndex + 1);
  return {
    ...config,
    context,
    sessions,
    startIndex,
    endIndex,
    selectedIndex,
    points: visiblePoints
  };
}

function getWindowEvents(events, allPoints, windowInfo, selectedEvent) {
  return events
    .filter((event) => {
      const index = eventPointIndex(allPoints, event);
      return event.id === selectedEvent.id || (index >= windowInfo.startIndex && index <= windowInfo.endIndex);
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function getCurrentWindowEvents(stock, events, selectedEvent) {
  const allPoints = createPriceSeries(stock);
  const windowInfo = getChartWindow(allPoints, selectedEvent);
  return getWindowEvents(events, allPoints, windowInfo, selectedEvent);
}

function renderQuoteStrip(point) {
  const rangePct = ((point.high - point.low) / point.open) * 100;
  els.quoteOpen.textContent = formatMoney(point.open);
  els.quoteHigh.textContent = formatMoney(point.high);
  els.quoteLow.textContent = formatMoney(point.low);
  els.quoteClose.textContent = formatMoney(point.close);
  els.quoteVolume.textContent = formatVolume(point.volume);
  els.quoteRange.textContent = percent(rangePct);
  els.quoteClose.className = sentimentClass(point.returnPct);
  els.quoteRange.className = sentimentClass(point.returnPct);
}

function getPreviousSignal(stock, selected) {
  const sorted = [...stock.events].sort((a, b) => new Date(a.date) - new Date(b.date));
  const index = sorted.findIndex((event) => event.id === selected.id);
  return index > 0 ? sorted[index - 1] : null;
}

function renderPreviousSignal(stock, selected) {
  const previous = getPreviousSignal(stock, selected);
  if (!previous) {
    els.previousSignalTitle.textContent = "No prior signal for this ticker";
    els.previousSignalSummary.textContent = "This is the first tracked market-moving signal in the sample window, so there is no earlier event to compare.";
    els.previousSignalReturn.textContent = "-";
    els.previousSignalDelta.textContent = "-";
    els.previousSignalRelationship.textContent = "First signal";
    els.chartSignalNote.textContent = "Previous signal: none yet. This is the first tracked signal for the selected ticker in the sample period.";
    return;
  }

  const previousReturn = returnFor(previous);
  const selectedReturn = returnFor(selected);
  const delta = selected.confidence - previous.confidence;
  const sameDirection = (previousReturn >= 0 && selectedReturn >= 0) || (previousReturn < 0 && selectedReturn < 0);
  const relationship = sameDirection ? "Confirmed" : "Reversed";
  const directionText = sameDirection
    ? "The new headline reinforced the direction of the prior signal."
    : "The new headline pushed against the previous signal and changed the near-term read.";

  els.previousSignalTitle.textContent = `${previous.type} - ${previous.headline}`;
  els.previousSignalSummary.textContent = `${dateLabel(previous.date)} prior signal: ${previous.sentiment.toLowerCase()}, ${previous.volumeAnomaly.toFixed(1)}x volume, ${previous.confidence}/100 confidence. ${directionText}`;
  els.previousSignalReturn.textContent = percent(previousReturn);
  els.previousSignalReturn.className = sentimentClass(previousReturn);
  els.previousSignalDelta.textContent = `${delta > 0 ? "+" : ""}${delta} pts`;
  els.previousSignalDelta.className = sentimentClass(delta);
  els.previousSignalRelationship.textContent = relationship;
  els.previousSignalRelationship.className = sameDirection ? "positive" : "negative";
  els.chartSignalNote.textContent = `Previous signal: ${previous.type} on ${dateLabel(previous.date)} returned ${percent(previousReturn)} over ${windowLabel()}. Current news ${relationship.toLowerCase()} that read with ${percent(selectedReturn)}.`;
}

function drawChart(stock, events) {
  const canvas = els.priceChart;
  const ctx = canvas.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth;
  const cssHeight = canvas.clientHeight;
  canvas.width = Math.floor(cssWidth * pixelRatio);
  canvas.height = Math.floor(cssHeight * pixelRatio);
  ctx.scale(pixelRatio, pixelRatio);

  const allPoints = createPriceSeries(stock);
  const selectedEvent = getSelectedEvent(stock);
  const windowInfo = getChartWindow(allPoints, selectedEvent);
  const points = windowInfo.points;
  const windowEvents = getWindowEvents(events, allPoints, windowInfo, selectedEvent);
  state.points = points;
  state.windowEvents = windowEvents;

  const pad = { top: 24, right: 74, bottom: 72, left: 18 };
  const chartWidth = cssWidth - pad.left - pad.right;
  const priceHeight = Math.max(220, Math.round((cssHeight - pad.top - pad.bottom) * 0.76));
  const volumeTop = pad.top + priceHeight + 18;
  const volumeHeight = cssHeight - volumeTop - pad.bottom + 36;
  const closes = points.map((point) => point.close);
  const minPrice = Math.min(...closes) * 0.992;
  const maxPrice = Math.max(...closes) * 1.008;
  const maxVolume = Math.max(...points.map((point) => point.volume));

  const xFor = (index) => pad.left + (index / Math.max(1, points.length - 1)) * chartWidth;
  const yFor = (price) => pad.top + (1 - (price - minPrice) / (maxPrice - minPrice)) * priceHeight;
  const volumeY = volumeTop + volumeHeight;
  const pointWidth = Math.max(2, Math.min(6, (chartWidth / points.length) * 0.52));

  ctx.clearRect(0, 0, cssWidth, cssHeight);
  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  ctx.lineWidth = 1;
  ctx.font = "12px Inter, system-ui, sans-serif";

  for (let i = 0; i <= 6; i += 1) {
    const y = pad.top + (i / 6) * priceHeight;
    const priceValue = maxPrice - (i / 6) * (maxPrice - minPrice);
    ctx.strokeStyle = i === 6 ? "#cbd5e1" : "#e6ebf2";
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(cssWidth - pad.right, y);
    ctx.stroke();
    ctx.fillStyle = "#64748b";
    ctx.fillText(formatMoney(priceValue), cssWidth - pad.right + 9, y + 4);
  }

  ctx.strokeStyle = "#d8dee8";
  ctx.beginPath();
  ctx.moveTo(cssWidth - pad.right, pad.top);
  ctx.lineTo(cssWidth - pad.right, volumeY);
  ctx.stroke();

  points.forEach((point, index) => {
    const x = xFor(index);
    const isUp = point.close >= point.open;
    const volumeHeightForPoint = (point.volume / maxVolume) * volumeHeight;
    ctx.fillStyle = isUp ? "rgba(21, 128, 61, 0.12)" : "rgba(180, 35, 24, 0.12)";
    ctx.fillRect(x - pointWidth / 2, volumeY - volumeHeightForPoint, pointWidth, volumeHeightForPoint);
  });

  ctx.beginPath();
  points.forEach((point, index) => {
    const x = xFor(index);
    const y = yFor(point.close);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(xFor(points.length - 1), volumeTop - 6);
  ctx.lineTo(xFor(0), volumeTop - 6);
  ctx.closePath();
  const areaGradient = ctx.createLinearGradient(0, pad.top, 0, volumeTop);
  areaGradient.addColorStop(0, "rgba(37, 99, 235, 0.18)");
  areaGradient.addColorStop(1, "rgba(37, 99, 235, 0.02)");
  ctx.fillStyle = areaGradient;
  ctx.fill();

  ctx.beginPath();
  points.forEach((point, index) => {
    const x = xFor(index);
    const y = yFor(point.close);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 2.4;
  ctx.stroke();

  points.forEach((point, index) => {
    if (points.length > 14 && index !== 0 && index !== points.length - 1 && index !== windowInfo.selectedIndex - windowInfo.startIndex) return;
    const x = xFor(index);
    const y = yFor(point.close);
    ctx.beginPath();
    ctx.arc(x, y, 3.2, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = "#2563eb";
    ctx.stroke();
  });

  const tickEvery = Math.max(1, Math.ceil(points.length / 5));
  points.forEach((point, index) => {
    if (index % tickEvery !== 0 && index !== points.length - 1) return;
    ctx.fillStyle = "#64748b";
    ctx.fillText(point.date.slice(5), xFor(index) - 13, cssHeight - 20);
  });

  const markers = windowEvents.map((event) => {
    const point = matchEventToPoint(points, event.date);
    const index = points.indexOf(point);
    const x = xFor(index);
    const y = yFor(point.close);
    return { event, point, index, x, y };
  });

  state.chartMeta = {
    pad,
    chartWidth,
    points,
    markers,
    volumeY
  };

  markers.forEach(({ event, x, y }) => {
    const isSelected = event.id === state.selectedEventId;
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, volumeY);
    ctx.strokeStyle = isSelected ? "#111827" : "#cbd5e1";
    ctx.setLineDash([4, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.moveTo(x, y - (isSelected ? 18 : 14));
    ctx.lineTo(x - (isSelected ? 8 : 6), y - 4);
    ctx.lineTo(x + (isSelected ? 8 : 6), y - 4);
    ctx.closePath();
    ctx.fillStyle = event.sentiment === "Positive" ? "#15803d" : event.sentiment === "Negative" ? "#b42318" : "#b45309";
    ctx.fill();
    ctx.lineWidth = isSelected ? 3 : 1.5;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
  });

  const selectedPoint = matchEventToPoint(points, selectedEvent.date);
  renderQuoteStrip(selectedPoint);
  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];
  els.selectedDate.textContent = `${dateLabel(firstPoint.date)} - ${dateLabel(lastPoint.date)}`;
  els.chartSubtitle.textContent = `${getWindowConfig().label} reaction window for ${selectedEvent.type.toLowerCase()} news at ${state.chartZoom}x range. Chart shows ${dateLabel(firstPoint.date)} through ${dateLabel(lastPoint.date)}; markers are limited to signals inside this active window, while the timeline keeps the full signal history clickable.`;

  ctx.fillStyle = "#14213d";
  ctx.font = "700 12px Inter, system-ui, sans-serif";
  ctx.fillText("Close price", pad.left + 6, pad.top + 14);
  ctx.fillStyle = "#2563eb";
  ctx.fillRect(pad.left + 78, pad.top + 7, 26, 3);
  ctx.fillStyle = "#64748b";
  ctx.fillText(`Volume max ${formatVolume(maxVolume)}`, pad.left + 6, volumeTop + 14);
}

function renderTickers() {
  const query = els.tickerSearch.value.trim().toLowerCase();
  els.tickerList.innerHTML = "";
  stocks
    .filter((stock) => `${stock.symbol} ${stock.name} ${stock.sector}`.toLowerCase().includes(query))
    .forEach((stock) => {
      const lastEvent = stock.events[stock.events.length - 1];
      const button = document.createElement("button");
      button.type = "button";
      button.className = `ticker-button ${stock.symbol === state.selectedSymbol ? "is-active" : ""}`;
      button.innerHTML = `
        <span class="ticker-symbol">${stock.symbol}</span>
        <span>
          <span class="ticker-name">${stock.name}</span>
        </span>
        <span class="ticker-change ${sentimentClass(returnFor(lastEvent))}">${percent(returnFor(lastEvent))}</span>
      `;
      button.addEventListener("click", () => {
        state.selectedSymbol = stock.symbol;
        state.selectedEventId = stock.events[0].id;
        render();
      });
      els.tickerList.appendChild(button);
    });
}

function renderMetrics(stock, selected, similar) {
  const selectedReturn = returnFor(selected);
  const avgSimilar = similar.length
    ? similar.reduce((sum, event) => sum + returnFor(event), 0) / similar.length
    : selectedReturn;

  els.marketRegime.textContent = stock.regime;
  els.stockTitle.textContent = `${stock.symbol} - ${stock.name}`;
  els.selectedReturn.textContent = percent(selectedReturn);
  els.selectedReturn.className = sentimentClass(selectedReturn);
  els.selectedReturnLabel.textContent = `${windowLabel()} associated reaction`;
  els.signalStrength.textContent = `${selected.confidence}/100`;
  els.signalStrengthLabel.textContent = `${selected.sentiment} ${selected.type.toLowerCase()} signal`;
  els.volumeAnomaly.textContent = `${selected.volumeAnomaly.toFixed(1)}x`;
  els.similarCount.textContent = String(similar.length);
  els.similarSummary.textContent = `${percent(avgSimilar)} avg ${windowLabel()} reaction`;
  els.similarSummary.className = sentimentClass(avgSimilar);
  els.selectedDate.textContent = dateLabel(selected.date);
}

function renderEventDetail(selected) {
  els.eventSource.textContent = selected.source;
  els.sentimentPill.textContent = selected.sentiment;
  els.sentimentPill.className = `sentiment-pill ${selected.sentiment}`;
  els.eventHeadline.textContent = selected.headline;
  els.eventSummary.textContent = selected.summary;
  els.eventType.textContent = selected.type;
  els.eventSurprise.textContent = selected.surprise;
  els.eventConfidence.textContent = `${selected.confidence}/100`;
  els.eventRisk.textContent = selected.risk;
  els.reactionRows.innerHTML = "";

  RETURN_WINDOWS.forEach((windowKey) => {
    const value = returnFor(selected, windowKey);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${windowLabel(windowKey)}</td>
      <td class="${sentimentClass(value)}">${percent(value)}</td>
    `;
    els.reactionRows.appendChild(row);
  });
}

function renderEvents(events, windowEvents) {
  const windowIds = new Set(windowEvents.map((event) => event.id));
  const activeWord = windowEvents.length === 1 ? "marker" : "markers";
  const totalWord = events.length === 1 ? "signal" : "signals";
  els.eventCount.textContent = `${windowEvents.length} active ${getWindowConfig().label} chart ${activeWord} / ${events.length} tracked ${totalWord}`;
  els.eventList.innerHTML = "";

  events.forEach((event) => {
    const value = returnFor(event);
    const isInWindow = windowIds.has(event.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `event-button ${event.id === state.selectedEventId ? "is-active" : ""} ${isInWindow ? "is-in-window" : "is-out-window"}`;
    button.innerHTML = `
      <span class="event-date">${dateLabel(event.date)}</span>
      <span>
        <span class="event-headline">${event.headline}</span>
        <span class="event-meta">${event.type} - ${event.sentiment} - ${event.volumeAnomaly.toFixed(1)}x volume - ${isInWindow ? `inside ${getWindowConfig().label} window` : `outside ${getWindowConfig().label} window`}</span>
      </span>
      <span class="return-value ${sentimentClass(value)}">${percent(value)}</span>
    `;
    button.addEventListener("click", () => {
      state.selectedEventId = event.id;
      render();
    });
    button.addEventListener("dblclick", () => {
      const article = findArticleForEvent(event);
      if (article) openNewsModal(article);
    });
    els.eventList.appendChild(button);
  });
}

function findSimilarEvents(selected) {
  return stocks
    .flatMap((stock) => stock.events.map((event) => ({ ...event, symbol: stock.symbol })))
    .filter((event) => event.id !== selected.id && event.type === selected.type && event.sentiment === selected.sentiment)
    .sort((a, b) => Math.abs(returnFor(b)) - Math.abs(returnFor(a)));
}

function renderSimilarEvents(selected, similar) {
  els.similarPatternLabel.textContent = `${selected.type} - ${selected.sentiment} events across the sample universe`;
  els.similarEvents.innerHTML = "";

  if (!similar.length) {
    const empty = document.createElement("div");
    empty.className = "similar-item";
    empty.innerHTML = "<h4>No close matches in the sample set</h4><p>Add more events to strengthen pattern analysis.</p>";
    els.similarEvents.appendChild(empty);
    return;
  }

  similar.slice(0, 4).forEach((event) => {
    const item = document.createElement("article");
    const value = returnFor(event);
    item.className = "similar-item";
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `Focus signal: ${event.symbol} ${event.headline}`);
    item.innerHTML = `
      <h4>${event.symbol} - ${event.headline}</h4>
      <p>${dateLabel(event.date)} - ${event.source}</p>
      <div class="similar-row">
        <span>${event.surprise}</span>
        <strong class="${sentimentClass(value)}">${percent(value)}</strong>
      </div>
    `;
    item.addEventListener("click", () => focusSignal(event.symbol, event.id));
    item.addEventListener("keydown", (keyboardEvent) => {
      if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
        keyboardEvent.preventDefault();
        focusSignal(event.symbol, event.id);
      }
    });
    els.similarEvents.appendChild(item);
  });
}

function downloadAnalysis(stock, selected) {
  const payload = {
    ticker: stock.symbol,
    company: stock.name,
    selectedEvent: selected,
    note: "Associated market reaction only; this export does not claim single-news causation."
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${stock.symbol}-${selected.id}-analysis.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function resolveChartHover(event) {
  if (!state.chartMeta) return null;
  const rect = els.priceChart.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const { pad, chartWidth, points, markers } = state.chartMeta;
  const rawIndex = Math.round(((mouseX - pad.left) / chartWidth) * Math.max(1, points.length - 1));
  const pointIndex = Math.max(0, Math.min(points.length - 1, rawIndex));
  const point = points[pointIndex];
  const nearestMarker = markers
    .map((marker) => ({
      ...marker,
      distance: Math.hypot(marker.x - mouseX, marker.y - mouseY),
      xDistance: Math.abs(marker.x - mouseX)
    }))
    .sort((a, b) => a.distance - b.distance)[0];
  const eventHit = nearestMarker && (nearestMarker.distance < 34 || nearestMarker.xDistance < 12) ? nearestMarker.event : point.event;
  return { point, event: eventHit, mouseX, mouseY };
}

function showChartTooltip(event) {
  const hover = resolveChartHover(event);
  if (!hover) return;

  const { point, event: signal } = hover;
  renderQuoteStrip(point);
  els.selectedDate.textContent = dateLabel(point.date);
  const panelRect = els.priceChart.parentElement.getBoundingClientRect();
  const returnText = signal ? percent(returnFor(signal)) : "No signal";
  const returnClass = signal ? sentimentClass(returnFor(signal)) : "neutral";

  els.chartTooltip.innerHTML = `
    <div class="tooltip-row">
      <span>${dateLabel(point.date)}</span>
      <strong class="${sentimentClass(point.returnPct)}">${percent(point.returnPct)}</strong>
    </div>
    <div class="tooltip-grid">
      <span>O ${formatMoney(point.open)}</span>
      <span>H ${formatMoney(point.high)}</span>
      <span>L ${formatMoney(point.low)}</span>
      <span>C ${formatMoney(point.close)}</span>
    </div>
    <div class="tooltip-signal">
      <span>${signal ? `${signal.type} signal` : "No news signal"}</span>
      <strong>${signal ? signal.headline : "Hover a marker for linked news"}</strong>
      <small>${signal ? `${signal.source} - ${signal.sentiment} - ${windowLabel()} ${returnText}` : "This price move has no matched article in the sample set."}</small>
    </div>
  `;
  els.chartTooltip.hidden = false;
  const maxLeft = Math.max(10, panelRect.width - 330);
  const maxTop = Math.max(10, panelRect.height - 170);
  const left = Math.min(Math.max(event.clientX - panelRect.left + 14, 10), maxLeft);
  const top = Math.min(Math.max(event.clientY - panelRect.top + 14, 10), maxTop);
  els.chartTooltip.style.left = `${left}px`;
  els.chartTooltip.style.top = `${top}px`;
  els.chartTooltip.dataset.returnClass = returnClass;
}

function hideChartTooltip() {
  els.chartTooltip.hidden = true;
  const stock = getStock();
  const selectedEvent = getSelectedEvent(stock);
  const points = state.points.length ? state.points : createPriceSeries(stock);
  const selectedPoint = matchEventToPoint(points, selectedEvent.date);
  renderQuoteStrip(selectedPoint);
  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];
  els.selectedDate.textContent = firstPoint && lastPoint ? `${dateLabel(firstPoint.date)} - ${dateLabel(lastPoint.date)}` : dateLabel(selectedEvent.date);
}

function handleCanvasClick(event) {
  const hover = resolveChartHover(event);
  if (hover?.event) {
    state.selectedEventId = hover.event.id;
    render();
  }
}

function render() {
  const stock = getStock();
  const events = getVisibleEventsWithSelection(stock);

  const selected = getSelectedEvent(stock);
  const similar = findSimilarEvents(selected);
  const windowEvents = getCurrentWindowEvents(stock, events, selected);

  renderProductNavigation();
  populateStaticSelects();
  renderTickers();
  renderMetrics(stock, selected, similar);
  if (state.activePage === "dashboard") {
    drawChart(stock, events);
  }
  renderEventDetail(selected);
  renderPreviousSignal(stock, selected);
  renderEvents(events, windowEvents);
  renderSimilarEvents(selected, similar);
  renderDashboardSystem();
  renderNewsFeed();
  renderWatchlists();
  renderAlerts();
  renderCalendar();
  renderFilings();
  renderSources();
  renderLiveStatus();
  renderChartZoomControls();
}

els.tickerSearch.addEventListener("input", renderTickers);
els.globalSearch.addEventListener("input", (event) => {
  state.globalSearch = event.target.value;
  render();
});
els.navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activePage = button.dataset.page;
    render();
  });
});
els.eventTypeFilter.addEventListener("change", (event) => {
  state.filterType = event.target.value;
  render();
});
els.bullishOnly.addEventListener("change", (event) => {
  state.bullishOnly = event.target.checked;
  render();
});
document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((segment) => segment.classList.remove("is-active"));
    button.classList.add("is-active");
    state.selectedWindow = button.dataset.window;
    state.chartZoom = 1;
    render();
  });
});
els.chartZoomOut.addEventListener("click", () => {
  setChartZoom(chartZoomIndex() + 1);
  render();
});
els.chartZoomIn.addEventListener("click", () => {
  setChartZoom(chartZoomIndex() - 1);
  render();
});
els.chartZoomReset.addEventListener("click", () => {
  state.chartZoom = 1;
  render();
});
els.newsTickerFilter.addEventListener("change", (event) => {
  state.newsTicker = event.target.value;
  render();
});
els.newsSentimentFilter.addEventListener("change", (event) => {
  state.newsSentiment = event.target.value;
  render();
});
els.newsCategoryFilter.addEventListener("change", (event) => {
  state.newsCategory = event.target.value;
  render();
});
els.newsSourceFilter.addEventListener("change", (event) => {
  state.newsSource = event.target.value;
  render();
});
els.createWatchlistButton.addEventListener("click", () => {
  const name = els.watchlistNameInput.value.trim();
  if (!name) return;
  const id = `wl-${Date.now()}`;
  watchlists.push({ id, name, tickers: [] });
  state.selectedWatchlistId = id;
  els.watchlistNameInput.value = "";
  render();
});
els.addTickerButton.addEventListener("click", () => {
  const ticker = els.watchlistTickerSelect.value;
  const watchlist = activeWatchlist();
  if (ticker && !watchlist.tickers.includes(ticker)) {
    watchlist.tickers.push(ticker);
    render();
  }
});
els.alertForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alertRules.unshift({
    id: `alert-${Date.now()}`,
    ticker: els.alertTicker.value,
    type: els.alertType.value,
    threshold: Number(els.alertThreshold.value || 75),
    active: true
  });
  render();
});
els.priceChart.addEventListener("click", handleCanvasClick);
els.priceChart.addEventListener("mousemove", showChartTooltip);
els.priceChart.addEventListener("mouseleave", hideChartTooltip);
els.refreshNewsButton.addEventListener("click", refreshLiveNews);
els.exportButton.addEventListener("click", () => downloadAnalysis(getStock(), getSelectedEvent()));
els.newsModalClose.addEventListener("click", closeNewsModal);
els.newsModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-news-modal]")) {
    closeNewsModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && els.newsModal.classList.contains("is-open")) {
    closeNewsModal();
  }
});
window.addEventListener("resize", render);

render();
refreshLiveNews();
window.setInterval(refreshLiveNews, LIVE_REFRESH_INTERVAL_MS);
