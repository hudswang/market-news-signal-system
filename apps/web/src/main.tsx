import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import type { AlertRule, DashboardSummary, EconomicEvent, Filing, NewsArticle, NewsSource, Watchlist } from "@market-news/shared";
import { api } from "./api";
import "./styles.css";

type Page = "login" | "signup" | "dashboard" | "news" | "article" | "watchlists" | "alerts" | "calendar" | "filings" | "sources";

function useAsync<T>(loader: () => Promise<T>, deps: React.DependencyList) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    loader()
      .then((value) => alive && setData(value))
      .catch((err: Error) => alive && setError(err.message))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, deps);

  return { data, error, loading };
}

function StateBlock({ loading, error, empty }: { loading: boolean; error?: string | null; empty?: boolean }) {
  if (loading) return <div className="card text-sm text-muted">Loading market data...</div>;
  if (error) return <div className="card text-sm text-red-700">Error: {error}</div>;
  if (empty) return <div className="card text-sm text-muted">No matching records yet.</div>;
  return null;
}

function AuthPage({ mode, onAuthed }: { mode: "login" | "signup"; onAuthed: () => void }) {
  const [email, setEmail] = useState("demo@market.local");
  const [name, setName] = useState("Demo Researcher");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState<string | null>(null);
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const result = mode === "signup" ? await api.signup({ email, name, password }) : await api.login({ email, password });
      localStorage.setItem("market-news-token", result.data.token);
      onAuthed();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    }
  }
  return (
    <form onSubmit={submit} className="mx-auto mt-20 grid w-full max-w-md gap-3 rounded-lg bg-white p-6 shadow">
      <h1 className="text-2xl font-black">{mode === "signup" ? "Create account" : "Log in"}</h1>
      {mode === "signup" && <input className="rounded border p-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />}
      <input className="rounded border p-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="rounded border p-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      {error && <p className="text-sm text-red-700">{error}</p>}
      <button className="rounded bg-blue-600 px-4 py-2 font-bold text-white">{mode === "signup" ? "Sign up" : "Log in"}</button>
    </form>
  );
}

function Dashboard() {
  const { data, loading, error } = useAsync(() => api.dashboard().then((res) => res.data), []);
  if (!data) return <StateBlock loading={loading} error={error} />;
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-4">
        <Metric title="Trending tickers" value={data.trendingTickers.length} />
        <Metric title="High impact" value={data.highImpactEvents.length} />
        <Metric title="Breaking news" value={data.breakingNews.length} />
        <Metric title="Watchlist news" value={data.watchlistNews.length} />
      </div>
      <CardGrid title="Latest breaking news" articles={data.breakingNews} />
      <CardGrid title="High-impact events" articles={data.highImpactEvents} />
    </div>
  );
}

function Metric({ title, value }: { title: string; value: number | string }) {
  return (
    <div className="card">
      <p className="text-xs font-black uppercase text-muted">{title}</p>
      <strong className="text-3xl">{value}</strong>
    </div>
  );
}

function CardGrid({ title, articles }: { title: string; articles: NewsArticle[] }) {
  return (
    <section className="grid gap-3">
      <h2 className="text-xl font-black">{title}</h2>
      <div className="grid gap-3 xl:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <article className="card grid gap-2">
      <div className="flex flex-wrap justify-between gap-2 text-xs font-bold text-muted">
        <span>{article.source}</span>
        <span>{new Date(article.publishedAt).toLocaleString()}</span>
      </div>
      <h3 className="text-lg font-black">{article.title}</h3>
      <p className="text-sm text-muted">{article.summary}</p>
      <div className="flex flex-wrap gap-2">
        {article.tickers.map((ticker) => <span className="pill" key={ticker}>{ticker}</span>)}
        <span className="pill">{article.sentimentLabel} {article.sentimentScore}</span>
        <span className="pill">{article.impactLevel} impact</span>
      </div>
      <ul className="list-disc pl-5 text-sm text-muted">
        {article.aiBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
    </article>
  );
}

function NewsFeed() {
  const [q, setQ] = useState("");
  const query = useMemo(() => (q ? `?q=${encodeURIComponent(q)}` : ""), [q]);
  const { data, loading, error } = useAsync(() => api.news(query), [query]);
  return (
    <div className="grid gap-4">
      <input className="rounded border bg-white p-3" placeholder="Search keyword, ticker, source" value={q} onChange={(e) => setQ(e.target.value)} />
      <StateBlock loading={loading} error={error} empty={data?.data.length === 0} />
      {data && <CardGrid title={`News feed (${data.meta.total})`} articles={data.data} />}
    </div>
  );
}

function Watchlists() {
  const { data, loading, error } = useAsync(() => api.watchlists().then((res) => res.data), []);
  return <ListPage title="Watchlists" loading={loading} error={error} items={data} render={(item: Watchlist) => `${item.name}: ${item.tickers.join(", ")}`} />;
}

function Alerts() {
  const { data, loading, error } = useAsync(() => api.alerts().then((res) => res.data), []);
  return <ListPage title="Alert Rules" loading={loading} error={error} items={data} render={(item: AlertRule) => `${item.ticker} - ${item.type} - threshold ${item.threshold}`} />;
}

function Calendar() {
  const { data, loading, error } = useAsync(() => api.calendar().then((res) => res.data), []);
  return <ListPage title="Economic Calendar" loading={loading} error={error} items={data} render={(item: EconomicEvent) => `${item.eventName} - ${item.country} - ${new Date(item.scheduledAt).toLocaleString()}`} />;
}

function Filings() {
  const { data, loading, error } = useAsync(() => api.filings().then((res) => res.data), []);
  return <ListPage title="SEC Filings" loading={loading} error={error} items={data} render={(item: Filing) => `${item.ticker} ${item.filingType} - ${item.summary}`} />;
}

function Sources() {
  const { data, loading, error } = useAsync(() => api.sources().then((res) => res.data), []);
  return <ListPage title="Sources/Admin" loading={loading} error={error} items={data} render={(item: NewsSource) => `${item.name} - ${item.category} - reliability ${item.reliabilityScore}/100 - ${item.enabled ? "enabled" : "disabled"}`} />;
}

function ListPage<T>({ title, loading, error, items, render }: { title: string; loading: boolean; error: string | null; items: T[] | null; render: (item: T) => string }) {
  return (
    <section className="grid gap-3">
      <h2 className="text-xl font-black">{title}</h2>
      <StateBlock loading={loading} error={error} empty={items?.length === 0} />
      {items?.map((item, index) => <div className="card text-sm" key={index}>{render(item)}</div>)}
    </section>
  );
}

function App() {
  const [page, setPage] = useState<Page>(localStorage.getItem("market-news-token") ? "dashboard" : "login");
  const pages: Array<[Page, string]> = [
    ["dashboard", "Impact Dashboard"],
    ["news", "Signal Feed"],
    ["watchlists", "Watchlists"],
    ["alerts", "Alerts"],
    ["calendar", "Economic Calendar"],
    ["filings", "SEC Filings"],
    ["sources", "Sources/Admin"]
  ];

  if (page === "login" || page === "signup") return <AuthPage mode={page} onAuthed={() => setPage("dashboard")} />;

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="bg-slate-950 p-5 text-white">
        <h1 className="mb-1 text-xl font-black">Stock News Impact</h1>
        <p className="mb-6 text-sm text-slate-400">Backend-ready signal research terminal</p>
        <nav className="grid gap-2">
          {pages.map(([key, label]) => (
            <button key={key} className={`nav-button ${page === key ? "nav-button-active" : ""}`} onClick={() => setPage(key)}>{label}</button>
          ))}
        </nav>
      </aside>
      <main className="grid content-start gap-5 p-5">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase text-teal-700">Live-ready mock providers</p>
            <h2 className="text-3xl font-black">{pages.find(([key]) => key === page)?.[1]}</h2>
          </div>
          <button className="rounded border bg-white px-3 py-2 text-sm font-bold" onClick={() => { localStorage.removeItem("market-news-token"); setPage("login"); }}>Log out</button>
        </header>
        {page === "dashboard" && <Dashboard />}
        {page === "news" && <NewsFeed />}
        {page === "watchlists" && <Watchlists />}
        {page === "alerts" && <Alerts />}
        {page === "calendar" && <Calendar />}
        {page === "filings" && <Filings />}
        {page === "sources" && <Sources />}
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
