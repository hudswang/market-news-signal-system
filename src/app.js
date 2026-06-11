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

const newsSources = [
  { name: "Earnings Call", category: "Company", reliability: 92, enabled: true },
  { name: "Policy Wire", category: "Macro/Policy", reliability: 84, enabled: true },
  { name: "Company Event", category: "Company", reliability: 88, enabled: true },
  { name: "Analyst Desk", category: "Research", reliability: 76, enabled: true },
  { name: "Regulatory Filing", category: "Regulatory", reliability: 90, enabled: true },
  { name: "Macro Desk", category: "Macro", reliability: 82, enabled: true },
  { name: "Legal Wire", category: "Legal", reliability: 73, enabled: true }
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
  { label: "Market news feed", status: "done", note: "Implemented as a searchable/filterable mock feed with article cards, summaries, sentiment, categories, sources, and impact." },
  { label: "Watchlists", status: "done", note: "Implemented multiple mock watchlists with add/remove ticker controls and watchlist news filtering." },
  { label: "Alerts", status: "done", note: "Implemented mock alert rules and rule evaluation against article impact/sentiment/filing-style events." },
  { label: "AI summaries", status: "done", note: "Implemented mock bullet summaries, why-it-matters, and possible-impact fields." },
  { label: "Sentiment analysis", status: "done", note: "Implemented mock sentiment label and -1 to 1 score per article." },
  { label: "Dashboard", status: "done", note: "Implemented trending tickers, breaking news, market sentiment, news volume, watchlist news, and the original reaction chart." },
  { label: "Economic calendar", status: "done", note: "Implemented CPI, jobs, Fed, GDP-style, and earnings events using mock data." },
  { label: "SEC filings", status: "done", note: "Implemented mock filing list by ticker with type, company, date, URL, and summary." },
  { label: "Admin/source management", status: "done", note: "Implemented source reliability/category/enabled display." },
  { label: "REST API", status: "partial", note: "Documented in UI only. A real Express API is not created yet." },
  { label: "Database schema", status: "partial", note: "Models are represented by frontend mock data. Prisma/PostgreSQL is not created yet." },
  { label: "Background jobs", status: "partial", note: "Mock producer/evaluator behavior exists in the frontend. BullMQ/Redis jobs are not created yet." },
  { label: "TypeScript monorepo", status: "missing", note: "Current implementation is a static zero-dependency app. React/Express/Prisma scaffold can be added next." }
];

const state = {
  selectedSymbol: "NVDA",
  selectedEventId: "nvda-earnings-beat",
  selectedWindow: "1d",
  filterType: "All",
  bullishOnly: false,
  points: [],
  activePage: "dashboard",
  globalSearch: "",
  newsTicker: "All",
  newsSentiment: "All",
  newsCategory: "All",
  newsSource: "All",
  selectedWatchlistId: "wl-ai"
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
  priceChart: document.querySelector("#priceChart"),
  eventSource: document.querySelector("#eventSource"),
  sentimentPill: document.querySelector("#sentimentPill"),
  eventHeadline: document.querySelector("#eventHeadline"),
  eventSummary: document.querySelector("#eventSummary"),
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
  coverageList: document.querySelector("#coverageList")
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

function getSelectedEvent(stock = getStock()) {
  return stock.events.find((event) => event.id === state.selectedEventId) || stock.events[0];
}

function percent(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function sentimentClass(value) {
  if (value > 0.2) return "positive";
  if (value < -0.2) return "negative";
  return "neutral";
}

function dateLabel(value) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function getAllArticles() {
  return stocks
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
        possibleImpact: `Associated ${state.selectedWindow.toUpperCase()} reaction in the sample: ${percent(event.returns[state.selectedWindow])}. Treat this as correlation research, not causation.`,
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
      <span>${article.source} - ${article.impactLevel} impact - ${article.sentimentLabel}</span>
    `;
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
      <ul class="ai-bullets">
        ${article.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
      </ul>
      <p><strong>Why it matters:</strong> ${article.whyItMatters}</p>
      <p><strong>Possible market impact:</strong> ${article.possibleImpact}</p>
      <div class="news-card-footer">
        <span class="news-meta">${article.sector}</span>
        <a href="${article.url}" target="_blank" rel="noreferrer">Mock article URL</a>
      </div>
    `;
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

function createPriceSeries(stock) {
  const start = new Date("2025-01-01T00:00:00");
  const end = new Date("2025-09-30T00:00:00");
  const eventMap = new Map(stock.events.map((event) => [event.date, event]));
  const points = [];
  let price = stock.basePrice;
  let index = 0;

  for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 5)) {
    const iso = date.toISOString().slice(0, 10);
    const event = eventMap.get(iso);
    const cycle = Math.sin(index / 4.6) * 0.011 + Math.cos(index / 8.1) * 0.007;
    const drift = stock.symbol === "NVDA" ? 0.006 : stock.symbol === "TSLA" ? -0.001 : 0.003;
    const eventShock = event ? event.returns["1d"] / 100 : 0;
    price = Math.max(20, price * (1 + cycle + drift + eventShock * 0.55));
    const volume = 1 + Math.abs(cycle) * 18 + (event ? event.volumeAnomaly : Math.max(0.7, 1 + Math.sin(index / 3) * 0.3));
    points.push({ date: iso, price, volume, event });
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

function drawChart(stock, events) {
  const canvas = els.priceChart;
  const ctx = canvas.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth;
  const cssHeight = canvas.clientHeight;
  canvas.width = Math.floor(cssWidth * pixelRatio);
  canvas.height = Math.floor(cssHeight * pixelRatio);
  ctx.scale(pixelRatio, pixelRatio);

  const points = createPriceSeries(stock);
  state.points = points;

  const pad = { top: 26, right: 24, bottom: 68, left: 58 };
  const chartWidth = cssWidth - pad.left - pad.right;
  const chartHeight = cssHeight - pad.top - pad.bottom;
  const prices = points.map((point) => point.price);
  const minPrice = Math.min(...prices) * 0.96;
  const maxPrice = Math.max(...prices) * 1.04;
  const maxVolume = Math.max(...points.map((point) => point.volume));

  const xFor = (index) => pad.left + (index / (points.length - 1)) * chartWidth;
  const yFor = (price) => pad.top + (1 - (price - minPrice) / (maxPrice - minPrice)) * chartHeight;
  const volumeY = cssHeight - pad.bottom + 45;

  ctx.clearRect(0, 0, cssWidth, cssHeight);
  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  ctx.strokeStyle = "#e6ebf2";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#64748b";
  ctx.font = "12px Inter, system-ui, sans-serif";

  for (let i = 0; i <= 4; i += 1) {
    const y = pad.top + (i / 4) * chartHeight;
    const value = maxPrice - (i / 4) * (maxPrice - minPrice);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(cssWidth - pad.right, y);
    ctx.stroke();
    ctx.fillText(`$${value.toFixed(0)}`, 10, y + 4);
  }

  points.forEach((point, index) => {
    const x = xFor(index);
    const height = (point.volume / maxVolume) * 42;
    ctx.fillStyle = "rgba(15, 118, 110, 0.22)";
    ctx.fillRect(x - 2, volumeY - height, 4, height);
  });

  ctx.beginPath();
  points.forEach((point, index) => {
    const x = xFor(index);
    const y = yFor(point.price);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = stock.chartColor;
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.lineTo(cssWidth - pad.right, cssHeight - pad.bottom);
  ctx.lineTo(pad.left, cssHeight - pad.bottom);
  ctx.closePath();
  const gradient = ctx.createLinearGradient(0, pad.top, 0, cssHeight - pad.bottom);
  gradient.addColorStop(0, `${stock.chartColor}26`);
  gradient.addColorStop(1, `${stock.chartColor}00`);
  ctx.fillStyle = gradient;
  ctx.fill();

  points.forEach((point, index) => {
    if (index % 12 !== 0) return;
    ctx.fillStyle = "#64748b";
    ctx.fillText(point.date.slice(5), xFor(index) - 14, cssHeight - 22);
  });

  events.forEach((event) => {
    const point = matchEventToPoint(points, event.date);
    const index = points.indexOf(point);
    const x = xFor(index);
    const y = yFor(point.price);
    const isSelected = event.id === state.selectedEventId;
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, cssHeight - pad.bottom);
    ctx.strokeStyle = isSelected ? "#111827" : "#cbd5e1";
    ctx.setLineDash([4, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.arc(x, y, isSelected ? 8 : 6, 0, Math.PI * 2);
    ctx.fillStyle = event.sentiment === "Positive" ? "#15803d" : event.sentiment === "Negative" ? "#b42318" : "#b45309";
    ctx.fill();
    ctx.lineWidth = isSelected ? 4 : 2;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
  });
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
        <span class="ticker-change ${sentimentClass(lastEvent.returns[state.selectedWindow])}">${percent(lastEvent.returns[state.selectedWindow])}</span>
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
  const selectedReturn = selected.returns[state.selectedWindow];
  const avgSimilar = similar.length
    ? similar.reduce((sum, event) => sum + event.returns[state.selectedWindow], 0) / similar.length
    : selectedReturn;

  els.marketRegime.textContent = stock.regime;
  els.stockTitle.textContent = `${stock.symbol} - ${stock.name}`;
  els.selectedReturn.textContent = percent(selectedReturn);
  els.selectedReturn.className = sentimentClass(selectedReturn);
  els.selectedReturnLabel.textContent = `${state.selectedWindow.toUpperCase()} associated reaction`;
  els.signalStrength.textContent = `${selected.confidence}/100`;
  els.signalStrengthLabel.textContent = `${selected.sentiment} ${selected.type.toLowerCase()} signal`;
  els.volumeAnomaly.textContent = `${selected.volumeAnomaly.toFixed(1)}x`;
  els.similarCount.textContent = String(similar.length);
  els.similarSummary.textContent = `${percent(avgSimilar)} avg ${state.selectedWindow.toUpperCase()} reaction`;
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

  Object.entries(selected.returns).forEach(([windowLabel, value]) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${windowLabel.toUpperCase()}</td>
      <td class="${sentimentClass(value)}">${percent(value)}</td>
    `;
    els.reactionRows.appendChild(row);
  });
}

function renderEvents(events) {
  els.eventCount.textContent = `${events.length} event${events.length === 1 ? "" : "s"}`;
  els.eventList.innerHTML = "";

  events.forEach((event) => {
    const value = event.returns[state.selectedWindow];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `event-button ${event.id === state.selectedEventId ? "is-active" : ""}`;
    button.innerHTML = `
      <span class="event-date">${dateLabel(event.date)}</span>
      <span>
        <span class="event-headline">${event.headline}</span>
        <span class="event-meta">${event.type} - ${event.sentiment} - ${event.volumeAnomaly.toFixed(1)}x volume</span>
      </span>
      <span class="return-value ${sentimentClass(value)}">${percent(value)}</span>
    `;
    button.addEventListener("click", () => {
      state.selectedEventId = event.id;
      render();
    });
    els.eventList.appendChild(button);
  });
}

function findSimilarEvents(selected) {
  return stocks
    .flatMap((stock) => stock.events.map((event) => ({ ...event, symbol: stock.symbol })))
    .filter((event) => event.id !== selected.id && event.type === selected.type && event.sentiment === selected.sentiment)
    .sort((a, b) => Math.abs(b.returns[state.selectedWindow]) - Math.abs(a.returns[state.selectedWindow]));
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
    const value = event.returns[state.selectedWindow];
    item.className = "similar-item";
    item.innerHTML = `
      <h4>${event.symbol} - ${event.headline}</h4>
      <p>${dateLabel(event.date)} - ${event.source}</p>
      <div class="similar-row">
        <span>${event.surprise}</span>
        <strong class="${sentimentClass(value)}">${percent(value)}</strong>
      </div>
    `;
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

function handleCanvasClick(event) {
  const stock = getStock();
  const events = getEvents(stock);
  const rect = els.priceChart.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const points = state.points.length ? state.points : createPriceSeries(stock);
  const padLeft = 58;
  const padRight = 24;
  const chartWidth = rect.width - padLeft - padRight;

  const hit = events
    .map((news) => {
      const point = matchEventToPoint(points, news.date);
      const index = points.indexOf(point);
      const markerX = padLeft + (index / (points.length - 1)) * chartWidth;
      return { news, distance: Math.abs(markerX - x) };
    })
    .sort((a, b) => a.distance - b.distance)[0];

  if (hit && hit.distance < 22) {
    state.selectedEventId = hit.news.id;
    render();
  }
}

function render() {
  const stock = getStock();
  let events = getEvents(stock);
  if (!events.some((event) => event.id === state.selectedEventId)) {
    state.selectedEventId = events[0]?.id || stock.events[0].id;
  }

  const selected = getSelectedEvent(stock);
  const similar = findSimilarEvents(selected);

  renderProductNavigation();
  populateStaticSelects();
  renderTickers();
  renderMetrics(stock, selected, similar);
  if (state.activePage === "dashboard") {
    drawChart(stock, events);
  }
  renderEventDetail(selected);
  renderEvents(events);
  renderSimilarEvents(selected, similar);
  renderDashboardSystem();
  renderNewsFeed();
  renderWatchlists();
  renderAlerts();
  renderCalendar();
  renderFilings();
  renderSources();
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
    render();
  });
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
els.exportButton.addEventListener("click", () => downloadAnalysis(getStock(), getSelectedEvent()));
window.addEventListener("resize", render);

render();
