import type { LocalizedText } from "@/shared/i18n"

export type ExperienceContent = {
  page: {
    title: {
      experience: LocalizedText
      education: LocalizedText
    }
    subtitle: LocalizedText
  }
  labels: {
    periodAria: LocalizedText
  }
  stats: {
    years: {
      value: string
      label: LocalizedText
    }
    projects: {
      value: string
      label: LocalizedText
    }
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
}

export const experienceContent: ExperienceContent = {
  page: {
    // eyebrow: { en: "MY JOURNEY", de: "MEIN WEG" },
    title: {
      experience: { en: "Experience", de: "Erfahrung" },
      education: { en: "Education", de: "Ausbildung" },
    },
    subtitle: {
      en: "A journey of building enterprise-grade products, solving complex problems, and growing as a developer.",
      de: "Ein Weg, Enterprise-Produkte zu bauen, komplexe Probleme zu lösen und als Entwicklerin zu wachsen.",
    },
  },

  labels: {
    periodAria: { en: "Period: {period}", de: "Zeitraum: {period}" },
  },

  stats: {
    years: {
      value: "5+",
      label: { en: "Years of Experience", de: "Jahre Erfahrung" },
    },
    projects: {
      value: "5+",
      label: { en: "Enterprise Projects", de: "Enterprise-Projekte" },
    },
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
}
