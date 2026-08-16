import { describe, expect, it } from "vitest";
import { percent } from "../src/percent.js";

describe("percent", () => {
  it("formats a ratio with the requested decimal places", () => {
    expect(percent(0.1234, 1)).toBe("12.3%");
  });

  it("rounds to zero and multiple decimal places", () => {
    expect(percent(0.1267, 0)).toBe("13%");
    expect(percent(0.1267, 2)).toBe("12.67%");
  });

  it("rejects ratios outside the unit interval", () => {
    expect(() => percent(-0.01, 1)).toThrow(RangeError);
    expect(() => percent(1.01, 1)).toThrow(RangeError);
  });

  it("formats one million ratios in under 20ms", () => {
    const started = performance.now();
    let formatted = "";
    for (let index = 0; index < 1_000_000; index++) {
      formatted = percent(index / 1_000_000, 1);
    }

    expect(formatted).toBe("100.0%");
    expect(performance.now() - started).toBeLessThan(20);
  });
});
