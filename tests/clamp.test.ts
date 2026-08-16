import { describe, expect, it } from "vitest";
import { clamp } from "../src/clamp.js";

describe("clamp", () => {
  it("returns the value when it sits inside the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("returns the lower bound when the value is below it", () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });

  it("returns the upper bound when the value is above it", () => {
    expect(clamp(42, 0, 10)).toBe(10);
  });

  it("rejects an inverted range", () => {
    expect(() => clamp(1, 10, 0)).toThrow(RangeError);
  });
});
