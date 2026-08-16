const oneDecimalPercent = Array.from(
  { length: 1001 },
  (_, scaled) => `${Math.floor(scaled / 10)}.${scaled % 10}%`,
);

export function percent(value: number, digits: number): string {
  if (value < 0 || value > 1) throw new RangeError("value must be between 0 and 1");
  if (digits === 1) return oneDecimalPercent[Math.round(value * 1000)];
  return `${(value * 100).toFixed(digits)}%`;
}
