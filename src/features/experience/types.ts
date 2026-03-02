import type { LocalizedText } from "@/shared/i18n"

export type ExperienceKind = "work" | "education"

export type ExperienceLink = { label: LocalizedText; href: string }

export type ExperienceEntry = {
  id: string
  kind: ExperienceKind
  role: LocalizedText
  org: string
  location: string
  start: string
  end?: string
  highlights: LocalizedText[]
  stack?: string[]
  links?: ExperienceLink[]
}
