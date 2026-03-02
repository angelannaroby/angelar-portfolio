import type { SkillGroup } from "../types"

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: {
      en: "Frontend Development",
      de: "Frontend-Entwicklung",
    },
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "MobX",
      "Zustand",
    ],
  },
  {
    id: "testing",
    title: {
      en: "Testing & Quality",
      de: "Testing & Qualitätssicherung",
    },
    skills: [
      "Vitest",
      "React Testing Library",
      "Playwright",
      "ESLint",
      "Prettier",
    ],
  },
  {
    id: "architecture",
    title: {
      en: "Architecture & Patterns",
      de: "Architektur & Patterns",
    },
    skills: [
      "Monorepo (pnpm / Turborepo)",
      "REST APIs",
      "Component-based architecture",
      "State Management",
      "i18n",
    ],
  },
  {
    id: "backend-cloud",
    title: {
      en: "Backend & Cloud Exposure",
      de: "Backend & Cloud Kenntnisse",
    },
    skills: ["Node.js (basics)", "SQL", "Git", "CI/CD"],
  },
  {
    id: "tools",
    title: {
      en: "Tools & Collaboration",
      de: "Tools & Zusammenarbeit",
    },
    skills: ["GitHub", "Jira", "Figma", "Agile / Scrum"],
  },
]
