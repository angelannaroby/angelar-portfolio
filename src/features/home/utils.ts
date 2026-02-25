import type { Locale, LocalizedText } from "./types"

export function pickText(text: LocalizedText, locale: Locale) {
  return locale === "de" ? text.de : text.en
}
