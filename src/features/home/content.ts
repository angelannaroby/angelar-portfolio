import type { LocalizedText } from "@/shared/i18n"

export const homeContent = {
  header: {
    mobileNavTitle: { en: "Navigation", de: "Navigation" },
    openMenu: { en: "Open menu", de: "Menü öffnen" },
    closeMenu: { en: "Close menu", de: "Menü schließen" },
    toggleTheme: { en: "Toggle theme", de: "Theme wechseln" },
    toggleLanguage: { en: "Toggle language", de: "Sprache wechseln" },
    themeAndLanguage: { en: "Theme & language", de: "Theme & Sprache" },
    light: { en: "Light", de: "Hell" },
    dark: { en: "Dark", de: "Dunkel" },
  },

  topBrand: { en: "it’s me", de: "ich bin’s" },

  topLinks: [
    {
      to: "/experience",
      title: { en: "About Me", de: "Über mich" },
      hint: { en: "Experience & education", de: "Erfahrung & Ausbildung" },
    },
    {
      to: "/projects",
      title: { en: "My Projects", de: "Meine Projekte" },
      hint: { en: "See selected work", de: "Ausgewählte Arbeiten" },
    },
    {
      to: "/skills",
      title: { en: "Skills", de: "Skills" },
      hint: { en: "Tech stack & strengths", de: "Tech-Stack & Stärken" },
    },
  ],

  intro: {
    hello: { en: "Hello! I’m", de: "Hallo! Ich bin" },
    name: "Angel",
    role: { en: "Frontend Developer", de: "Frontend Entwicklerin" },
    availability: {
      en: "Based in Germany • Open to hybrid and relocation",
      de: "In Deutschland • Offen für Hybrid und Umzug",
    },
    introText: {
      en: "I build production-grade web applications with React and TypeScript — focusing on clean UI, accessibility, and maintainable architecture.",
      de: "Ich entwickle produktionsreife Webanwendungen mit React und TypeScript — mit Fokus auf saubere UI, Accessibility und wartbare Architektur.",
    },
    bullets: [
      {
        en: "Clean, scalable UI components",
        de: "Saubere, skalierbare UI-Komponenten",
      },
      {
        en: "Form-heavy enterprise workflows",
        de: "Formularlastige Enterprise-Workflows",
      },
      {
        en: "Testing mindset (Vitest / RTL / Playwright)",
        de: "Testing-Fokus (Vitest / RTL / Playwright)",
      },
    ],
    ctaPrimary: { en: "Let’s Talk", de: "Kontakt" },
    ctaSecondary: { en: "Download CV", de: "CV herunterladen" },
    portraitAlt: { en: "Portrait of Angel", de: "Porträt von Angel" },
    social: {
      linkedinAria: { en: "LinkedIn", de: "LinkedIn" },
      githubAria: { en: "GitHub", de: "GitHub" },
    },
  },

  capabilityStrip: [
    { en: "WEB DEVELOPMENT", de: "WEB DEVELOPMENT" },
    { en: "UI ENGINEERING", de: "UI ENGINEERING" },
    { en: "TESTING", de: "TESTING" },
    { en: "ACCESSIBILITY", de: "ACCESSIBILITY" },
    { en: "TOOLING", de: "TOOLING" },
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/angel-roby/",
    github: "https://github.com/angelar-portfolio",
    cvHref: "/cv/AngelAnnaRoby_CV.pdf",
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
  header: Record<string, LocalizedText>
  topBrand: LocalizedText
  topLinks: Array<{ to: string; title: LocalizedText; hint: LocalizedText }>
  intro: {
    hello: LocalizedText
    name: string
    role: LocalizedText
    availability: LocalizedText
    introText: LocalizedText
    bullets: LocalizedText[]
    ctaPrimary: LocalizedText
    ctaSecondary: LocalizedText
    portraitAlt: LocalizedText
    social: { linkedinAria: LocalizedText; githubAria: LocalizedText }
  }
  capabilityStrip: LocalizedText[]
  links: { linkedin: string; github: string; cvHref: string }
  footer: { copyright: LocalizedText; builtWith: LocalizedText }
}

export function formatHomeText(
  template: string,
  vars: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? `{${key}}`),
  )
}
