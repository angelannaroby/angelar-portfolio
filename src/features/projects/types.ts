import type { LocalizedText } from "@/shared/i18n"

export type ProjectLink = {
  href: string
  label: LocalizedText
}

export type ProjectImage = {
  src: string
  alt: LocalizedText
}

export type ProjectContent = {
  intro?: LocalizedText
  story?: LocalizedText[]
  contribution?: LocalizedText
  outcome?: LocalizedText
}

export type Project = {
  id: string
  title: LocalizedText
  summary: LocalizedText
  tags: string[]
  stack: string[]
  links: ProjectLink[]
  category: "professional" | "personal"
  image?: ProjectImage
  content?: ProjectContent
}
