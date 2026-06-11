import { Queue } from "bullmq";
import { env } from "../config/env";

const connection = { url: env.REDIS_URL };

export const marketNewsQueue = new Queue("fetch-market-news", { connection });
export const sentimentQueue = new Queue("analyze-sentiment", { connection });
export const summariesQueue = new Queue("generate-summaries", { connection });
export const alertsQueue = new Queue("evaluate-alert-rules", { connection });
export const calendarQueue = new Queue("fetch-economic-calendar", { connection });
export const filingsQueue = new Queue("fetch-filings", { connection });

export async function scheduleMockJobs() {
  await marketNewsQueue.add("mock-fetch", {}, { repeat: { pattern: "*/15 * * * *" } });
  await sentimentQueue.add("mock-sentiment", {}, { repeat: { pattern: "*/20 * * * *" } });
  await summariesQueue.add("mock-summary", {}, { repeat: { pattern: "*/25 * * * *" } });
  await alertsQueue.add("mock-alerts", {}, { repeat: { pattern: "*/10 * * * *" } });
  await calendarQueue.add("mock-calendar", {}, { repeat: { pattern: "0 * * * *" } });
  await filingsQueue.add("mock-filings", {}, { repeat: { pattern: "*/30 * * * *" } });
}
