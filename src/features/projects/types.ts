import type { Locale, LocalizedText } from "@/shared/i18n"

export type ProjectCategory = "professional" | "personal"

export type ProjectLink = {
  label: LocalizedText
  href: string
}

export type ProjectCaseStudy = {
  problem: LocalizedText
  solution: LocalizedText
  impact: LocalizedText
}

export type ProjectEnterpriseDetails = {
  whatItDoes: LocalizedText
  keyCapabilities: LocalizedText
  whyItMatters: LocalizedText
}

export type ProjectImage = {
  src: string
  alt: LocalizedText
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
  category: ProjectCategory
  image?: ProjectImage
  caseStudy?: ProjectCaseStudy
  details?: ProjectEnterpriseDetails
}

export type ProjectCardProps = {
  project: Project
  locale: Locale
}

export type ProjectDetailViewProps = {
  project: Project
  locale: Locale
}

export type ProjectsTabsSectionProps = {
  projects: Project[]
  locale: Locale
  className?: string
}
