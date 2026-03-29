import type { LocalizedText } from "@/shared/i18n"

export type ExperienceContent = {
  labels: {
    periodAria: LocalizedText
  }
  focus: {
    title: LocalizedText
    items: Array<{
      id: "frontend" | "ui" | "testing"
      label: LocalizedText
    }>
  }
  tabs: {
    experience: LocalizedText
    education: LocalizedText
  }
  aria: {
    tabsToggle: LocalizedText
  }
}

export const experienceContent: ExperienceContent = {
  labels: {
    periodAria: { en: "Period: {period}", de: "Zeitraum: {period}" },
  },

  focus: {
    title: { en: "Core Focus Areas", de: "Kernfokus" },
    items: [
      {
        id: "frontend",
        label: { en: "Frontend Development", de: "Frontend-Entwicklung" },
      },
      { id: "ui", label: { en: "UI Engineering", de: "UI Engineering" } },
      {
        id: "testing",
        label: { en: "Testing & Quality", de: "Testing & Qualität" },
      },
    ],
  },

  tabs: {
    experience: { en: "Experience", de: "Erfahrung" },
    education: { en: "Education", de: "Ausbildung" },
  },

  aria: {
    tabsToggle: {
      en: "Journey category",
      de: "Journey-Kategorie",
    },
  },
}
