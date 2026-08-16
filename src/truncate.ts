export function truncate(input: string, max: number): string {
  if (max < 1) throw new RangeError("max must be at least 1");
  if (input.length <= max) return input;
  return `${input.slice(0, max - 1)}…`;
}
