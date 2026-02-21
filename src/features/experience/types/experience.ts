import type { LocalizedText } from "../../../shared/i18n"

export type ExperienceKind = "work" | "education"

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
  links?: { label: LocalizedText; href: string }[]
}