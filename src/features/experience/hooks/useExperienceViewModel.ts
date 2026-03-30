import { useMemo } from "react"

import { type Locale, pickText, pickTextList } from "@/shared/i18n"

import { experienceContent } from "../content"
import type { ExperienceEntry } from "../types"
import { formatPeriod } from "../utils"

export function useExperienceViewModel(locale: Locale) {
  return useMemo(() => {
    return {
      tabs: {
        experience: pickText(experienceContent.tabs.experience, locale),
        education: pickText(experienceContent.tabs.education, locale),
      },

      aria: {
        tabsToggle: pickText(experienceContent.aria.tabsToggle, locale),
      },

      resolveEntry(entry: ExperienceEntry) {
        const previewHighlights = entry.highlights?.slice(0, 2) ?? []

        return {
          role: pickText(entry.role, locale),
          period: formatPeriod(entry.start, entry.end, locale),
          previewHighlights: pickTextList(previewHighlights, locale),
        }
      },
    }
  }, [locale])
}
