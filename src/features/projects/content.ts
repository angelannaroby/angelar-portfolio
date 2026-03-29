import type { LocalizedText } from "@/shared/i18n"

export const projectsContent = {
  page: {
    title: {
      a: { en: "Projects", de: "Projekte" },
      b: { en: "Contributions", de: "Beiträge" },
    },
    subtitle: {
      en: "A collection of projects I’ve built, contributed to, and learned from along the way.",
      de: "Eine Sammlung von Projekten, die ich entwickelt habe, zu denen ich beigetragen habe und aus denen ich auf meinem Weg gelernt habe.",
    },
    stats: {
      yearsValue: { en: "5+", de: "5+" },
      yearsLabel: { en: "Years of experience", de: "Jahre Erfahrung" },
      enterpriseValue: { en: "5+", de: "5+" },
      enterpriseLabel: { en: "Enterprise projects", de: "Enterprise-Projekte" },
    },
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
  },

  card: {
    interested: { en: "Interested", de: "Interessiert" },
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
  page: {
    title: { a: LocalizedText; b: LocalizedText }
    subtitle: LocalizedText
    stats: {
      yearsValue: LocalizedText
      yearsLabel: LocalizedText
      enterpriseValue: LocalizedText
      enterpriseLabel: LocalizedText
    }
    toggle: {
      professional: LocalizedText
      personal: LocalizedText
    }
    aria: {
      categoryToggle: LocalizedText
    }
  }
  card: {
    interested: LocalizedText
  }
  detail: {
    title: LocalizedText
    close: LocalizedText
    stackTitle: LocalizedText
    linksTitle: LocalizedText
    storyContribution: LocalizedText
  }
}
