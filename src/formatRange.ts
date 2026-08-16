import { clamp } from "./clamp.js";
import { truncate } from "./truncate.js";

export function formatRange(value: number, min: number, max: number): string {
  const clamped = clamp(value, min, max);
  return truncate(`${clamped} (of ${min}–${max})`, 32);
}
