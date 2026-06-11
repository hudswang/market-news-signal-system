import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(4000),
  WEB_ORIGIN: z.string().default("http://localhost:5173"),
  DATABASE_URL: z.string().default("postgresql://market:market@localhost:5432/market_news?schema=public"),
  REDIS_URL: z.string().default("redis://localhost:6379"),
  JWT_SECRET: z.string().min(16).default("development-secret-change-me"),
  JWT_EXPIRES_IN: z.string().default("7d")
});

export const env = envSchema.parse(process.env);
