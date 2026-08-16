import { describe, expect, it } from "vitest";
import { headline } from "../src/headline.js";

describe("headline", () => {
  it("title-cases the input before truncating it", () => {
    expect(headline("hello world", 8)).toBe("Hello W…");
  });

  it("propagates titleCase range errors unchanged", () => {
    expect(() => headline("", 8)).toThrow(
      new RangeError("input must not be empty"),
    );
  });

  it("propagates truncate range errors unchanged", () => {
    expect(() => headline("hello world", 0)).toThrow(
      new RangeError("max must be at least 1"),
    );
  });
});
