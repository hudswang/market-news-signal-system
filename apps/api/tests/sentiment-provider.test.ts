import { describe, expect, it } from "vitest";
import { analyzeSentiment } from "../src/providers/sentiment-provider";

describe("analyzeSentiment", () => {
  it("labels positive market language", () => {
    expect(analyzeSentiment("earnings beat and growth improved").label).toBe("positive");
  });

  it("labels negative market language", () => {
    expect(analyzeSentiment("probe risk pressured estimates").label).toBe("negative");
  });
});
