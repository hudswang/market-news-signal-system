import { PrismaClient } from "@prisma/client";
import { articles, economicEvents, filings, sources, tickers } from "../src/data/mock-data";
import { hashPassword } from "../src/lib/auth";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@market.local" },
    update: {},
    create: {
      id: "demo-user",
      email: "demo@market.local",
      name: "Demo Researcher",
      passwordHash: await hashPassword("password123")
    }
  });

  for (const ticker of tickers) {
    await prisma.ticker.upsert({
      where: { symbol: ticker.symbol },
      update: ticker,
      create: ticker
    });
  }

  for (const source of sources) {
    await prisma.newsSource.upsert({
      where: { name: source.name },
      update: { category: source.category, reliabilityScore: source.reliabilityScore, enabled: source.enabled },
      create: { id: source.id, name: source.name, category: source.category, reliabilityScore: source.reliabilityScore, enabled: source.enabled }
    });
  }

  for (const article of articles) {
    const source = await prisma.newsSource.findUniqueOrThrow({ where: { name: article.source } });
    await prisma.newsArticle.upsert({
      where: { id: article.id },
      update: {},
      create: {
        id: article.id,
        title: article.title,
        sourceUrl: article.sourceUrl,
        publishedAt: new Date(article.publishedAt),
        summary: article.summary,
        aiBullets: article.aiBullets,
        whyItMatters: article.whyItMatters,
        possibleMarketImpact: article.possibleMarketImpact,
        sentimentLabel: article.sentimentLabel,
        sentimentScore: article.sentimentScore,
        category: article.category,
        impactLevel: article.impactLevel,
        sourceId: source.id,
        mentions: {
          create: article.tickers.map((symbol) => ({ ticker: { connect: { symbol } } }))
        }
      }
    });
  }

  await prisma.watchlist.upsert({
    where: { id: "wl-demo-ai" },
    update: {},
    create: {
      id: "wl-demo-ai",
      name: "AI Infrastructure",
      userId: user.id,
      tickers: { create: [{ symbol: "NVDA" }, { symbol: "AAPL" }] }
    }
  });

  await prisma.alertRule.upsert({
    where: { id: "rule-demo-nvda" },
    update: {},
    create: { id: "rule-demo-nvda", userId: user.id, ticker: "NVDA", type: "high_impact", threshold: 80, active: true }
  });

  for (const event of economicEvents) {
    await prisma.economicEvent.upsert({
      where: { id: event.id },
      update: {},
      create: { ...event, scheduledAt: new Date(event.scheduledAt) }
    });
  }

  for (const filing of filings) {
    const ticker = await prisma.ticker.findUniqueOrThrow({ where: { symbol: filing.ticker } });
    await prisma.filing.upsert({
      where: { id: filing.id },
      update: {},
      create: {
        id: filing.id,
        filingType: filing.filingType,
        companyName: filing.companyName,
        tickerId: ticker.id,
        filedAt: new Date(filing.filedAt),
        url: filing.url,
        summary: filing.summary
      }
    });
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
