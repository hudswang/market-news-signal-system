import { articles } from "../data/mock-data";
import type { NewsArticle } from "@market-news/shared";

export type NewsProvider = {
  fetchLatest(): Promise<NewsArticle[]>;
};

export class MockNewsProvider implements NewsProvider {
  async fetchLatest() {
    return articles;
  }
}
