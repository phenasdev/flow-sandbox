import { describe, expect, it } from "vitest";
import { formatRange } from "../src/formatRange.js";

describe("formatRange", () => {
  it("clamps the value before rendering the range", () => {
    expect(formatRange(15, 0, 10)).toBe("10 (of 0–10)");
  });

  it("truncates rendered ranges to 32 characters", () => {
    expect(formatRange(123456789, -123456789, 987654321)).toBe(
      "123456789 (of -123456789–987654…",
    );
  });

  it("rejects an inverted range", () => {
    expect(() => formatRange(5, 10, 0)).toThrow(RangeError);
  });
});
