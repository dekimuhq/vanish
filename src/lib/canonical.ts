// Byte-identical to vanish-recon/src/canonical.ts — REQUIRED for signature parity.
export function canonicalize(value: unknown): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return "[" + value.map(canonicalize).join(",") + "]";
  const record = value as Record<string, unknown>;
  const keys = Object.keys(record)
    .filter((k) => record[k] !== undefined)
    .sort();
  const body = keys.map((k) => JSON.stringify(k) + ":" + canonicalize(record[k])).join(",");
  return "{" + body + "}";
}
