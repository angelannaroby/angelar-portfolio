import type { LocalizedText } from "@/shared/i18n"

export type HomeTopLink = {
  to: string
  title: LocalizedText
  hint: LocalizedText
}

export type HomeContent = {
  header: {
    mobileNavTitle: LocalizedText
    openMenu: LocalizedText
    closeMenu: LocalizedText
    toggleLanguage: LocalizedText
    language: LocalizedText
  }
  topBrand: LocalizedText
  topLinks: HomeTopLink[]
  intro: {
    helloLead: LocalizedText
    helloTrail: LocalizedText
    firstName: LocalizedText
    lastName: LocalizedText
    role: LocalizedText
    availability: LocalizedText
    introText: LocalizedText
    bullets: LocalizedText[]
    ctaPrimary: LocalizedText
    portraitAlt: LocalizedText
    social: {
      linkedinAria: LocalizedText
      githubAria: LocalizedText
      linkedinText: LocalizedText
      githubText: LocalizedText
    }
    sideRole: {
      eyebrow: LocalizedText
      title: LocalizedText
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
