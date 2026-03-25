import type { LocalizedText } from "@/shared/i18n"

export const skillsContent = {
  page: {
    title: {
      skills: { en: "Skills", de: "Skills" },
      recommendations: { en: "Recommendations", de: "Empfehlungen" },
    },
    subtitle: {
      en: "Core frontend technologies, testing tools, and workflows I use to build clean, production-ready interfaces.",
      de: "Zentrale Frontend-Technologien, Testing-Tools und Workflows, mit denen ich saubere und produktionsreife Benutzeroberflächen entwickle.",
    },
    stats: {
      skillAreasValue: { en: "11", de: "11" },
      skillAreasLabel: { en: "Core Skills", de: "Kern-Skills" },
      recommendationsValue: { en: "3", de: "3" },
      recommendationsLabel: {
        en: "Recommendations",
        de: "Empfehlungen",
      },
    },
  },

  skills: {
    title: {
      en: "Core Stack",
      de: "Kern-Stack",
    },
  },

  recommendations: {
    title: { en: "Recommendations", de: "Empfehlungen" },
    subtitle: {
      en: "Selected LinkedIn recommendations from managers and colleagues I have worked with.",
      de: "Ausgewählte LinkedIn-Empfehlungen von Führungskräften und Kolleg:innen, mit denen ich zusammengearbeitet habe.",
    },
    linkLabel: {
      en: "View on LinkedIn",
      de: "Auf LinkedIn ansehen",
    },
  },
} satisfies {
  page: {
    title: {
      skills: LocalizedText
      recommendations: LocalizedText
    }
    subtitle: LocalizedText
    stats: {
      skillAreasValue: LocalizedText
      skillAreasLabel: LocalizedText
      recommendationsValue: LocalizedText
      recommendationsLabel: LocalizedText
    }
  }
  skills: {
    title: LocalizedText
  }
  recommendations: {
    title: LocalizedText
    subtitle: LocalizedText
    linkLabel: LocalizedText
  }
}
