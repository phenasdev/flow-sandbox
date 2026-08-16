import { describe, expect, it } from "vitest";
import { titleCase } from "../src/titleCase.js";

describe("titleCase", () => {
  it("capitalises the first letter of each word", () => {
    expect(titleCase("hello world")).toBe("Hello World");
  });

  it("preserves runs of spaces between words", () => {
    expect(titleCase("HELLO   world")).toBe("Hello   World");
  });

  it("preserves whitespace separators", () => {
    expect(titleCase("HELLO\tworld")).toBe("Hello\tWorld");
  });

  it("rejects an empty string", () => {
    expect(() => titleCase("")).toThrow(RangeError);
  });
});
