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

const state = {
  selectedSymbol: "NVDA",
  selectedEventId: "nvda-earnings-beat",
  selectedWindow: "1d",
  filterType: "All",
  bullishOnly: false,
  points: []
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
  exportButton: document.querySelector("#exportButton")
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

  renderTickers();
  renderMetrics(stock, selected, similar);
  drawChart(stock, events);
  renderEventDetail(selected);
  renderEvents(events);
  renderSimilarEvents(selected, similar);
}

els.tickerSearch.addEventListener("input", renderTickers);
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
els.priceChart.addEventListener("click", handleCanvasClick);
els.exportButton.addEventListener("click", () => downloadAnalysis(getStock(), getSelectedEvent()));
window.addEventListener("resize", render);

render();
