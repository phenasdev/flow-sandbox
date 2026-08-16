export function titleCase(input: string): string {
  if (input === "") throw new RangeError("input must not be empty");

  return input
    .split(/(\s+)/)
    .map((part) =>
      /^\s+$/.test(part)
        ? part
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase(),
    )
    .join("");
}
