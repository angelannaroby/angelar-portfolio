import type { LocalizedText } from "@/shared/i18n"

export const skillsContent = {
  page: {
    title: { en: "Skills", de: "Skills" },
    subtitle: {
      en: "Core technologies, tooling, and strengths.",
      de: "Technologien, Tools und Stärken im Überblick.",
    },
  },
} satisfies {
  page: { title: LocalizedText; subtitle: LocalizedText }
}
