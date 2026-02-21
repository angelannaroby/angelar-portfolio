import type { Locale, LocalizedText } from "./types"

export function pickText(text: LocalizedText, locale: Locale): string {
  return text[locale]
}