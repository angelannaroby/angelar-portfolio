import type { Project } from "../types"

export const projects: Project[] = [
  {
    id: "osapiens-orca",
    title: {
      en: "ORCA",
      de: "ORCA",
    },
    summary: {
      en: "A regulatory compliance platform for managing and exchanging structured medical device data across global standards like UDI and EUDAMED.",
      de: "Eine regulatorische Compliance-Plattform zur Verwaltung und zum Austausch strukturierter Medizinproduktdaten nach globalen Standards wie UDI und EUDAMED.",
    },
    tags: ["enterprise", "medical-devices", "compliance"],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "React Hook Form",
      "Zod",
      "Vitest",
      "Monorepo",
    ],
    links: [],
    category: "professional",
    image: {
      src: "/images/orca.png",
      alt: {
        en: "ORCA medical device platform preview",
        de: "Vorschau der ORCA-Medizinprodukteplattform",
      },
    },
    content: {
      intro: {
        en: "A regulatory compliance platform for managing and exchanging structured medical device data across global standards like UDI and EUDAMED.",
        de: "Eine regulatorische Compliance-Plattform zur Verwaltung und zum Austausch strukturierter Medizinproduktdaten nach globalen Standards wie UDI und EUDAMED.",
      },
      story: [
        {
          en: "ORCA operates in one of the most demanding domains: medical device compliance. It helps manufacturers manage product data and exchange it with regulatory systems such as EUDAMED, GUDID, and GDSN.",
          de: "ORCA bewegt sich in einem der anspruchsvollsten Bereiche: der Medizinprodukte-Compliance. Die Plattform hilft Herstellern dabei, Produktdaten zu verwalten und mit regulatorischen Systemen wie EUDAMED, GUDID und GDSN auszutauschen.",
        },
        {
          en: "The challenge is not only handling large amounts of structured data, but making sure that data stays accurate, validated, and compliant across different systems and regions. The platform supports workflows such as aggregation, validation, submission, and synchronization, all within strict regulatory requirements. That makes the user experience especially important, because users need to enter and verify sensitive data with confidence and without errors.",
          de: "Die Herausforderung liegt nicht nur in der Verarbeitung großer Mengen strukturierter Daten, sondern auch darin, diese Daten über verschiedene Systeme und Regionen hinweg korrekt, validiert und regelkonform zu halten. Die Plattform unterstützt Workflows wie Aggregation, Validierung, Übermittlung und Synchronisierung – alles unter strengen regulatorischen Anforderungen. Dadurch wird die User Experience besonders wichtig, weil Nutzer sensible Daten sicher und möglichst fehlerfrei eingeben und prüfen müssen.",
        },
      ],
      contribution: {
        en: `I worked on the frontend implementation of compliance-driven workflows, especially around multi-step forms, validation, and structured data-entry interfaces. Using React Hook Form and schema validation, I helped make sure data was checked properly before submission.

I also contributed to reusable, type-safe UI components and shared utilities within the monorepo, which improved consistency and reduced duplication across modules.

On top of that, I worked on API-connected views and error handling so users received clear feedback when something went wrong. My work helped turn complex regulatory processes into UI flows that felt more structured and manageable in day-to-day use.`,
        de: `Ich habe an der Frontend-Umsetzung compliance-getriebener Workflows gearbeitet, insbesondere rund um mehrstufige Formulare, Validierung und strukturierte Dateneingabe-Oberflächen. Mit React Hook Form und Schema-Validierung habe ich dazu beigetragen, dass Daten vor der Übermittlung zuverlässig geprüft werden.

Außerdem habe ich zu wiederverwendbaren, typsicheren UI-Komponenten und gemeinsamen Utilities im Monorepo beigetragen, was die Konsistenz verbessert und Duplikate zwischen Modulen reduziert hat.

Darüber hinaus habe ich an API-verbundenen Ansichten und am Error Handling gearbeitet, damit Nutzer im Fehlerfall klares Feedback erhalten. Meine Arbeit hat geholfen, komplexe regulatorische Prozesse in UI-Abläufe zu übersetzen, die sich im Alltag strukturierter und besser handhaben lassen.`,
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
      en: "A supply-chain traceability platform that tracks food products from origin to consumer, ensuring transparency, safety, and compliance.",
      de: "Eine Supply-Chain-Traceability-Plattform, die Lebensmittel vom Ursprung bis zum Verbraucher nachverfolgt und so Transparenz, Sicherheit und Compliance unterstützt.",
    },
    tags: ["enterprise", "food-traceability", "supply-chain"],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "React Query",
      "Vitest",
      "Playwright",
      "Monorepo",
    ],
    links: [],
    category: "professional",
    image: {
      src: "/images/ftrace.png",
      alt: {
        en: "FTrace dashboard preview",
        de: "Vorschau des FTrace-Dashboards",
      },
    },
    content: {
      intro: {
        en: "A supply-chain traceability platform that tracks food products from origin to consumer, ensuring transparency, safety, and compliance.",
        de: "Eine Supply-Chain-Traceability-Plattform, die Lebensmittel vom Ursprung bis zum Verbraucher nachverfolgt und so Transparenz, Sicherheit und Compliance unterstützt.",
      },
      story: [
        {
          en: "FTrace is built to bring more transparency into food supply chains, where knowing the origin and path of a product matters for compliance, safety, and trust. The platform brings together data from different stages such as production, processing, and logistics, and turns it into one connected traceability view.",
          de: "FTrace wurde entwickelt, um mehr Transparenz in Lebensmittel-Lieferketten zu bringen, in denen Herkunft und Weg eines Produkts für Compliance, Sicherheit und Vertrauen entscheidend sind. Die Plattform führt Daten aus verschiedenen Phasen wie Produktion, Verarbeitung und Logistik zusammen und macht daraus eine verknüpfte Traceability-Ansicht.",
        },
        {
          en: "Unlike systems that treat information as isolated records, FTrace helps users understand how data points relate across the supply chain. That becomes especially important during recalls or audits, where fast access to accurate and structured information can directly affect decision-making and risk management.",
          de: "Anders als Systeme, die Informationen als isolierte Datensätze behandeln, hilft FTrace dabei, Zusammenhänge entlang der Lieferkette sichtbar zu machen. Das ist besonders bei Rückrufen oder Audits wichtig, wenn ein schneller Zugriff auf genaue und strukturierte Informationen direkten Einfluss auf Entscheidungen und Risikomanagement haben kann.",
        },
      ],
      contribution: {
        en: `I contributed to the frontend development of traceability workflows, focusing on making complex supply-chain data easier to navigate and understand. I worked on reusable UI components and structured, data-heavy views that helped users move from high-level transparency information to more detailed product-level insights.

I also worked with API-driven and template-based rendering patterns, helping keep the UI flexible and maintainable as data and business requirements evolved. Alongside that, I supported stateful frontend behavior and data synchronization in a monorepo setup, where consistency across shared packages mattered.

I also took part in testing efforts with Vitest and Playwright to help reduce regressions and keep important user flows stable.`,
        de: `Ich habe zur Frontend-Entwicklung von Traceability-Workflows beigetragen, mit dem Fokus, komplexe Lieferkettendaten leichter navigierbar und verständlicher zu machen. Dabei habe ich an wiederverwendbaren UI-Komponenten und strukturierten, datenintensiven Ansichten gearbeitet, die Nutzern den Wechsel von allgemeinen Transparenzinformationen zu detaillierten Produktinformationen erleichtern.

Außerdem habe ich mit API-gesteuerten und template-basierten Rendering-Mustern gearbeitet und so dazu beigetragen, die UI flexibel und wartbar zu halten, auch wenn sich Daten und fachliche Anforderungen weiterentwickelt haben. Gleichzeitig habe ich stateful Frontend-Verhalten und Datensynchronisierung in einem Monorepo-Setup unterstützt, in dem Konsistenz über gemeinsame Pakete hinweg wichtig war.

Zusätzlich war ich an Testing-Aktivitäten mit Vitest und Playwright beteiligt, um Regressionen zu reduzieren und wichtige User Flows stabil zu halten.`,
      },
    },
  },

  {
    id: "osapiens-brandos",
    title: {
      en: "BrandOS",
      de: "BrandOS",
    },
    summary: {
      en: "A brand protection platform for product authentication, traceability, and secure customer interaction across global supply chains.",
      de: "Eine Brand-Protection-Plattform für Produktauthentifizierung, Rückverfolgbarkeit und sichere Kundeninteraktion entlang globaler Lieferketten.",
    },
    tags: ["enterprise", "traceability", "brand-protection"],
    stack: [
      "React",
      "TypeScript",
      "Material UI",
      "MobX",
      "React Router",
      "i18n",
      "REST APIs",
    ],
    links: [],
    category: "professional",
    image: {
      src: "/images/brandos.png",
      alt: {
        en: "BrandOS dashboard preview",
        de: "Vorschau des BrandOS-Dashboards",
      },
    },
    content: {
      intro: {
        en: "A brand protection platform enabling product authentication, traceability, and secure customer interaction across global supply chains.",
        de: "Eine Brand-Protection-Plattform, die Produktauthentifizierung, Rückverfolgbarkeit und sichere Kundeninteraktion entlang globaler Lieferketten ermöglicht.",
      },
      story: [
        {
          en: "BrandOS sits at the intersection of product authenticity, traceability, and customer trust. Companies can assign digital identities to physical products, which makes it possible to verify authenticity, follow product journeys, and respond to issues such as counterfeiting or grey-market distribution.",
          de: "BrandOS bewegt sich an der Schnittstelle von Produktauthentizität, Rückverfolgbarkeit und Kundenvertrauen. Unternehmen können physischen Produkten digitale Identitäten zuweisen, um Echtheit zu prüfen, Produktwege nachzuvollziehen und auf Themen wie Fälschungen oder Graumarktvertrieb zu reagieren.",
        },
        {
          en: "What makes the platform challenging is not only the amount of data, but also how that data is used. Teams rely on it for real operational decisions, so the interface has to present detailed, connected information in a way that stays clear and actionable. The product combines compliance-heavy workflows with usability, so even non-technical users can work confidently with complex product data and traceability events.",
          de: "Herausfordernd ist nicht nur die Menge an Daten, sondern auch die Art, wie diese Daten genutzt werden. Teams treffen damit echte operative Entscheidungen, deshalb muss die Oberfläche detaillierte und verknüpfte Informationen so darstellen, dass sie klar und handhabbar bleiben. Das Produkt verbindet stark compliance-geprägte Workflows mit guter Nutzbarkeit, damit auch nicht-technische Nutzer sicher mit komplexen Produktdaten und Traceability-Ereignissen arbeiten können.",
        },
      ],
      contribution: {
        en: `I worked on building and refining frontend features in a large React + TypeScript enterprise application, with a strong focus on reusable UI patterns and workflow-driven interfaces. I translated Figma designs into scalable components aligned with the design system, helping keep the experience consistent across different areas of the product.

A big part of my work was around form-heavy, data-driven interfaces where users interact with complex product information. That included validation logic, REST API integration, and structuring workflows in a way that felt reliable and intuitive.

I also contributed to reusable component patterns, supported data-heavy views such as dashboards and reporting flows, and helped maintain frontend quality through testing, code reviews, and consistent engineering practices.`,
        de: `Ich habe an der Entwicklung und Weiterentwicklung von Frontend-Features in einer großen React- und TypeScript-Enterprise-Anwendung gearbeitet, mit starkem Fokus auf wiederverwendbare UI-Muster und workflow-orientierte Oberflächen. Dabei habe ich Figma-Designs in skalierbare Komponenten überführt, die sich am Design System orientieren und für Konsistenz in verschiedenen Produktbereichen sorgen.

Ein großer Teil meiner Arbeit lag in formularlastigen, datengetriebenen Oberflächen, in denen Nutzer mit komplexen Produktinformationen arbeiten. Dazu gehörten Validierungslogik, REST-API-Integration und die Strukturierung von Workflows, damit sie verlässlich und intuitiv wirken.

Außerdem habe ich zu wiederverwendbaren Komponentenmustern beigetragen, datenintensive Ansichten wie Dashboards und Reporting-Flows unterstützt und zur Frontend-Qualität durch Tests, Code Reviews und konsistente Engineering-Praktiken beigetragen.`,
      },
    },
  },

  {
    id: "emtab-machine-monitoring",
    title: {
      en: "EMTab",
      de: "EMTab",
    },
    summary: {
      en: "A real-time production monitoring system for machine analytics, anomaly detection, and predictive maintenance.",
      de: "Ein Echtzeit-Produktionsmonitoring-System für Maschinenanalysen, Anomalieerkennung und vorausschauende Wartung.",
    },
    tags: ["manufacturing", "monitoring", "real-time-data"],
    stack: [
      "React",
      "JavaScript",
      "Material UI",
      "Charts",
      "REST APIs",
      "Axios",
    ],
    links: [],
    category: "professional",
    image: {
      src: "/images/emtab.png",
      alt: {
        en: "EMTab dashboard preview",
        de: "Vorschau des EMTab-Dashboards",
      },
    },
    content: {
      intro: {
        en: "A real-time production monitoring system for machine analytics, anomaly detection, and predictive maintenance.",
        de: "Ein Echtzeit-Produktionsmonitoring-System für Maschinenanalysen, Anomalieerkennung und vorausschauende Wartung.",
      },
      story: [
        {
          en: "EMTab is a manufacturing-focused platform that collects machine data and turns it into practical insights through dashboards and analytics. It helps operators monitor production lines, spot anomalies early, and make more informed decisions to improve efficiency.",
          de: "EMTab ist eine Plattform für die Fertigung, die Maschinendaten erfasst und über Dashboards und Analysen in praktische Erkenntnisse übersetzt. Sie hilft Operatoren dabei, Produktionslinien zu überwachen, Anomalien früh zu erkennen und fundiertere Entscheidungen zur Effizienzsteigerung zu treffen.",
        },
        {
          en: "Because the system works with continuous streams of data, performance, visual clarity, and usability all matter. The goal is not only to show machine data, but to help teams reduce downtime and move toward more proactive maintenance instead of reacting only after issues appear.",
          de: "Da das System mit kontinuierlichen Datenströmen arbeitet, sind Performance, visuelle Klarheit und Nutzbarkeit gleichermaßen wichtig. Ziel ist es nicht nur, Maschinendaten anzuzeigen, sondern Teams dabei zu helfen, Ausfallzeiten zu verringern und Wartung proaktiver statt rein reaktiv zu gestalten.",
        },
      ],
      contribution: {
        en: `I developed interactive dashboards and data-visualization components that helped users monitor machine performance and identify anomalies more easily. A large part of my work was around chart-based UI components, making sure data was presented clearly and updated efficiently.

I also built reusable UI components and responsive layouts, which improved usability across different screen sizes used in production environments.

In addition, I handled API integration and asynchronous data flows to keep communication between frontend and backend smooth and reliable. I was actively involved in Agile workflows as well, collaborating with stakeholders and regularly presenting feature updates.`,
        de: `Ich habe interaktive Dashboards und Datenvisualisierungs-Komponenten entwickelt, mit denen Nutzer Maschinenleistung leichter überwachen und Anomalien erkennen können. Ein großer Teil meiner Arbeit drehte sich um chart-basierte UI-Komponenten, damit Daten klar dargestellt und effizient aktualisiert werden.

Außerdem habe ich wiederverwendbare UI-Komponenten und responsive Layouts entwickelt, was die Nutzbarkeit auf unterschiedlichen Bildschirmgrößen in Produktionsumgebungen verbessert hat.

Zusätzlich habe ich API-Integration und asynchrone Datenflüsse umgesetzt, damit die Kommunikation zwischen Frontend und Backend reibungslos und verlässlich bleibt. Ich war außerdem aktiv in Agile-Workflows eingebunden, habe mit Stakeholdern zusammengearbeitet und regelmäßig Feature-Updates vorgestellt.`,
      },
    },
  },

  {
    id: "ipms-property-system",
    title: {
      en: "IPMS",
      de: "IPMS",
    },
    summary: {
      en: "A GIS-powered decision-support system for managing and analyzing property and demographic data.",
      de: "Ein GIS-gestütztes Entscheidungsunterstützungssystem zur Verwaltung und Analyse von Immobilien- und demografischen Daten.",
    },
    tags: ["gis", "property-management", "maps"],
    stack: [
      "React",
      "JavaScript",
      "Redux",
      "ArcGIS",
      "HTML",
      "CSS",
      "Bootstrap",
      "REST APIs",
    ],
    links: [],
    category: "professional",
    image: {
      src: "/images/ipms.png",
      alt: {
        en: "IPMS property system preview",
        de: "Vorschau des IPMS-Property-Systems",
      },
    },
    content: {
      intro: {
        en: "A GIS-powered decision-support system for managing and analyzing property and demographic data.",
        de: "Ein GIS-gestütztes Entscheidungsunterstützungssystem zur Verwaltung und Analyse von Immobilien- und demografischen Daten.",
      },
      story: [
        {
          en: "IPMS is a government-facing platform that combines property records with geospatial data to support better decision-making. Instead of looking at properties as isolated entries, users can understand them in geographic context, including location, surroundings, and socio-economic factors.",
          de: "IPMS ist eine Plattform für den öffentlichen Bereich, die Immobiliendaten mit Geodaten kombiniert, um bessere Entscheidungen zu unterstützen. Anstatt Immobilien als isolierte Einträge zu betrachten, können Nutzer sie im geografischen Kontext verstehen – einschließlich Lage, Umgebung und sozioökonomischer Faktoren.",
        },
        {
          en: "By bringing GIS together with business data, the platform supports more intuitive workflows, especially in large-scale public-sector data management. The value comes from helping users explore and analyze property information in a way that feels visual, contextual, and practical.",
          de: "Durch die Verbindung von GIS mit fachlichen Daten unterstützt die Plattform intuitivere Workflows, besonders im großflächigen öffentlichen Datenmanagement. Der Mehrwert entsteht dadurch, dass Nutzer Immobiliendaten visuell, kontextbezogen und praxisnah erkunden und analysieren können.",
        },
      ],
      contribution: {
        en: `I worked on the frontend development of GIS-integrated interfaces, building features that combined map interactions with property-data visualization.

I implemented data-driven UI components and dashboards that allowed users to explore and analyze property information more efficiently. I also worked closely with backend and GIS teams to make sure data flow and spatial rendering were accurate.

Beyond development, I was involved in deployment, testing, and maintenance, which gave me experience taking ownership of features from implementation through to production support.`,
        de: `Ich habe an der Frontend-Entwicklung GIS-integrierter Oberflächen gearbeitet und Features umgesetzt, die Karteninteraktionen mit der Visualisierung von Immobiliendaten verbinden.

Ich habe datengetriebene UI-Komponenten und Dashboards entwickelt, mit denen Nutzer Property-Informationen effizienter erkunden und analysieren können. Außerdem habe ich eng mit Backend- und GIS-Teams zusammengearbeitet, um korrekten Datenfluss und präzises räumliches Rendering sicherzustellen.

Über die Entwicklung hinaus war ich auch in Deployment, Testing und Wartung eingebunden, wodurch ich Erfahrung gesammelt habe, Features von der Implementierung bis zur Produktionsunterstützung zu begleiten.`,
      },
    },
  },
  {
    id: "developer-portfolio",
    title: {
      en: "Developer Portfolio",
      de: "Developer Portfolio",
    },
    summary: {
      en: "A bilingual portfolio website built to present my projects, experience, and skills through a clean, recruiter-friendly frontend.",
      de: "Eine zweisprachige Portfolio-Website, die meine Projekte, Erfahrungen und Skills über ein klares und recruiter-freundliches Frontend präsentiert.",
    },
    tags: ["personal", "portfolio", "frontend"],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Router",
      "Vite",
      "i18n",
    ],
    links: [
      {
        href: "https://github.com/angelannaroby/angelar-portfolio",
        label: {
          en: "Source code",
          de: "Quellcode",
        },
      },
    ],
    category: "personal",
    image: {
      src: "/images/portfolio.jpg",
      alt: {
        en: "Portfolio website preview",
        de: "Vorschau der Portfolio-Website",
      },
    },
    content: {
      intro: {
        en: "A bilingual portfolio website built to present my projects, experience, and skills through a clean, recruiter-friendly frontend.",
        de: "Eine zweisprachige Portfolio-Website, die meine Projekte, Erfahrungen und Skills über ein klares und recruiter-freundliches Frontend präsentiert.",
      },
      story: [
        {
          en: "I wanted the portfolio to feel professional and intentional without becoming overloaded. The goal was not just to create a personal website, but to build something that feels structured, polished, and easy to navigate for recruiters and hiring teams.",
          de: "Ich wollte, dass sich das Portfolio professionell und bewusst gestaltet anfühlt, ohne überladen zu wirken. Das Ziel war nicht einfach, eine persönliche Website zu bauen, sondern etwas zu entwickeln, das für Recruiter und Hiring Teams strukturiert, hochwertig und leicht navigierbar ist.",
        },
        {
          en: "A big part of the work was shaping the UI and content together. That meant building reusable components, organizing routes and page structure carefully, supporting both English and German content, and making sure the design stays consistent across sections like projects, experience, and skills.",
          de: "Ein großer Teil der Arbeit bestand darin, UI und Inhalte gemeinsam zu gestalten. Dazu gehörten der Aufbau wiederverwendbarer Komponenten, eine saubere Routing- und Seitenstruktur, die Unterstützung von englischen und deutschen Inhalten sowie die Sicherstellung eines konsistenten Designs über Bereiche wie Projekte, Erfahrung und Skills hinweg.",
        },
      ],
      contribution: {
        en: `I designed and built the portfolio end to end, covering layout, component structure, theming, and bilingual content. The focus was on reusable UI patterns and a clean, maintainable codebase so it feels like a real frontend product rather than a static site.

I worked a lot on structuring pages and interactions in a way that is easy to scan for recruiters, while keeping the design consistent across projects, experience, and skills.

For parts of the process, I used AI as a support tool — mainly for exploring color palettes, refining gradients, and generating initial translation drafts. Everything was reviewed and adjusted manually to fit the overall design and ensure consistency.`,

        de: `Ich habe das Portfolio vollständig selbst umgesetzt – von Layout und Komponentenstruktur bis hin zu Theming und zweisprachigen Inhalten. Der Fokus lag auf wiederverwendbaren UI-Mustern und einer sauberen, wartbaren Codebasis, sodass sich das Projekt wie ein echtes Frontend-Produkt anfühlt.

Ein wichtiger Teil der Arbeit war die Strukturierung von Seiten und Interaktionen, sodass Inhalte für Recruiter schnell erfassbar sind und das Design über Projekte, Erfahrung und Skills hinweg konsistent bleibt.

Für einzelne Schritte habe ich AI als unterstützendes Werkzeug genutzt – vor allem zur Exploration von Farbpaletten, zum Verfeinern von Gradients und für erste Entwürfe von Übersetzungen. Alle Ergebnisse wurden anschließend manuell geprüft und angepasst.`,
      },
    },
  },
  {
    id: "ev-charging-simulation",
    title: {
      en: "EV Charging Simulation",
      de: "EV-Ladesimulation",
    },
    summary: {
      en: "A simulation and visualization tool for modeling EV charging demand and exploring power usage over time.",
      de: "Ein Simulations- und Visualisierungstool zur Modellierung von EV-Ladebedarf und zur Analyse von Lastverläufen über die Zeit.",
    },
    tags: ["personal", "simulation", "data-visualization"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    links: [
      {
        href: "https://angelannaroby.github.io/ev-charging-simulation/",
        label: {
          en: "Live site",
          de: "Live-Seite",
        },
      },
      {
        href: "https://github.com/angelannaroby/ev-charging-simulation",
        label: {
          en: "Source code",
          de: "Quellcode",
        },
      },
    ],
    category: "personal",
    image: {
      src: "/images/ev-charging.jpg",
      alt: {
        en: "EV charging simulation dashboard preview",
        de: "Vorschau des EV-Ladesimulations-Dashboards",
      },
    },
    content: {
      intro: {
        en: "A simulation and visualization tool for modeling EV charging demand and exploring power usage over time.",
        de: "Ein Simulations- und Visualisierungstool zur Modellierung von EV-Ladebedarf und zur Analyse von Lastverläufen über die Zeit.",
      },
      story: [
        {
          en: "This project looks at how EV charging demand behaves over time by simulating multiple charging stations and their load patterns. Instead of only showing theoretical capacity, it compares expected and actual usage so the results feel closer to a real operating scenario.",
          de: "Dieses Projekt untersucht, wie sich EV-Ladebedarf über die Zeit verhält, indem mehrere Ladestationen und deren Lastmuster simuliert werden. Anstatt nur theoretische Kapazität zu zeigen, vergleicht es erwartete und tatsächliche Nutzung, sodass die Ergebnisse näher an einem realen Betriebsszenario liegen.",
        },
        {
          en: "The simulation is based on probabilistic arrival and charging-demand patterns and is visualized through a lightweight frontend. I kept the UI intentionally simple, because the goal was not to over-engineer the interface but to make the simulation results easy to understand and interact with.",
          de: "Die Simulation basiert auf probabilistischen Mustern für Ankunft und Ladebedarf und wird über ein leichtgewichtiges Frontend visualisiert. Ich habe die UI bewusst einfach gehalten, weil das Ziel nicht war, die Oberfläche zu über-engineeren, sondern die Simulationsergebnisse leicht verständlich und gut nutzbar zu machen.",
        },
      ],
      contribution: {
        en: `I built the project end to end, including the simulation logic, parameter handling, and frontend visualization.

The main focus was translating the domain idea into clear TypeScript logic and then exposing the results through interactive charts and a simple UI. I wanted the code to stay straightforward and readable, without adding unnecessary abstractions.

On the frontend side, I used React with a minimal structure and focused on clarity, fast iteration, and usability. The result is a small but practical project that combines simulation logic with visual exploration.`,
        de: `Ich habe das Projekt vollständig selbst umgesetzt, einschließlich Simulationslogik, Parametern und Frontend-Visualisierung.

Der Hauptfokus lag darauf, die fachliche Idee in klare TypeScript-Logik zu übersetzen und die Ergebnisse anschließend über interaktive Charts und eine einfache UI sichtbar zu machen. Dabei wollte ich den Code bewusst geradlinig und gut lesbar halten, ohne unnötige Abstraktionen einzubauen.

Im Frontend habe ich React mit einer bewusst schlanken Struktur verwendet und auf Klarheit, schnelle Iteration und gute Nutzbarkeit gesetzt. Das Ergebnis ist ein kleines, aber praktisches Projekt, das Simulationslogik mit visueller Exploration verbindet.`,
      },
    },
  },
  {
    id: "flames-game",
    title: {
      en: "FLAMES",
      de: "FLAMES",
    },
    summary: {
      en: "A nostalgic little web app that brings the classic pen-and-paper FLAMES game into a polished, modern frontend experience.",
      de: "Eine nostalgische kleine Web-App, die das klassische FLAMES-Spiel aus der Schulzeit in ein modernes und liebevoll gestaltetes Frontend bringt.",
    },
    tags: ["personal", "nostalgia", "frontend"],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Vitest",
      "Playwright",
      "Motion",
    ],
    links: [
      {
        href: "https://play-flames.vercel.app/",
        label: {
          en: "Live site",
          de: "Live-Seite",
        },
      },
      {
        href: "https://github.com/angelannaroby/flames-match-game",
        label: {
          en: "Source code",
          de: "Quellcode",
        },
      },
    ],
    category: "personal",
    image: {
      src: "/images/flames.jpg",
      alt: {
        en: "FLAMES game preview",
        de: "Vorschau der FLAMES-App",
      },
    },
    content: {
      intro: {
        en: "A nostalgic little web app that brings the classic pen-and-paper FLAMES game into a polished, modern frontend experience.",
        de: "Eine nostalgische kleine Web-App, die das klassische FLAMES-Spiel aus der Schulzeit in ein modernes und liebevoll gestaltetes Frontend bringt.",
      },
      story: [
        {
          en: "This started as a simple Easter weekend project — I wanted to try out animations more deeply and experiment with motion-driven UI. Instead of building something purely technical, I chose an idea that felt familiar and a bit nostalgic: the FLAMES game we used to play with pen and paper.",
          de: "Dieses Projekt entstand an einem Osterwochenende — ich wollte gezielt Animationen ausprobieren und mit motion-basierter UI experimentieren. Statt etwas rein Technisches zu bauen, habe ich mich für eine Idee entschieden, die sich vertraut und ein bisschen nostalgisch anfühlt: das FLAMES-Spiel aus der Schulzeit.",
        },
        {
          en: "Even though the idea is small and playful, I approached it like a real product. I focused on smooth interactions, clean UI structure, and making the experience feel consistent and complete. It became less about the game itself and more about how small details — transitions, feedback, and layout — shape the overall experience.",
          de: "Auch wenn die Idee klein und verspielt ist, habe ich sie wie ein echtes Produkt umgesetzt. Der Fokus lag auf flüssigen Interaktionen, klarer UI-Struktur und einem insgesamt stimmigen Erlebnis. Am Ende ging es weniger um das Spiel selbst, sondern darum, wie kleine Details — Animationen, Feedback und Layout — die gesamte User Experience beeinflussen.",
        },
      ],
      contribution: {
        en: `I designed and developed the project end to end, including UI design, component structure, and frontend implementation using React and TypeScript.

A key focus was exploring animation using Motion — building transitions, micro-interactions, and visual feedback to make the experience feel dynamic and engaging.

I also implemented testing using Vitest and Playwright to ensure core flows work reliably, and treated the project with production-level practices despite its small scope.

In addition, I worked on basic SEO improvements, including integrating Google Search Console, to make the application discoverable and closer to a real-world deployment standard.`,
        de: `Ich habe das Projekt vollständig selbst umgesetzt — von UI-Design und Komponentenstruktur bis hin zur Frontend-Implementierung mit React und TypeScript.

Ein besonderer Fokus lag auf Animationen mit Motion — ich habe Transitions, Micro-Interactions und visuelles Feedback umgesetzt, um die Anwendung lebendig und interaktiv wirken zu lassen.

Zusätzlich habe ich Tests mit Vitest und Playwright implementiert, um wichtige User Flows abzusichern, und das Projekt trotz seines kleinen Umfangs mit produktionsnahen Standards behandelt.

Außerdem habe ich grundlegende SEO-Maßnahmen umgesetzt, einschließlich der Integration der Google Search Console, um die Anwendung auffindbar zu machen und näher an reale Deployment-Standards heranzuführen.`,
      },
    },
  },
  {
    id: "job-application-tracker",
    title: {
      en: "Job Application Tracker (Upcoming)",
      de: "Job-Application-Tracker (In Planung)",
    },
    summary: {
      en: "A full-stack application to track job applications, interview stages, follow-ups, and progress insights in one structured workspace.",
      de: "Eine Full-Stack-Anwendung zur Nachverfolgung von Bewerbungen, Interviewphasen, Follow-ups und Fortschrittsanalysen in einer strukturierten Oberfläche.",
    },
    tags: ["personal", "fullstack", "productivity"],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "React Hook Form",
      "Zod",
    ],
    links: [],
    category: "personal",
    image: {
      src: "/images/jobApp.png", // you can replace later
      alt: {
        en: "Upcoming project placeholder",
        de: "Platzhalter für kommendes Projekt",
      },
    },
    content: {
      intro: {
        en: "A full-stack project designed to help users manage their job search journey from application tracking to interview progress and follow-ups.",
        de: "Ein Full-Stack-Projekt, das Nutzern hilft, ihren Bewerbungsprozess von der Bewerbung bis zu Interviews und Follow-ups strukturiert zu verwalten.",
      },
      story: [
        {
          en: "This project is inspired by the need to organize and track multiple job applications in a structured and meaningful way. Instead of managing scattered notes and spreadsheets, the goal is to provide a single system where users can track applications, statuses, interview rounds, and responses.",
          de: "Dieses Projekt basiert auf der Idee, Bewerbungen strukturiert und sinnvoll zu organisieren. Anstatt verstreuter Notizen oder Tabellen soll eine zentrale Anwendung entstehen, in der Nutzer Bewerbungen, Status, Interviewphasen und Rückmeldungen verwalten können.",
        },
        {
          en: "It will also provide insights into the job search journey, such as application trends, response rates, and progress over time. The focus is not just on data storage, but on creating a product that helps users reflect on and improve their job search strategy.",
          de: "Zusätzlich sollen Einblicke in den Bewerbungsprozess ermöglicht werden, wie Trends, Rücklaufquoten und Fortschritt über die Zeit. Der Fokus liegt nicht nur auf Datenspeicherung, sondern auf einem Produkt, das Nutzern hilft, ihre Bewerbungsstrategie besser zu verstehen und zu optimieren.",
        },
      ],
      contribution: {
        en: `This project is currently in progress and is being built as a learning-driven full-stack application.`,
        de: `Dieses Projekt befindet sich aktuell in Entwicklung und wird als lerngetriebenes Full-Stack-Projekt umgesetzt.`,
      },
    },
  },
]
