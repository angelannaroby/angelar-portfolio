import type { LocalizedText } from "../../../shared/i18n"

export type ProjectLink = {
  label: LocalizedText
  href: string
}

export type Project = {
  id: string
  title: LocalizedText
  summary: LocalizedText
  tags: string[]
  stack: string[]
  links: ProjectLink[]
  period?: LocalizedText
  featured?: boolean
}