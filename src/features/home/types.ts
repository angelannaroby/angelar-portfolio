import type { LocalizedText } from "@/shared/i18n"

export type HomeTopLink = {
  to: string
  title: LocalizedText
}

export type HomeContent = {
  header: {
    openMenu: LocalizedText
    closeMenu: LocalizedText
    toggleLanguage: LocalizedText
    language: LocalizedText
  }
  topBrand: LocalizedText
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
