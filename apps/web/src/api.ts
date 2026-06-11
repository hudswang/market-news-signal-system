import type {
  AlertEvent,
  AlertRule,
  ApiResponse,
  DashboardSummary,
  EconomicEvent,
  Filing,
  NewsArticle,
  NewsSource,
  PaginatedResponse,
  Ticker,
  Watchlist
} from "@market-news/shared";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

async function request<T>(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem("market-news-token");
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers
    }
  });
  if (!response.ok) throw new Error((await response.json()).error?.message ?? "Request failed");
  return response.json() as Promise<T>;
}

export const api = {
  signup: (body: { email: string; name: string; password: string }) =>
    request<ApiResponse<{ token: string; user: { id: string; email: string; name: string } }>>("/api/auth/signup", { method: "POST", body: JSON.stringify(body) }),
  login: (body: { email: string; password: string }) =>
    request<ApiResponse<{ token: string; user: { id: string; email: string; name: string } }>>("/api/auth/login", { method: "POST", body: JSON.stringify(body) }),
  profile: () => request<ApiResponse<{ id: string; email: string; name: string }>>("/api/auth/profile"),
  tickers: () => request<ApiResponse<Ticker[]>>("/api/tickers"),
  dashboard: (watchlistId?: string) => request<ApiResponse<DashboardSummary>>(`/api/dashboard${watchlistId ? `?watchlistId=${watchlistId}` : ""}`),
  news: (query = "") => request<PaginatedResponse<NewsArticle>>(`/api/news${query}`),
  watchlists: () => request<ApiResponse<Watchlist[]>>("/api/watchlists"),
  createWatchlist: (name: string) => request<ApiResponse<Watchlist>>("/api/watchlists", { method: "POST", body: JSON.stringify({ name }) }),
  alerts: () => request<ApiResponse<AlertRule[]>>("/api/alerts"),
  alertEvents: () => request<ApiResponse<AlertEvent[]>>("/api/alerts/events"),
  calendar: () => request<ApiResponse<EconomicEvent[]>>("/api/economic-calendar"),
  filings: () => request<ApiResponse<Filing[]>>("/api/filings"),
  sources: () => request<ApiResponse<NewsSource[]>>("/api/sources")
};
