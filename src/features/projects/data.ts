import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: "osapiens-enterprise-platforms",
    title: {
      en: "osapiens Enterprise Platforms",
      de: "osapiens Enterprise Platforms",
    },
    summary: {
      en: "Enterprise-scale compliance and sustainability platforms with complex, form-driven workflows and shared UI systems.",
      de: "Enterprise-Plattformen für Compliance und Nachhaltigkeit mit komplexen, formulargetriebenen Workflows und gemeinsamen UI-Systemen.",
    },
    tags: ["enterprise", "compliance", "platforms"],
    stack: ["React", "TypeScript", "Monorepo", "i18n", "Vitest", "Playwright"],
    links: [],
    featured: true,
    caseStudy: {
      problem: {
        en: "Regulated, compliance-critical workflows required clear UX, stable releases, and consistent behavior across multiple platforms.",
        de: "Regulierte, compliance-kritische Workflows erforderten klare UX, stabile Releases und konsistentes Verhalten über mehrere Plattformen hinweg.",
      },
      solution: {
        en: "Built reusable, theme-aware components from Figma, strengthened form flows (validation, conditional logic), integrated REST APIs, and supported i18n across shared packages in a pnpm/Turborepo monorepo.",
        de: "Wiederverwendbare, theme-fähige Komponenten aus Figma umgesetzt, Formular-Flows (Validierung, bedingte Logik) verbessert, REST APIs integriert und i18n über gemeinsame Pakete im pnpm/Turborepo-Monorepo unterstützt.",
      },
      impact: {
        en: "Improved reuse across products, reduced regressions through automated testing, and enabled faster iteration on quality-critical features.",
        de: "Mehr Wiederverwendung über Produkte hinweg, weniger Regressionen durch automatisierte Tests und schnellere Iteration bei qualitätskritischen Features.",
      },
    },
  },
  {
    id: "emtab-production-monitoring",
    title: {
      en: "EMTab – Production Monitoring System",
      de: "EMTab – Produktions-Monitoring-System",
    },
    summary: {
      en: "Real-time manufacturing monitoring dashboards with anomaly detection views and data-heavy visualizations.",
      de: "Echtzeit-Dashboards für Fertigungs-Monitoring mit Anomalie-Erkennung und datenintensiven Visualisierungen.",
    },
    tags: ["dashboard", "manufacturing", "visualization"],
    stack: ["React", "JavaScript", "Material UI", "Axios", "Charts"],
    links: [],
    caseStudy: {
      problem: {
        en: "Production teams needed real-time visibility into anomalies and KPIs without losing trust in the dashboard’s accuracy.",
        de: "Produktionsteams benötigten Echtzeit-Transparenz für Anomalien und KPIs, ohne das Vertrauen in die Genauigkeit der Dashboards zu verlieren.",
      },
      solution: {
        en: "Delivered responsive dashboard components and chart-based analytics; handled async API states, validation, and error handling for reliable monitoring workflows.",
        de: "Responsive Dashboard-Komponenten und chart-basierte Analysen umgesetzt; asynchrone API-States, Validierung und Fehlerbehandlung für zuverlässige Monitoring-Workflows integriert.",
      },
      impact: {
        en: "Faster operational decision-making through clearer anomaly views and more stable daily monitoring experience.",
        de: "Schnellere operative Entscheidungen durch klarere Anomalie-Ansichten und stabileres tägliches Monitoring.",
      },
    },
  },
  {
    id: "ipms-property-management",
    title: {
      en: "IPMS – Intelligent Property Management System",
      de: "IPMS – Intelligentes Property-Management-System",
    },
    summary: {
      en: "Government-facing portal combining GIS-based map interaction with record-centric workflows and large-scale data handling.",
      de: "Behörden-Portal mit GIS-Map-Interaktion, record-basierten Workflows und großskaliger Datenverarbeitung.",
    },
    tags: ["public-sector", "gis", "data"],
    stack: ["React (Class)", "Redux", "Bootstrap", "Axios", "SQL"],
    links: [],
    caseStudy: {
      problem: {
        en: "Public-sector workflows demanded robust data consistency and location-based interactions over large datasets.",
        de: "Public-Sector-Workflows verlangten robuste Datenkonsistenz und ortsbasierte Interaktion über große Datensätze hinweg.",
      },
      solution: {
        en: "Owned end-to-end UI features including REST integration and Redux state, and supported data quality via SQL queries and cleanup for reliable map-driven workflows.",
        de: "End-to-end UI-Features inkl. REST-Integration und Redux-State verantwortet sowie Datenqualität durch SQL-Abfragen und Cleanup für zuverlässige map-basierte Workflows unterstützt.",
      },
      impact: {
        en: "More dependable record workflows and clearer map-based selection and contextual visualization for users.",
        de: "Zuverlässigere Record-Workflows und klarere map-basierte Auswahl sowie kontextuelle Visualisierung für Nutzer:innen.",
      },
    },
  },
]
