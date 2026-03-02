import type { Locale, LocalizedText } from "@/shared/i18n"

export const experienceContent = {
  page: {
    title: { en: "Experience", de: "Erfahrung" },
    subtitle: {
      en: "Work experience and education.",
      de: "Berufserfahrung und Ausbildung.",
    },
  },
  sections: {
    work: { en: "Work Experience", de: "Berufserfahrung" },
    education: { en: "Education", de: "Ausbildung" },
  },
  labels: {
    present: { en: "Present", de: "Heute" },
    periodAria: { en: "Period: {period}", de: "Zeitraum: {period}" },
  },
} satisfies {
  page: { title: LocalizedText; subtitle: LocalizedText }
  sections: { work: LocalizedText; education: LocalizedText }
  labels: { present: LocalizedText; periodAria: LocalizedText }
}

export function formatExperienceText(
  template: string,
  vars: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? `{${key}}`),
  )
}

export function getPresentLabel(locale: Locale) {
  return locale === "de"
    ? experienceContent.labels.present.de
    : experienceContent.labels.present.en
}
