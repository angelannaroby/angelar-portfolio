import type { Project } from "../types"

export const projects: Project[] = [
  {
    id: "osapiens-brandos",
    title: {
      en: "BrandOs",
      de: "BrandOs",
    },
    summary: {
      en: "A brand-protection platform for verifying product authenticity and unlocking item-level product information.",
      de: "Eine Brand-Protection-Plattform zur Prüfung der Produktauthentizität und zur Bereitstellung artikelbezogener Produktinformationen.",
    },
    tags: ["enterprise", "traceability", "brand-protection"],
    stack: ["React", "TypeScript", "Monorepo", "i18n", "Vitest", "Playwright"],
    links: [],
    category: "professional",
    image: {
      src: "/images/brandos.png",
      alt: {
        en: "Brand protection dashboard preview",
        de: "Vorschau des Brand-Protection-Dashboards",
      },
    },
    details: {
      whatItDoes: {
        en: "BrandOs helps companies protect products against counterfeiting by linking products or packaging to unique codes that can be scanned or entered to verify authenticity and access item-specific information.",
        de: "BrandOs hilft Unternehmen, Produkte vor Fälschungen zu schützen, indem Produkte oder Verpackungen mit eindeutigen Codes verknüpft werden, die gescannt oder eingegeben werden können, um die Echtheit zu prüfen und artikelbezogene Informationen abzurufen.",
      },
      keyCapabilities: {
        en: "It combines product authentication, traceability, item-level information, scan-driven workflows, alerts for recalls or counterfeit detection, and customer-facing interactions such as promotions and engagement experiences.",
        de: "Die Lösung kombiniert Produktauthentifizierung, Rückverfolgbarkeit, artikelbezogene Informationen, scanbasierte Workflows, Warnungen für Rückrufe oder Fälschungserkennung sowie kundennahe Interaktionen wie Aktionen und Engagement-Erlebnisse.",
      },
      whyItMatters: {
        en: "It gives brands better transparency across product journeys, helps detect grey-market or counterfeit activity, and creates more trustworthy customer interactions around every scanned item.",
        de: "Sie schafft mehr Transparenz entlang der Produktreise, hilft bei der Erkennung von Grau- oder Fälschungsmärkten und ermöglicht vertrauenswürdigere Kundeninteraktionen rund um jeden Scan.",
      },
    },
  },

  {
    id: "osapiens-ftrace",
    title: {
      en: "FTrace",
      de: "FTrace",
    },
    summary: {
      en: "A food traceability platform for tracking fresh products across the supply chain from origin to shelf.",
      de: "Eine Food-Traceability-Plattform zur Nachverfolgung frischer Produkte entlang der Lieferkette vom Ursprung bis ins Regal.",
    },
    tags: ["enterprise", "food-traceability", "supply-chain"],
    stack: ["React", "TypeScript", "Monorepo", "i18n", "Vitest", "Playwright"],
    links: [],
    category: "professional",
    image: {
      src: "/images/ftrace.png",
      alt: {
        en: "Food traceability dashboard preview",
        de: "Vorschau des Food-Traceability-Dashboards",
      },
    },
    details: {
      whatItDoes: {
        en: "FTrace enables end-to-end food traceability across the supply chain, helping businesses track fresh products such as meat, fish, and seafood from origin to consumer.",
        de: "FTrace ermöglicht eine durchgängige Rückverfolgbarkeit von Lebensmitteln entlang der Lieferkette und hilft Unternehmen dabei, Frischwaren wie Fleisch, Fisch und Meeresfrüchte vom Ursprung bis zum Verbraucher nachzuverfolgen.",
      },
      keyCapabilities: {
        en: "It supports full supply-chain visibility, standards-based traceability data exchange, compliance workflows, and consumer-facing transparency with origin, processing, and transport information.",
        de: "Die Lösung unterstützt vollständige Sichtbarkeit in der Lieferkette, standardisierten Austausch von Traceability-Daten, Compliance-Workflows sowie verbrauchernahe Transparenz mit Informationen zu Herkunft, Verarbeitung und Transport.",
      },
      whyItMatters: {
        en: "It helps organizations strengthen compliance readiness, reduce manual effort, improve supplier collaboration, reduce waste through better batch visibility, and build consumer trust with verifiable product data.",
        de: "Sie hilft Unternehmen dabei, Compliance-Anforderungen besser zu erfüllen, manuellen Aufwand zu reduzieren, die Zusammenarbeit mit Lieferanten zu verbessern, Abfälle durch bessere Chargentransparenz zu verringern und Vertrauen durch verifizierbare Produktdaten aufzubauen.",
      },
    },
  },

  {
    id: "osapiens-orca",
    title: {
      en: "Orca",
      de: "Orca",
    },
    summary: {
      en: "A medical device data platform for managing compliant product information and sharing it with authorities and trading partners.",
      de: "Eine Plattform für Medizinproduktdaten zur Verwaltung konformer Produktinformationen und deren Weitergabe an Behörden und Handelspartner.",
    },
    tags: ["enterprise", "medical-devices", "compliance"],
    stack: ["React", "TypeScript", "Monorepo", "i18n", "Vitest", "Playwright"],
    links: [],
    category: "professional",
    image: {
      src: "/images/orca.png",
      alt: {
        en: "Medical devices platform preview",
        de: "Vorschau der Medizinprodukte-Plattform",
      },
    },
    details: {
      whatItDoes: {
        en: "Orca supports manufacturers in managing medical device product data and syndicating that information to regulatory databases, hospitals, and trading partners worldwide.",
        de: "Orca unterstützt Hersteller bei der Verwaltung von Medizinproduktdaten und bei der Syndizierung dieser Informationen an regulatorische Datenbanken, Krankenhäuser und Handelspartner weltweit.",
      },
      keyCapabilities: {
        en: "It supports structured product-data aggregation, validation, publication, and syndication while aligning data with global requirements such as UDI, EUDAMED, GUDID, and GDSN.",
        de: "Die Lösung unterstützt strukturierte Aggregation, Validierung, Publikation und Syndizierung von Produktdaten und richtet diese an globale Anforderungen wie UDI, EUDAMED, GUDID und GDSN aus.",
      },
      whyItMatters: {
        en: "It reduces friction in regulatory data exchange, improves data quality and consistency, lowers manual effort, and helps teams maintain trusted and compliant product information across markets.",
        de: "Sie reduziert Reibung im regulatorischen Datenaustausch, verbessert Datenqualität und Konsistenz, senkt manuellen Aufwand und hilft Teams, vertrauenswürdige und konforme Produktinformationen über Märkte hinweg zu pflegen.",
      },
    },
  },

  {
    id: "emtab-machine-anomaly-detection",
    title: {
      en: "EMTab",
      de: "EMTab",
    },
    summary: {
      en: "A manufacturing monitoring platform for machine data visualization, anomaly detection, alarms, and production analytics.",
      de: "Eine Monitoring-Plattform für die Fertigung mit Maschinen-Datenvisualisierung, Anomalieerkennung, Alarmen und Produktionsanalysen.",
    },
    tags: ["manufacturing", "monitoring", "anomaly-detection"],
    stack: ["React", "TypeScript", "InfluxDB", "Charts", "REST API"],
    links: [],
    category: "professional",
    image: {
      src: "/images/emtab.png",
      alt: {
        en: "Machine anomaly detection dashboard preview",
        de: "Vorschau des Dashboards zur Maschinenanomalie-Erkennung",
      },
    },
    details: {
      whatItDoes: {
        en: "EMTab is a web-based manufacturing management platform used to monitor production machines, visualize machine and product data, identify anomalies, and support predictive maintenance workflows.",
        de: "EMTab ist eine webbasierte Manufacturing-Management-Plattform zur Überwachung von Produktionsmaschinen, zur Visualisierung von Maschinen- und Produktdaten, zur Erkennung von Anomalien und zur Unterstützung prädiktiver Wartungsprozesse.",
      },
      keyCapabilities: {
        en: "It provides custom dashboards, real-time and historical monitoring, alarms and notifications, cycle-time analysis, audit trail, machine data visualization, line-audit workflows, export features, and backup and restore support.",
        de: "Die Lösung bietet individuelle Dashboards, Echtzeit- und historische Überwachung, Alarme und Benachrichtigungen, Cycle-Time-Analysen, Audit Trail, Maschinen-Datenvisualisierung, Line-Audit-Workflows, Exportfunktionen sowie Backup- und Restore-Unterstützung.",
      },
      whyItMatters: {
        en: "It helps teams reduce downtime, monitor production conditions continuously, surface issues earlier, and make operational decisions faster through clearer data visibility and more efficient analytics.",
        de: "Sie hilft Teams, Ausfallzeiten zu reduzieren, Produktionsbedingungen kontinuierlich zu überwachen, Probleme früher sichtbar zu machen und operative Entscheidungen durch bessere Datensichtbarkeit und effizientere Analysen schneller zu treffen.",
      },
    },
  },

  {
    id: "ipms-property-management",
    title: {
      en: "IPMS",
      de: "IPMS",
    },
    summary: {
      en: "A GIS-powered intelligent property management system for map-based property insights and operational decision-making.",
      de: "Ein GIS-gestütztes intelligentes Property-Management-System für kartenbasierte Immobilien-Einblicke und operative Entscheidungen.",
    },
    tags: ["gis", "property-management", "maps"],
    stack: ["React", "TypeScript", "Maps", "GIS", "REST API"],
    links: [],
    category: "professional",
    image: {
      src: "/images/ipms.png",
      alt: {
        en: "Property management dashboard preview",
        de: "Vorschau des Property-Management-Dashboards",
      },
    },
    details: {
      whatItDoes: {
        en: "IPMS is an intelligent property management system that combines GIS and business intelligence to support property-related data exploration and map-based workflows.",
        de: "IPMS ist ein intelligentes Property-Management-System, das GIS und Business Intelligence kombiniert, um die Analyse von Immobiliendaten und kartenbasierte Workflows zu unterstützen.",
      },
      keyCapabilities: {
        en: "It brings property records, location intelligence, and visual map interactions together in one system so users can inspect assets, navigate property data, and access operational details more intuitively.",
        de: "Die Lösung vereint Immobiliendaten, Standortintelligenz und visuelle Karteninteraktionen in einem System, sodass Nutzer Assets prüfen, Immobiliendaten durchsuchen und operative Details intuitiver abrufen können.",
      },
      whyItMatters: {
        en: "By connecting geospatial context with property information, it supports faster understanding, cleaner decision-making, and a more practical workflow for property and estate management teams.",
        de: "Durch die Verknüpfung von geografischem Kontext mit Immobiliendaten unterstützt sie ein schnelleres Verständnis, klarere Entscheidungen und einen praktischeren Workflow für Property- und Estate-Management-Teams.",
      },
    },
  },

  {
    id: "portfolio-website",
    title: {
      en: "Developer Portfolio",
      de: "Developer Portfolio",
    },
    summary: {
      en: "A bilingual personal portfolio built to present projects, experience, and skills through a polished, recruiter-friendly frontend.",
      de: "Ein zweisprachiges persönliches Portfolio, das Projekte, Erfahrung und Skills über ein modernes und recruiter-freundliches Frontend präsentiert.",
    },
    tags: ["portfolio", "frontend", "personal-branding"],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Router",
      "i18n",
      "Vite",
    ],
    links: [],
    category: "personal",
    image: {
      src: "/images/portfolio.png",
      alt: {
        en: "Portfolio project preview",
        de: "Vorschau des Portfolio-Projekts",
      },
    },
    caseStudy: {
      problem: {
        en: "I wanted a portfolio that felt professional, modern, and personal at the same time, while still being fast, responsive, and easy to maintain.",
        de: "Ich wollte ein Portfolio, das gleichzeitig professionell, modern und persönlich wirkt und dabei schnell, responsiv und leicht wartbar bleibt.",
      },
      solution: {
        en: "I designed and built a bilingual portfolio with structured routes, reusable UI components, polished project cards, theme-aware styling, and focused content for both professional and personal work.",
        de: "Ich habe ein zweisprachiges Portfolio mit klaren Routen, wiederverwendbaren UI-Komponenten, ausgereiften Projektkarten, theme-fähigem Styling und fokussierten Inhalten für berufliche und persönliche Projekte entworfen und umgesetzt.",
      },
      impact: {
        en: "The result is a cleaner and more intentional presentation of my work that is easier for recruiters to scan, while also giving me a flexible foundation to keep improving over time.",
        de: "Das Ergebnis ist eine klarere und bewusstere Präsentation meiner Arbeit, die für Recruiter leichter erfassbar ist und mir zugleich eine flexible Grundlage für spätere Erweiterungen bietet.",
      },
    },
  },
]
