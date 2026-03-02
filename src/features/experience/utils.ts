import type { Locale } from "@/shared/i18n"

export type FormatPeriodOptions = {
  presentLabel?: string
}

export function getPresentLabel(locale: Locale) {
  return locale === "de" ? "Heute" : "Present"
}

export function formatPeriod(
  start: string,
  end: string | undefined,
  locale: Locale,
  options?: FormatPeriodOptions,
) {
  const format = (ym: string) => {
    const [y, m] = ym.split("-")
    const date = new Date(Number(y), Number(m) - 1, 1)

    return new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-GB", {
      month: "short",
      year: "numeric",
    }).format(date)
  }

  const startText = format(start)
  const endText = end
    ? format(end)
    : (options?.presentLabel ?? getPresentLabel(locale))

  return `${startText} – ${endText}`
}

export function formatExperienceText(
  template: string,
  vars: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? `{${key}}`),
  )
}

export function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const a = parts[0]?.[0] ?? "•"
  const b = parts[1]?.[0] ?? ""
  return (a + b).toUpperCase()
}

export function getCollapsedStack(stack: string[] | undefined, max = 4) {
  const list = stack ?? []
  return {
    items: list.slice(0, max),
    remaining: Math.max(0, list.length - max),
    hasAny: list.length > 0,
  }
}
