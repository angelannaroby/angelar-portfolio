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
    website: "https://osapiens.com/",
    logo: { src: "/images/osap.png", alt: "osapiens" },
    highlights: [
      {
        en: "Built and shipped frontend features across 3 production applications using React and TypeScript within a modular architecture.",
        de: "Entwicklung und Auslieferung von Frontend-Features in 3 Produktivanwendungen mit React und TypeScript innerhalb einer modularen Architektur.",
      },
      {
        en: "Developed reusable UI components, improving consistency and reducing duplication across projects.",
        de: "Entwicklung wiederverwendbarer UI-Komponenten zur Verbesserung der Konsistenz und Reduzierung von Duplikation über mehrere Projekte hinweg.",
      },
      {
        en: "Translated Figma designs into responsive, pixel-accurate interfaces aligned with design systems.",
        de: "Umsetzung von Figma-Designs in responsive, pixelgenaue Benutzeroberflächen im Einklang mit bestehenden Designsystemen.",
      },
      {
        en: "Developed dynamic forms with validation using React Hook Form and integrated REST/GraphQL APIs for data fetching and submission.",
        de: "Entwicklung dynamischer Formulare mit Validierung unter Verwendung von React Hook Form sowie Integration von REST-/GraphQL-APIs für Datenabruf und Übermittlung.",
      },
      {
        en: "Contributed to a pnpm/Turborepo monorepo, supporting scalable multi-project development.",
        de: "Mitwirkung an einem pnpm/Turborepo-Monorepo zur Unterstützung einer skalierbaren Entwicklung über mehrere Projekte hinweg.",
      },
      {
        en: "Wrote unit and end-to-end tests using Vitest and Playwright (≈60% coverage on a key project), improving release reliability.",
        de: "Erstellung von Unit- und End-to-End-Tests mit Vitest und Playwright (≈60 % Abdeckung in einem zentralen Projekt) zur Verbesserung der Release-Zuverlässigkeit.",
      },
      {
        en: "Collaborated in Agile teams through code reviews and sprint cycles to deliver high-quality features.",
        de: "Zusammenarbeit in agilen Teams durch Code Reviews und Sprint-Zyklen zur Lieferung hochwertiger Features.",
      },
      {
        en: "Documented features in internal wiki pages, improving developer onboarding and cross-team knowledge sharing.",
        de: "Dokumentation von Features in internen Wiki-Seiten zur Verbesserung des Developer-Onboardings und des teamübergreifenden Wissensaustauschs.",
      },
      {
        en: "Created onboarding videos with scripts and feature walkthroughs, helping users understand platform functionality.",
        de: "Erstellung von Onboarding-Videos inklusive Skripten und Feature-Demonstrationen, um Nutzer:innen die Plattformfunktionen verständlich zu machen.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "React Hook Form",
      "REST APIs",
      "GraphQL",
      "Vitest",
      "Playwright",
      "Zustand",
      "MobX",
      "pnpm",
      "Turborepo",
      "Azure DevOps",
      "Git",
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
    website: "https://www.kimballelectronics.com/",
    logo: { src: "/images/kimball.png", alt: "Kimball Electronics" },
    highlights: [
      {
        en: "Built React + TypeScript dashboards for real-time and historical data visualization in an anomaly detection system.",
        de: "Entwicklung von React- und TypeScript-Dashboards für Echtzeit- und historische Datenvisualisierung in einem Anomalie-Erkennungssystem.",
      },
      {
        en: "Developed interactive, chart-driven UI components for data monitoring and user interaction.",
        de: "Entwicklung interaktiver, diagrammbasierter UI-Komponenten für Datenüberwachung und Benutzerinteraktion.",
      },
      {
        en: "Integrated REST APIs using Axios, handling asynchronous data and state updates.",
        de: "Integration von REST-APIs mit Axios einschließlich asynchroner Datenverarbeitung und State-Updates.",
      },
      {
        en: "Implemented dashboard features including filtering, live updates, and user-driven views.",
        de: "Implementierung von Dashboard-Funktionen wie Filterung, Live-Updates und benutzergetriebenen Ansichten.",
      },
      {
        en: "Created reusable components with Material UI for consistent and scalable UI patterns.",
        de: "Entwicklung wiederverwendbarer Komponenten mit Material UI für konsistente und skalierbare UI-Muster.",
      },
      {
        en: "Migrated class-based React components to hooks, improving maintainability and consistency.",
        de: "Migration klassenbasierter React-Komponenten zu Hooks zur Verbesserung von Wartbarkeit und Konsistenz.",
      },
      {
        en: "Collaborated in Agile Scrum teams using Git for version control and feature delivery.",
        de: "Zusammenarbeit in Agile-Scrum-Teams unter Einsatz von Git für Versionskontrolle und Feature-Delivery.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Material UI",
      "Axios",
      "REST APIs",
      "Recharts",
      "Git",
      "Agile Scrum",
    ],
  },
  {
    id: "ul-developer-analyst",
    kind: "work",
    role: { en: "Developer Analyst", de: "Developer Analyst" },
    org: "UL Technology Solutions (P) Ltd",
    location: "Calicut, India",
    start: "2019-10",
    end: "2021-08",
    website: "https://www.ultsglobal.com/",
    logo: { src: "/images/ults.svg", alt: "ULTS" },
    highlights: [
      {
        en: "Took ownership of end-to-end frontend development in a startup environment using React (JavaScript).",
        de: "Verantwortung für die End-to-End-Entwicklung von Frontend-Features in einem Startup-Umfeld mit React (JavaScript).",
      },
      {
        en: "Built data-driven dashboards with map-based interactions and API-driven UI.",
        de: "Entwicklung datengetriebener Dashboards mit kartenbasierten Interaktionen und API-gesteuerter Benutzeroberfläche.",
      },
      {
        en: "Integrated REST APIs using Axios and managed state with Redux for dynamic data workflows.",
        de: "Integration von REST-APIs mit Axios und Verwaltung des States mit Redux für dynamische Daten-Workflows.",
      },
      {
        en: "Designed responsive UI using HTML, CSS, and Bootstrap, contributing to the transition toward Material UI.",
        de: "Entwicklung responsiver Benutzeroberflächen mit HTML, CSS und Bootstrap sowie Mitwirkung beim Übergang zu Material UI.",
      },
      {
        en: "Collaborated with clients for requirement gathering, feature discussions, and product demos.",
        de: "Zusammenarbeit mit Kund:innen bei Anforderungsaufnahme, Feature-Abstimmungen und Produktdemos.",
      },
      {
        en: "Delivered features and bug fixes in a fast-paced, client-driven environment with rapid release cycles.",
        de: "Umsetzung von Features und Bugfixes in einem schnellen, kundengetriebenen Umfeld mit kurzen Release-Zyklen.",
      },
      {
        en: "Migrated class-based React components to hooks and used SQL (pgAdmin) for data querying and validation.",
        de: "Migration klassenbasierter React-Komponenten zu Hooks sowie Nutzung von SQL (pgAdmin) für Datenabfragen und Validierung.",
      },
    ],
    stack: [
      "React",
      "JavaScript",
      "Hooks",
      "Redux",
      "Axios",
      "REST APIs",
      "Material UI",
      "Bootstrap",
      "HTML",
      "CSS",
      "SQL",
      "Git",
    ],
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
    logo: { src: "/images/rptu.jpg", alt: "RPTU" },
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
    logo: { src: "/images/ktu.webp", alt: "KTU" },
    highlights: [
      {
        en: "CGPA: 8.67/10 (German grade: 1.7). University rank holder (9th rank).",
        de: "CGPA: 8,67/10 (Deutsche Note: 1,7). Hochschul-Rang (9. Rang).",
      },
    ],
  },
]
