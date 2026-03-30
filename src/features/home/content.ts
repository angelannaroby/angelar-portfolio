import type { LocalizedText } from "@/shared/i18n"

export const homeContent = {
  header: {
    mobileNavTitle: { en: "Navigation", de: "Navigation" },
    openMenu: { en: "Open menu", de: "Menü öffnen" },
    closeMenu: { en: "Close menu", de: "Menü schließen" },
    toggleLanguage: { en: "Toggle language", de: "Sprache wechseln" },
    language: { en: "Language", de: "Sprache" },
  },

  topBrand: { en: "it’s me", de: "ich bin’s" },

  topLinks: [
    {
      to: "/experience",
      title: { en: "Journey", de: "Reise" },
      hint: { en: "Experience & education", de: "Erfahrung & Ausbildung" },
    },
    {
      to: "/projects",
      title: { en: "Projects", de: "Projekte" },
      hint: { en: "See selected work", de: "Ausgewählte Arbeiten" },
    },
    {
      to: "/skills",
      title: { en: "Skills", de: "Skills" },
      hint: { en: "Tech stack & strengths", de: "Tech-Stack & Stärken" },
    },
  ],
  intro: {
    helloLead: { en: "Hello!", de: "Hallo!" },
    helloTrail: { en: "I’m", de: "ich bin" },
    firstName: { en: "Angel", de: "Angel" },
    lastName: { en: "Anna Roby", de: "Anna Roby" },
    availability: {
      en: "Based in Germany • Open to hybrid and relocation",
      de: "In Deutschland • Offen für Hybrid und Umzug",
    },
    introText: {
      en: "I build web applications with React and TypeScript. With experience across full-time and working student roles, I’ve contributed to real-world products by building features and improving user interfaces. I focus on keeping things clear, practical, and easy to use.",
      de: "Ich baue Webanwendungen mit React und TypeScript. Mit Erfahrung aus Vollzeit- und Werkstudentenstellen habe ich zu realen Produkten beigetragen, indem ich Funktionen entwickelt und Benutzeroberflächen verbessert habe. Dabei lege ich Wert darauf, alles klar, praktisch und benutzerfreundlich zu gestalten.",
    },
    ctaPrimary: { en: "Let’s Talk", de: "Kontakt" },
    portraitAlt: {
      en: "Portrait of Angel Anna Roby",
      de: "Porträt von Angel Anna Roby",
    },

    social: {
      linkedinAria: { en: "LinkedIn", de: "LinkedIn" },
      githubAria: { en: "GitHub", de: "GitHub" },
      linkedinText: { en: "LinkedIn", de: "LinkedIn" },
      githubText: { en: "GitHub", de: "GitHub" },
    },

    sideRole: {
      eyebrow: { en: "Frontend", de: "Frontend" },
      title: { en: "Developer", de: "Entwicklerin" },
    },
    role: {
      en: "Frontend Developer",
      de: "Frontend-Entwicklerin",
    },
    bullets: [
      {
        en: "React + TypeScript",
        de: "React + TypeScript",
      },
      {
        en: "Accessible, maintainable UI",
        de: "Barrierefreie, wartbare UI",
      },
      {
        en: "Testing-first mindset",
        de: "Testing-orientierte Arbeitsweise",
      },
    ],
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
    helloLead: LocalizedText
    helloTrail: LocalizedText
    firstName: LocalizedText
    lastName: LocalizedText
    role: LocalizedText
    availability: LocalizedText
    introText: LocalizedText
    bullets: LocalizedText[]
    ctaPrimary: LocalizedText
    portraitAlt: LocalizedText
    social: {
      linkedinAria: LocalizedText
      githubAria: LocalizedText
      linkedinText: LocalizedText
      githubText: LocalizedText
    }
    sideRole: {
      eyebrow: LocalizedText
      title: LocalizedText
    }
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
