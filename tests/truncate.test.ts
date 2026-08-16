import { describe, expect, it } from "vitest";
import { truncate } from "../src/truncate.js";

describe("truncate", () => {
  it("returns input that fits within the maximum length unchanged", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });
});
