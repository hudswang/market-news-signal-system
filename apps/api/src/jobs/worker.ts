import { Worker } from "bullmq";
import { env } from "../config/env";
import { evaluateAlertRule } from "../modules/alerts/alert-evaluator";
import { articles, alertRules } from "../data/mock-data";
import { MockNewsProvider } from "../providers/news-provider";
import { MockCalendarProvider } from "../providers/calendar-provider";
import { MockSecProvider } from "../providers/sec-provider";

const connection = { url: env.REDIS_URL };

new Worker("fetch-market-news", async () => new MockNewsProvider().fetchLatest(), { connection });
new Worker("fetch-economic-calendar", async () => new MockCalendarProvider().fetchEvents(), { connection });
new Worker("fetch-filings", async () => new MockSecProvider().fetchFilings(), { connection });
new Worker("evaluate-alert-rules", async () => alertRules.flatMap((rule) => evaluateAlertRule(rule, articles)), { connection });

console.log("Market news workers started");
