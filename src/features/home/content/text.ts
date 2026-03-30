import type { LocalizedText } from "@/shared/i18n"

export const homeContent = {
  intro: {
    helloLead: { en: "Hello!", de: "Hallo!" },
    helloTrail: { en: "I’m", de: "ich bin" },
    firstName: { en: "Angel", de: "Angel" },
    lastName: { en: "Anna Roby", de: "Anna Roby" },
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
      linkedin: {
        ariaLabel: { en: "LinkedIn", de: "LinkedIn" },
        text: { en: "LinkedIn", de: "LinkedIn" },
      },
      github: {
        ariaLabel: { en: "GitHub", de: "GitHub" },
        text: { en: "GitHub", de: "GitHub" },
      },
    },

    sideRole: {
      eyebrow: { en: "Frontend", de: "Frontend" },
      title: { en: "Developer", de: "Entwicklerin" },
    },
  },

  links: {
    linkedin: "https://www.linkedin.com/in/angel-roby/",
    github: "https://github.com/angelar-portfolio",
    cvHref: "/cv/AngelAnnaRoby_CV.pdf",
  },
} satisfies {
  intro: {
    helloLead: LocalizedText
    helloTrail: LocalizedText
    firstName: LocalizedText
    lastName: LocalizedText
    introText: LocalizedText
    ctaPrimary: LocalizedText
    portraitAlt: LocalizedText
    social: {
      linkedin: {
        ariaLabel: LocalizedText
        text: LocalizedText
      }
      github: {
        ariaLabel: LocalizedText
        text: LocalizedText
      }
    }
    sideRole: {
      eyebrow: LocalizedText
      title: LocalizedText
    }
  }
  links: { linkedin: string; github: string; cvHref: string }
}

export function formatHomeText(
  template: string,
  vars: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? `{${key}}`),
  )
}
