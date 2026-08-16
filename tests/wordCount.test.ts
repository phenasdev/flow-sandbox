import { describe, expect, it } from "vitest";
import { wordCount } from "../src/wordCount.js";

describe("wordCount", () => {
  it("counts words separated by whitespace", () => {
    expect(wordCount("one two three")).toBe(3);
  });

  it("returns zero for whitespace-only input", () => {
    expect(wordCount(" \t\n ")).toBe(0);
  });

  it("ignores leading and trailing whitespace", () => {
    expect(wordCount("  one\ttwo  ")).toBe(2);
  });
});
