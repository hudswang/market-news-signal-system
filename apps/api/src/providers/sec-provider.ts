import { filings } from "../data/mock-data";

export class MockSecProvider {
  async fetchFilings(ticker?: string) {
    return ticker ? filings.filter((filing) => filing.ticker === ticker) : filings;
  }
}
