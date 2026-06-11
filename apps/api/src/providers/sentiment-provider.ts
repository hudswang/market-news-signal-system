import type { SentimentLabel } from "@market-news/shared";

const positive = ["beat", "raised", "cleared", "growth", "strong", "improved", "positive"];
const negative = ["probe", "risk", "pressured", "miss", "weighed", "negative", "investigation"];

export function analyzeSentiment(text: string): { label: SentimentLabel; score: number } {
  const normalized = text.toLowerCase();
  const pos = positive.filter((word) => normalized.includes(word)).length;
  const neg = negative.filter((word) => normalized.includes(word)).length;
  const raw = Math.max(-1, Math.min(1, (pos - neg) / 3));
  const label: SentimentLabel = raw > 0.15 ? "positive" : raw < -0.15 ? "negative" : "neutral";
  return { label, score: Number(raw.toFixed(2)) };
}
