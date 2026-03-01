import type { Locale, LocalizedText } from "./types"

export function pickText(text: LocalizedText, locale: Locale) {
  return locale === "de" ? text.de : text.en
}

/**
 * Simple string interpolation: replaces "{key}" with vars[key].
 * Keeps translations in data and formatting in one place.
 */
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
