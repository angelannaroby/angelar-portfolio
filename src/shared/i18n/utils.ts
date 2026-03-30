import type { Locale, LocalizedText } from "./types"

type LocalizedTextMap = Record<string, LocalizedText>

export function pickText(text: LocalizedText, locale: Locale): string {
  return text[locale]
}

export function pickTexts<T extends LocalizedTextMap>(
  texts: T,
  locale: Locale,
): { [K in keyof T]: string } {
  const resolvedEntries = Object.entries(texts).map(([key, value]) => [
    key,
    pickText(value, locale),
  ])

  return Object.fromEntries(resolvedEntries) as { [K in keyof T]: string }
}

export function pickTextList(
  texts: readonly LocalizedText[],
  locale: Locale,
): string[] {
  return texts.map((text) => pickText(text, locale))
}
