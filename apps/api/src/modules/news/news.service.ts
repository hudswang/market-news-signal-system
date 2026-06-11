import { articles } from "../../data/mock-data";
import type { NewsArticle, PaginatedResponse } from "@market-news/shared";

export type NewsQuery = {
  page?: number;
  pageSize?: number;
  q?: string;
  ticker?: string;
  sector?: string;
  source?: string;
  sentiment?: string;
  category?: string;
  from?: string;
  to?: string;
};

export function listNews(query: NewsQuery): PaginatedResponse<NewsArticle> {
  const page = Math.max(1, Number(query.page ?? 1));
  const pageSize = Math.min(50, Math.max(1, Number(query.pageSize ?? 10)));
  const q = query.q?.toLowerCase();
  const from = query.from ? new Date(query.from) : null;
  const to = query.to ? new Date(query.to) : null;

  const filtered = articles.filter((article) => {
    const published = new Date(article.publishedAt);
    const text = [article.title, article.summary, article.source, article.category, article.tickers.join(" ")].join(" ").toLowerCase();
    return (
      (!q || text.includes(q)) &&
      (!query.ticker || article.tickers.includes(query.ticker.toUpperCase())) &&
      (!query.sector || article.sector === query.sector) &&
      (!query.source || article.source === query.source) &&
      (!query.sentiment || article.sentimentLabel === query.sentiment) &&
      (!query.category || article.category === query.category) &&
      (!from || published >= from) &&
      (!to || published <= to)
    );
  });

  const start = (page - 1) * pageSize;
  return {
    data: filtered.slice(start, start + pageSize),
    meta: {
      page,
      pageSize,
      total: filtered.length,
      totalPages: Math.max(1, Math.ceil(filtered.length / pageSize))
    }
  };
}
