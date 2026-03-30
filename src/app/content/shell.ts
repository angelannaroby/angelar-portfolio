import type { LocalizedText } from "@/shared/i18n"

export const appShellContent = {
  header: {
    brand: { en: "A²R", de: "A²R" },
    openMenu: { en: "Open menu", de: "Menü öffnen" },
    closeMenu: { en: "Close menu", de: "Menü schließen" },
    toggleLanguage: { en: "Toggle language", de: "Sprache wechseln" },
    language: { en: "Language", de: "Sprache" },
    links: [
      { to: "/experience", title: { en: "Journey", de: "Reise" } },
      { to: "/projects", title: { en: "Projects", de: "Projekte" } },
      { to: "/skills", title: { en: "Skills", de: "Skills" } },
    ],
  },
  footer: {
    copyright: {
      en: "© {year} Angel Anna Roby. All rights reserved.",
      de: "© {year} Angel Anna Roby. Alle Rechte vorbehalten.",
    },
    builtWith: {
      en: "Built with React, Tailwind CSS, and ❤️",
      de: "Gebaut mit React, Tailwind CSS und ❤️",
    },
  },
} satisfies {
  header: {
    brand: LocalizedText
    openMenu: LocalizedText
    closeMenu: LocalizedText
    toggleLanguage: LocalizedText
    language: LocalizedText
    links: Array<{ to: string; title: LocalizedText }>
  }
  footer: {
    copyright: LocalizedText
    builtWith: LocalizedText
  }
}
