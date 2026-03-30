import type { LocalizedText } from "@/shared/i18n"

export const projectsContent = {
  toggle: {
    professional: { en: "Enterprise", de: "Enterprise" },
    personal: { en: "Personal", de: "Persönliche" },
  },

  aria: {
    categoryToggle: {
      en: "Projects category",
      de: "Projektkategorie",
    },
  },

  detail: {
    title: { en: "Project overview", de: "Projektüberblick" },
    close: { en: "Close", de: "Schließen" },
    stackTitle: { en: "Tech stack", de: "Tech-Stack" },
    linksTitle: { en: "Links", de: "Links" },
    storyContribution: {
      en: "My contribution",
      de: "Mein Beitrag",
    },
  },
} satisfies {
  toggle: {
    professional: LocalizedText
    personal: LocalizedText
  }
  aria: {
    categoryToggle: LocalizedText
  }
  detail: {
    title: LocalizedText
    close: LocalizedText
    stackTitle: LocalizedText
    linksTitle: LocalizedText
    storyContribution: LocalizedText
  }
}
