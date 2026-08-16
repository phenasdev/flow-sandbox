import { describe, expect, it } from "vitest";
import { truncate } from "../src/truncate.js";

describe("truncate", () => {
  it("returns input that fits within the maximum length unchanged", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });

  it("replaces the final character with an ellipsis when input exceeds the maximum", () => {
    expect(truncate("abcdef", 4)).toBe("abc…");
  });

  it("rejects a maximum length below one", () => {
    expect(() => truncate("hello", 0)).toThrow(RangeError);
  });
});
