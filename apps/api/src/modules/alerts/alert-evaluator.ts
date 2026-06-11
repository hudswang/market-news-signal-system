import type { AlertRule, NewsArticle } from "@market-news/shared";

export function evaluateAlertRule(rule: AlertRule, articles: NewsArticle[]) {
  return articles.filter((article) => {
    if (!article.tickers.includes(rule.ticker)) return false;
    if (rule.type === "negative_sentiment") return article.sentimentLabel === "negative";
    if (rule.type === "high_impact") return article.impactLevel === "high";
    if (rule.type === "earnings") return article.category === "earnings";
    if (rule.type === "unusual_news_volume") return article.impactLevel === "high" || Math.abs(article.sentimentScore) >= rule.threshold / 100;
    if (rule.type === "breaking_news") return true;
    return false;
  });
}
