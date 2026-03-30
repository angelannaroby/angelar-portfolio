import { useMemo } from "react"

import { type Locale, pickText, pickTextList } from "@/shared/i18n"

import { projectsContent } from "../content"
import type { Project } from "../types"

export function useProjectsViewModel(locale: Locale) {
  return useMemo(() => {
    return {
      toggle: {
        professional: pickText(projectsContent.toggle.professional, locale),
        personal: pickText(projectsContent.toggle.personal, locale),
      },

      aria: {
        categoryToggle: pickText(projectsContent.aria.categoryToggle, locale),
      },

      detail: {
        title: pickText(projectsContent.detail.title, locale),
        close: pickText(projectsContent.detail.close, locale),
        stackTitle: pickText(projectsContent.detail.stackTitle, locale),
        linksTitle: pickText(projectsContent.detail.linksTitle, locale),
        storyContribution: pickText(
          projectsContent.detail.storyContribution,
          locale,
        ),
      },

      resolveProjectCard(project: Project) {
        return {
          title: pickText(project.title, locale),
          summary: pickText(project.summary, locale),
          imageAlt: project.image ? pickText(project.image.alt, locale) : "",
        }
      },

      resolveProjectDetail(project: Project) {
        return {
          title: pickText(project.title, locale),
          imageAlt: project.image ? pickText(project.image.alt, locale) : "",
          intro: project.content?.intro
            ? pickText(project.content.intro, locale)
            : "",
          story: pickTextList(project.content?.story ?? [], locale),
          contribution: project.content?.contribution
            ? pickText(project.content.contribution, locale)
            : "",
          links: project.links.map((link) => ({
            ...link,
            label: pickText(link.label, locale),
          })),
        }
      },
    }
  }, [locale])
}
