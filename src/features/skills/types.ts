import type { LocalizedText } from "@/shared/i18n"

export type SkillItem = {
  id: string
  label: string
}

export type Recommendation = {
  id: string
  quote: LocalizedText
  name: string
  role: LocalizedText
  company?: string
  linkedinHref?: string
}
