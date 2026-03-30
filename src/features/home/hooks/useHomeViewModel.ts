import { useMemo } from "react"

import { type Locale, pickText } from "@/shared/i18n"

import { homeContent } from "../content"

export function useHomeViewModel(locale: Locale) {
  return useMemo(() => {
    return {
      intro: {
        helloLead: pickText(homeContent.intro.helloLead, locale),
        helloTrail: pickText(homeContent.intro.helloTrail, locale),
        firstName: pickText(homeContent.intro.firstName, locale),
        lastName: pickText(homeContent.intro.lastName, locale),
        introText: pickText(homeContent.intro.introText, locale),
        ctaPrimary: pickText(homeContent.intro.ctaPrimary, locale),
        portraitAlt: pickText(homeContent.intro.portraitAlt, locale),

        social: {
          linkedin: {
            ariaLabel: pickText(
              homeContent.intro.social.linkedin.ariaLabel,
              locale,
            ),
            text: pickText(homeContent.intro.social.linkedin.text, locale),
          },
          github: {
            ariaLabel: pickText(
              homeContent.intro.social.github.ariaLabel,
              locale,
            ),
            text: pickText(homeContent.intro.social.github.text, locale),
          },
        },

        sideRole: {
          eyebrow: pickText(homeContent.intro.sideRole.eyebrow, locale),
          title: pickText(homeContent.intro.sideRole.title, locale),
        },

        links: {
          linkedin: homeContent.links.linkedin,
          github: homeContent.links.github,
        },
      },
    }
  }, [locale])
}
