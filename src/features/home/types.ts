export type Locale = "en" | "de"

export type LocalizedText = {
  en: string
  de: string
}

export type HomeTopLink = {
  to: "/projects" | "/experience" | "/skills"
  title: LocalizedText
  hint: LocalizedText
}

export type HomeContent = {
  topBrand: LocalizedText
  topLinks: HomeTopLink[]

  hello: LocalizedText
  name: string
  role: LocalizedText
  intro: LocalizedText
  bullets: LocalizedText[]

  ctaPrimary: LocalizedText
  ctaSecondary: LocalizedText

  availability: LocalizedText

  capabilityStrip: LocalizedText[]

  socials: {
    linkedinLabel: LocalizedText
    githubLabel: LocalizedText
  }
  links: {
    linkedin: string
    github: string
  }
}
