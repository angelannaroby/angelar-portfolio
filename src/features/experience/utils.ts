const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const

export function formatYearMonth(ym: string): string {
  const [y, m] = ym.split("-")
  const monthIdx = Number(m) - 1
  const month = MONTHS[monthIdx] ?? m
  return `${month} ${y}`
}

export function formatPeriod(start: string, end?: string): string {
  return `${formatYearMonth(start)} — ${end ? formatYearMonth(end) : "Present"}`
}