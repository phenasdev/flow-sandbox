import { describe, expect, it } from "vitest";
import { slugify } from "../src/slugify.js";

describe("slugify", () => {
  it("lowercases and hyphenates a title", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips accents", () => {
    expect(slugify("Café Cortado")).toBe("cafe-cortado");
  });

  it("collapses runs of punctuation into a single hyphen", () => {
    expect(slugify("a -- b__c")).toBe("a-b-c");
  });

  it("rejects input with nothing sluggable in it", () => {
    expect(() => slugify("!!!")).toThrow(RangeError);
  });
});
