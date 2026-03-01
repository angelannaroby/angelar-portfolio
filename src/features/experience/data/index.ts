import type { ExperienceEntry } from "../types"

export const experience: ExperienceEntry[] = [
  {
    id: "osapiens-working-student-frontend",
    kind: "work",
    role: {
      en: "Working Student – Development Engineer (Frontend)",
      de: "Werkstudentin – Development Engineer (Frontend)",
    },
    org: "osapiens Services GmbH",
    location: "Mannheim, Germany",
    start: "2022-12",
    highlights: [
      {
        en: "Developed React + TypeScript features for compliance-critical, form-heavy enterprise workflows.",
        de: "Entwicklung von React + TypeScript Features für compliance-kritische, formularlastige Enterprise-Workflows.",
      },
      {
        en: "Translated Figma designs into scalable, theme-aware UI components reused across multiple platforms.",
        de: "Umsetzung von Figma-Designs in skalierbare, theme-fähige UI-Komponenten für mehrere Plattformen.",
      },
      {
        en: "Built shared UI components, types, and utilities in a pnpm/Turborepo monorepo to improve reuse.",
        de: "Entwicklung gemeinsamer UI-Komponenten, Types und Utilities in einem pnpm/Turborepo-Monorepo zur Wiederverwendung.",
      },
      {
        en: "Implemented state management (MobX, Zustand), REST API integration, complex forms/validation, and i18n.",
        de: "Implementierung von State Management (MobX, Zustand), REST-API-Integration, komplexen Formularen/Validierung und i18n.",
      },
      {
        en: "Maintained quality via Vitest/Playwright/RTL tests, ESLint/Prettier, and debugging across pre-release environments.",
        de: "Sicherstellung der Qualität durch Vitest/Playwright/RTL Tests, ESLint/Prettier und Debugging in Pre-Release-Umgebungen.",
      },
      {
        en: "Collaborated in Agile/Scrum with code reviews, requirement discussions, UI refinements, and CI/CD delivery.",
        de: "Agile/Scrum Zusammenarbeit inkl. Code Reviews, Anforderungsabstimmung, UI-Optimierungen und CI/CD Delivery.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "pnpm",
      "Turborepo",
      "Vitest",
      "Playwright",
      "RTL",
      "MobX",
      "Zustand",
    ],
  },
  {
    id: "kimball-software-engineer",
    kind: "work",
    role: { en: "Software Engineer", de: "Software Engineer" },
    org: "Kimball Electronics (India) Pvt. Ltd.",
    location: "Trivandrum, India",
    start: "2021-09",
    end: "2022-07",
    highlights: [
      {
        en: "Delivered React dashboards and data visualizations for a production monitoring system with anomaly detection views.",
        de: "Entwicklung von React-Dashboards und Datenvisualisierungen für ein Produktionsmonitoring inkl. Anomalie-Ansichten.",
      },
      {
        en: "Built reusable responsive UI components using Material UI and component-based architecture.",
        de: "Entwicklung wiederverwendbarer, responsiver UI-Komponenten mit Material UI und komponentenbasierter Architektur.",
      },
      {
        en: "Integrated REST APIs (Axios), handled async states, validation, and error handling in Agile/Scrum delivery.",
        de: "REST-API-Integration (Axios), asynchrone Zustände, Validierung und Fehlerhandling im Agile/Scrum-Kontext.",
      },
    ],
    stack: ["React", "JavaScript", "Material UI", "Axios"],
  },
  {
    id: "ul-developer-analyst",
    kind: "work",
    role: { en: "Developer Analyst", de: "Developer Analyst" },
    org: "UL Technology Solutions (P) Ltd",
    location: "Calicut, India",
    start: "2019-10",
    end: "2021-08",
    highlights: [
      {
        en: "Delivered end-to-end frontend features in React for a government-facing web portal, from implementation to maintenance.",
        de: "End-to-End Entwicklung von Frontend-Features in React für ein behördliches Webportal — von Umsetzung bis Wartung.",
      },
      {
        en: "Handled data-centric and GIS-enabled requirements: SQL queries, data consistency, cleanup, and map-based UI interactions.",
        de: "Daten- und GIS-nahe Anforderungen: SQL-Queries, Datenkonsistenz, Bereinigung sowie map-basierte UI-Interaktionen.",
      },
      {
        en: "Implemented REST integrations (Axios), Redux state management, and responsive UI with Bootstrap/HTML/CSS.",
        de: "Implementierung von REST-Integrationen (Axios), Redux State Management und responsive UI mit Bootstrap/HTML/CSS.",
      },
    ],
    stack: ["React", "Redux", "Axios", "SQL", "Bootstrap"],
  },
  {
    id: "rptu-msc",
    kind: "education",
    role: {
      en: "M.Sc. Computer Science (Software Engineering) — Thesis in Progress",
      de: "M.Sc. Informatik (Software Engineering) — Thesis in Arbeit",
    },
    org: "Rhineland-Palatinate Technical University (RPTU)",
    location: "Kaiserslautern, Germany",
    start: "2022-10",
    highlights: [
      {
        en: "Focus areas: software engineering, intelligent systems, and IT systems.",
        de: "Schwerpunkte: Software Engineering, Intelligente Systeme und IT-Systeme.",
      },
    ],
  },
  {
    id: "btech-it",
    kind: "education",
    role: {
      en: "B.Tech Information Technology",
      de: "B.Tech Information Technology",
    },
    org: "APJ Abdul Kalam Technological University",
    location: "Kerala, India",
    start: "2015-07",
    end: "2019-05",
    highlights: [
      {
        en: "CGPA: 8.67/10 (German grade: 1.7). University rank holder (9th rank).",
        de: "CGPA: 8,67/10 (Deutsche Note: 1,7). Hochschul-Rang (9. Rang).",
      },
    ],
  },
]
