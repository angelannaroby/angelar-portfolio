import type { LocalizedText } from "@/shared/i18n"

export type HomeTopLink = {
  to: string
  title: LocalizedText
  hint: LocalizedText
}

export type HomeContent = {
  header: Record<string, LocalizedText>

  topBrand: LocalizedText
  topLinks: HomeTopLink[]

  intro: {
    hello: LocalizedText
    name: string
    role: LocalizedText
    availability: LocalizedText
    introText: LocalizedText
    bullets: LocalizedText[]
    ctaPrimary: LocalizedText
    ctaSecondary: LocalizedText
    portraitAlt: LocalizedText
    social: {
      linkedinAria: LocalizedText
      githubAria: LocalizedText
    }
  }

  capabilityStrip: LocalizedText[]

  links: {
    linkedin: string
    github: string
    cvHref: string
  }

  footer: {
    copyright: LocalizedText
    builtWith: LocalizedText
  }
}
