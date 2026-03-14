import type { LocalizedText } from "@/shared/i18n"

export const projectsContent = {
  page: {
    title: {
      a: { en: "Projects", de: "Projekte" },
      b: { en: "Contributions", de: "Beiträge" },
    },
    subtitle: {
      en: "A collection of projects I’ve built, contributed to, and learned from along the way.",
      de: "Eine Sammlung von Projekten, die ich entwickelt, zu denen ich beigetragen und aus denen ich dabei gelernt habe.",
    },

    stats: {
      yearsValue: { en: "5+", de: "5+" },
      yearsLabel: { en: "Years of Experience", de: "Jahre Erfahrung" },
      enterpriseValue: { en: "5+", de: "5+" },
      enterpriseLabel: { en: "Enterprise Projects", de: "Enterprise-Projekte" },
    },

    toggle: {
      professional: { en: "Industry Contributions", de: "Berufliche Beiträge" },
      personal: { en: "Personal Projects", de: "Persönliche Projekte" },
    },
  },

  card: {
    interested: { en: "Interested", de: "Interessiert" },
  },

  detail: {
    title: { en: "Project overview", de: "Projektüberblick" },
    close: { en: "Close", de: "Schließen" },
    stackTitle: { en: "Stack", de: "Stack" },
    linksTitle: { en: "Links", de: "Links" },

    professional: {
      overview: { en: "Overview", de: "Überblick" },
      capabilities: { en: "Capabilities", de: "Funktionen" },
      businessValue: { en: "Business value", de: "Geschäftlicher Mehrwert" },
    },

    personal: {
      problem: { en: "Problem", de: "Problem" },
      solution: { en: "Solution", de: "Lösung" },
      impact: { en: "Impact", de: "Wirkung" },
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
  }
  card: {
    interested: LocalizedText
  }
  detail: {
    title: LocalizedText
    close: LocalizedText
    stackTitle: LocalizedText
    linksTitle: LocalizedText
    professional: {
      overview: LocalizedText
      capabilities: LocalizedText
      businessValue: LocalizedText
    }
    personal: {
      problem: LocalizedText
      solution: LocalizedText
      impact: LocalizedText
    }
  }
}
