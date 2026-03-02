import type { Locale, LocalizedText } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"

export const projectsContent = {
  page: {
    title: { en: "Projects", de: "Projekte" },
    subtitle: {
      en: "Selected work and case studies.",
      de: "Ausgewählte Arbeiten und Case Studies.",
    },

    searchLabel: { en: "Search", de: "Suche" },
    searchPlaceholder: {
      en: "Search by title, tech, or tags…",
      de: "Suche nach Titel, Tech oder Tags…",
    },

    showing: {
      en: "Showing {shown} of {total}",
      de: "{shown} von {total} angezeigt",
    },

    noResults: {
      en: "No projects match your search.",
      de: "Keine Projekte passen zu deiner Suche.",
    },
  },

  card: {
    view: { en: "View", de: "Ansehen" },
    featured: { en: "Featured", de: "Featured" },
  },

  detail: {
    caseStudy: {
      problem: { en: "Problem", de: "Problem" },
      solution: { en: "Solution", de: "Lösung" },
      impact: { en: "Impact", de: "Impact" },
    },
    linksTitle: { en: "Links", de: "Links" },
    featured: { en: "Featured", de: "Featured" },
  },
} satisfies {
  page: {
    title: LocalizedText
    subtitle: LocalizedText
    searchLabel: LocalizedText
    searchPlaceholder: LocalizedText
    showing: LocalizedText
    noResults: LocalizedText
  }
  card: { view: LocalizedText; featured: LocalizedText }
  detail: {
    caseStudy: {
      problem: LocalizedText
      solution: LocalizedText
      impact: LocalizedText
    }
    linksTitle: LocalizedText
    featured: LocalizedText
  }
}

export function formatProjectsText(
  template: string,
  vars: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? `{${key}}`),
  )
}

export function getProjectCardLabels(locale: Locale) {
  return {
    view: pickText(projectsContent.card.view, locale),
    featured: pickText(projectsContent.card.featured, locale),
  }
}
