import type { LocalizedText } from "@/shared/i18n"

export const skillsContent = {
  skills: {
    title: {
      en: "Core Stack",
      de: "Kern-Stack",
    },
  },

  recommendations: {
    title: { en: "Recommendations", de: "Empfehlungen" },
    subtitle: {
      en: "What my colleagues say",
      de: "Was Kolleg:innen über mich sagen",
    },
  },
} satisfies {
  skills: {
    title: LocalizedText
  }
  recommendations: {
    title: LocalizedText
    subtitle: LocalizedText
  }
}
