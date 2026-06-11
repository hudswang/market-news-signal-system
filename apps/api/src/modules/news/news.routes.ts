import { Router } from "express";
import { z } from "zod";
import { asyncHandler } from "../../lib/async-handler";
import { listNews } from "./news.service";

const querySchema = z.object({
  page: z.coerce.number().optional(),
  pageSize: z.coerce.number().optional(),
  q: z.string().optional(),
  ticker: z.string().optional(),
  sector: z.string().optional(),
  source: z.string().optional(),
  sentiment: z.string().optional(),
  category: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional()
});

export const newsRoutes = Router();

newsRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    res.json(listNews(querySchema.parse(req.query)));
  })
);
