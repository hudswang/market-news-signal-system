export type AiSummary = {
  bullets: string[];
  whyItMatters: string;
  possibleMarketImpact: string;
};

export type AiProvider = {
  summarize(input: { title: string; summary: string; tickers: string[] }): Promise<AiSummary>;
};

export class MockAiProvider implements AiProvider {
  async summarize(input: { title: string; summary: string; tickers: string[] }) {
    return {
      bullets: [input.title, input.summary, `Mentioned tickers: ${input.tickers.join(", ")}`].slice(0, 4),
      whyItMatters: "This mock summary identifies the business driver and its ticker-level relevance.",
      possibleMarketImpact: "Treat as directional research until real price, volume, and macro context are attached."
    };
  }
}
