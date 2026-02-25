import type { HomeContent } from "./types"

export const homeContent: HomeContent = {
  topBrand: { en: "it’s me", de: "ich bin’s" },
  topLinks: [
    {
      to: "/projects",
      title: { en: "My Projects", de: "Meine Projekte" },
      hint: { en: "See selected work", de: "Ausgewählte Arbeiten" },
    },
    {
      to: "/experience",
      title: { en: "About Me", de: "Über mich" },
      hint: { en: "Experience & education", de: "Erfahrung & Ausbildung" },
    },
    {
      to: "/skills",
      title: { en: "Skills", de: "Skills" },
      hint: { en: "Tech stack & strengths", de: "Tech-Stack & Stärken" },
    },
    // {
    //   to: "/contact",
    //   title: { en: "Contact Me", de: "Kontakt" },
    //   hint: { en: "Send a message", de: "Nachricht senden" },
    // },
  ],

  hello: { en: "Hello! I’m", de: "Hallo! Ich bin" },
  name: "Angel",
  role: { en: "Frontend Developer", de: "Frontend Entwicklerin" },
  intro: {
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

  availability: {
    en: "Based in Germany • Open to hybrid and relocation",
    de: "In Deutschland • Offen für Hybrid und Umzug",
  },

  capabilityStrip: [
    { en: "WEB DEVELOPMENT", de: "WEB DEVELOPMENT" },
    { en: "UI ENGINEERING", de: "UI ENGINEERING" },
    { en: "TESTING", de: "TESTING" },
    { en: "ACCESSIBILITY", de: "ACCESSIBILITY" },
    { en: "TOOLING", de: "TOOLING" },
  ],

  socials: {
    linkedinLabel: { en: "LinkedIn", de: "LinkedIn" },
    githubLabel: { en: "GitHub", de: "GitHub" },
  },
}
