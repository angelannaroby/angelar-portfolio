import type { HomeContent } from "../types"

export const homeContent: HomeContent = {
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

  header: {
    openMenu: { en: "Open menu", de: "Menü öffnen" },
    closeMenu: { en: "Close menu", de: "Menü schließen" },
    toggleTheme: { en: "Toggle theme", de: "Theme wechseln" },
    toggleLanguage: { en: "Toggle language", de: "Sprache wechseln" },
    navigation: { en: "Navigation", de: "Navigation" },
    themeAndLanguage: { en: "Theme & language", de: "Theme & Sprache" },
    themeLight: { en: "Light", de: "Hell" },
    themeDark: { en: "Dark", de: "Dunkel" },
  },

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
    portraitAlt: { en: "Portrait of Angel", de: "Portrait von Angel" },
    social: {
      linkedinAria: { en: "Open LinkedIn", de: "LinkedIn öffnen" },
      githubAria: { en: "Open GitHub", de: "GitHub öffnen" },
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
      de: "Erstellt mit React, Tailwind CSS und ❤️",
    },
  },
}
