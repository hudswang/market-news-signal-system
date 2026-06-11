import { Router } from "express";
import { z } from "zod";
import { articles, alertRules } from "../../data/mock-data";
import { asyncHandler } from "../../lib/async-handler";
import { ok } from "../../lib/http";
import { requireAuth } from "../../middleware/auth";
import { evaluateAlertRule } from "./alert-evaluator";

const alertSchema = z.object({
  ticker: z.string().min(1).max(8).transform((value) => value.toUpperCase()),
  type: z.enum(["breaking_news", "negative_sentiment", "high_impact", "earnings", "sec_filing", "unusual_news_volume"]),
  threshold: z.coerce.number().min(1).max(100).default(75)
});

export const alertsRoutes = Router();
alertsRoutes.use(requireAuth);

alertsRoutes.get("/", asyncHandler(async (_req, res) => ok(res, alertRules)));

alertsRoutes.post(
  "/",
  asyncHandler(async (req, res) => {
    const input = alertSchema.parse(req.body);
    const rule = { id: `rule-${Date.now()}`, ticker: input.ticker, type: input.type, threshold: input.threshold, active: true };
    alertRules.push(rule);
    ok(res.status(201), rule);
  })
);

alertsRoutes.get(
  "/events",
  asyncHandler(async (_req, res) => {
    const events = alertRules.flatMap((rule) =>
      evaluateAlertRule(rule, articles).map((article) => ({
        id: `event-${rule.id}-${article.id}`,
        ruleId: rule.id,
        articleId: article.id,
        message: `${rule.ticker} ${rule.type} matched: ${article.title}`,
        triggeredAt: new Date().toISOString()
      }))
    );
    ok(res, events);
  })
);
