import { describe, expect, it } from "vitest";
import { articles } from "../src/data/mock-data";
import { evaluateAlertRule } from "../src/modules/alerts/alert-evaluator";

describe("evaluateAlertRule", () => {
  it("matches high-impact ticker news", () => {
    const matches = evaluateAlertRule({ id: "r1", ticker: "NVDA", type: "high_impact", threshold: 80, active: true }, articles);
    expect(matches.length).toBeGreaterThan(0);
    expect(matches.every((article) => article.tickers.includes("NVDA"))).toBe(true);
  });

  it("matches negative sentiment news", () => {
    const matches = evaluateAlertRule({ id: "r2", ticker: "TSLA", type: "negative_sentiment", threshold: 60, active: true }, articles);
    expect(matches[0]?.sentimentLabel).toBe("negative");
  });
});
