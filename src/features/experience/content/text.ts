import type { LocalizedText } from "@/shared/i18n"

export const experienceContent: ExperienceContent = {
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

export type ExperienceContent = {
  tabs: {
    experience: LocalizedText
    education: LocalizedText
  }
  aria: {
    tabsToggle: LocalizedText
  }
}
