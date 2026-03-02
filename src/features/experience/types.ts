import type { LocalizedText } from "@/shared/i18n"

export type ExperienceKind = "work" | "education"

export type ExperienceLink = { label: LocalizedText; href: string }

export type ExperienceLogo = {
  src: string
  alt: string
}

export type ExperienceEntry = {
  id: string
  kind: "work" | "education"
  role: LocalizedText
  org: string
  location: string
  start: string
  end?: string
  highlights: LocalizedText[]
  stack?: string[]
  website?: string
  logo?: ExperienceLogo
}
