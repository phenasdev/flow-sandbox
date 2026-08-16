import { titleCase } from "./titleCase.js";
import { truncate } from "./truncate.js";

export function headline(input: string, max: number): string {
  return truncate(titleCase(input), max);
}
