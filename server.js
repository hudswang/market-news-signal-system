const fs = require("fs");
const http = require("http");
const path = require("path");
const { URL } = require("url");

const root = __dirname;
const port = Number(process.env.PORT || 4182);
const trackedStocks = [
  { symbol: "NVDA", aliases: ["NVIDIA", "NVDA"] },
  { symbol: "AAPL", aliases: ["Apple", "AAPL"] },
  { symbol: "TSLA", aliases: ["Tesla", "TSLA"] },
  { symbol: "JPM", aliases: ["JPMorgan", "JPM", "JPMorgan Chase"] }
];

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".md", "text/markdown; charset=utf-8"]
]);

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store"
  });
  res.end(body);
}

function companyCore(name) {
  return String(name || "")
    .replace(/\b(Corp\.|Inc\.|Co\.|Corporation|Chase|&)\b/g, "")
    .trim();
}

function gdeltUrl(symbol, name) {
  const query = symbol
    ? `("${symbol}" OR "${companyCore(name)}") (stock OR shares OR earnings OR market OR revenue OR outlook)`
    : `(${trackedStocks.flatMap((stock) => stock.aliases.map((alias) => `"${alias}"`)).join(" OR ")}) (stock OR shares OR earnings OR market OR revenue OR outlook)`;
  const params = new URLSearchParams({
    query,
    mode: "ArtList",
    format: "json",
    maxrecords: "8",
    sort: "HybridRel"
  });
  return `https://api.gdeltproject.org/api/v2/doc/doc?${params.toString()}`;
}

function matchArticleSymbol(article, fallbackSymbol) {
  if (fallbackSymbol) return fallbackSymbol;
  const text = [article.title, article.description, article.url].filter(Boolean).join(" ").toLowerCase();
  const match = trackedStocks.find((stock) => stock.aliases.some((alias) => text.includes(alias.toLowerCase())));
  return match?.symbol || "";
}

function decodeXml(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value) {
  return decodeXml(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function readTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeXml(match[1]).trim() : "";
}

function parseGoogleNewsRss(xml, stock) {
  const itemBlocks = String(xml).match(/<item>[\s\S]*?<\/item>/gi) || [];
  return itemBlocks.slice(0, 8).map((block) => ({
    title: stripHtml(readTag(block, "title")),
    url: stripHtml(readTag(block, "link")),
    description: stripHtml(readTag(block, "description")),
    pubDate: stripHtml(readTag(block, "pubDate")),
    domain: stripHtml(readTag(block, "source")) || "Google News RSS",
    matchedSymbol: stock.symbol
  }));
}

function googleNewsUrl(stock) {
  const query = `${stock.aliases[0]} stock`;
  const params = new URLSearchParams({
    q: query,
    hl: "en-US",
    gl: "US",
    ceid: "US:en"
  });
  return `https://news.google.com/rss/search?${params.toString()}`;
}

async function fetchGoogleNewsArticles(symbol, signal) {
  const selectedStocks = symbol ? trackedStocks.filter((stock) => stock.symbol === symbol) : trackedStocks;
  const batches = await Promise.all(
    selectedStocks.map(async (stock) => {
      try {
        const response = await fetch(googleNewsUrl(stock), { signal });
        if (!response.ok) return [];
        return parseGoogleNewsRss(await response.text(), stock);
      } catch {
        return [];
      }
    })
  );
  return batches.flat();
}

async function handleLiveNews(reqUrl, res) {
  const symbol = (reqUrl.searchParams.get("symbol") || "").toUpperCase();
  const name = reqUrl.searchParams.get("name") || symbol;
  if (symbol && !/^[A-Z.]{1,8}$/.test(symbol)) {
    send(res, 400, JSON.stringify({ articles: [], error: "Invalid symbol" }), "application/json; charset=utf-8");
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);
  try {
    const response = await fetch(gdeltUrl(symbol, name), { signal: controller.signal });
    if (!response.ok) {
      const fallbackArticles = await fetchGoogleNewsArticles(symbol);
      send(res, 200, JSON.stringify({ articles: fallbackArticles }), "application/json; charset=utf-8");
      return;
    }
    const payload = await response.json();
    let articles = (payload.articles || [])
      .map((article) => ({ ...article, matchedSymbol: matchArticleSymbol(article, symbol) }))
      .filter((article) => Boolean(article.matchedSymbol));
    if (!articles.length) {
      articles = await fetchGoogleNewsArticles(symbol, controller.signal);
    }
    send(res, 200, JSON.stringify({ articles }), "application/json; charset=utf-8");
  } catch {
    const fallbackArticles = await fetchGoogleNewsArticles(symbol);
    send(
      res,
      fallbackArticles.length ? 200 : 502,
      JSON.stringify({ articles: fallbackArticles, error: fallbackArticles.length ? undefined : "Live provider request failed" }),
      "application/json; charset=utf-8"
    );
  } finally {
    clearTimeout(timeout);
  }
}

function serveStatic(reqUrl, res) {
  const requestedPath = reqUrl.pathname === "/" ? "/index.html" : reqUrl.pathname;
  const filePath = path.normalize(path.join(root, requestedPath));
  if (!filePath.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(res, 404, "Not found");
      return;
    }
    send(res, 200, data, mimeTypes.get(path.extname(filePath)) || "application/octet-stream");
  });
}

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  if (reqUrl.pathname === "/api/live-news") {
    handleLiveNews(reqUrl, res);
    return;
  }
  serveStatic(reqUrl, res);
});

server.listen(port, () => {
  console.log(`Stock news impact app running at http://localhost:${port}/`);
});
