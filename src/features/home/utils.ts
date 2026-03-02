import type { Locale, LocalizedText } from "@/shared/i18n"

export function pickText(text: LocalizedText, locale: Locale) {
  return locale === "de" ? text.de : text.en
}

export function formatWithVars(
  template: string,
  vars: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? `{${key}}`),
  )
}

export function getCurrentYear() {
  return new Date().getFullYear()
}
