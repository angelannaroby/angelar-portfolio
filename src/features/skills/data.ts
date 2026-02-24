export type SkillGroup = {
  id: string
  label: {
    en: string
    de: string
  }
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: {
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
    label: {
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
    label: {
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
    label: {
      en: "Backend & Cloud Exposure",
      de: "Backend & Cloud Kenntnisse",
    },
    skills: ["Node.js (basics)", "SQL", "Git", "CI/CD"],
  },
  {
    id: "tools",
    label: {
      en: "Tools & Collaboration",
      de: "Tools & Zusammenarbeit",
    },
    skills: ["GitHub", "Jira", "Figma", "Agile / Scrum"],
  },
]
