import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    id: "enterprise-compliance-ui",
    title: {
      en: "Enterprise Compliance Platform UI",
      de: "UI für Enterprise-Compliance-Plattform",
    },
    summary: {
      en: "Frontend feature work for compliance-critical workflows with React + TypeScript and strong UX constraints.",
      de: "Frontend-Feature-Entwicklung für compliance-kritische Workflows mit React + TypeScript und hoher UX-Anforderung.",
    },
    tags: ["enterprise", "frontend", "compliance"],
    stack: ["React", "TypeScript", "Tailwind", "Testing"],
    links: [],
    featured: true,
  },
  {
    id: "sysml-editor",
    title: {
      en: "Language-Aware SysML v2 Editor",
      de: "Sprachsensitiver SysML v2 Editor",
    },
    summary: {
      en: "Research project: language-aware modeling editor with robust parsing and interactive UX for diagram workflows.",
      de: "Forschungsprojekt: sprachsensitiver Modeling-Editor mit robustem Parsing und interaktivem UX für Diagramm-Workflows.",
    },
    tags: ["research", "tooling", "modeling"],
    stack: ["TypeScript", "React", "Parsing", "UX"],
    links: [],
  },
  {
    id: "iot-monitoring",
    title: {
      en: "IoT Monitoring Dashboard",
      de: "IoT Monitoring Dashboard",
    },
    summary: {
      en: "Dashboard UI for monitoring and alerting, built with a focus on clarity and maintainability.",
      de: "Dashboard UI für Monitoring und Alerts — mit Fokus auf Klarheit und Wartbarkeit umgesetzt.",
    },
    tags: ["dashboard", "ui"],
    stack: ["React", "TypeScript"],
    links: [],
  },
]