/** Trim and strip optional surrounding quotes from .env values (avoids mismatches when dotenv keeps quotes). */
export function envVal(v) {
  if (v == null || v === '') return ''
  let s = String(v).trim()
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim()
  }
  return s
}
