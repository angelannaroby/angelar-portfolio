import { useMemo } from "react"

import { type Locale, pickText } from "@/shared/i18n"

import { skillsContent } from "../content"
import type { Recommendation } from "../types"

export function useSkillsViewModel(locale: Locale) {
  return useMemo(() => {
    return {
      skills: {
        title: pickText(skillsContent.skills.title, locale),
      },

      recommendations: {
        title: pickText(skillsContent.recommendations.title, locale),
        subtitle: pickText(skillsContent.recommendations.subtitle, locale),
      },

      resolveRecommendation(item: Recommendation) {
        const role = pickText(item.role, locale)

        return {
          quote: pickText(item.quote, locale),
          role,
          roleLine: item.company ? `${role} · ${item.company}` : role,
          initials: item.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2),
        }
      },
    }
  }, [locale])
}
