import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { ExperienceProjectsIcon, ExperienceYearsIcon } from "@/shared/ui/Icons"
import { HeroSplit, StatItem, StatsCard } from "@/shared/ui/Section"

import { skillsContent } from "../content"

type Props = {
  locale: Locale
  className?: string
}

export function SkillsHero({ locale, className }: Props) {
  const titleA = pickText(skillsContent.page.title.skills, locale)
  const titleB = pickText(skillsContent.page.title.recommendations, locale)
  const subtitle = pickText(skillsContent.page.subtitle, locale)

  const skillAreasValue = pickText(
    skillsContent.page.stats.skillAreasValue,
    locale,
  )
  const skillAreasLabel = pickText(
    skillsContent.page.stats.skillAreasLabel,
    locale,
  )

  const recommendationsValue = pickText(
    skillsContent.page.stats.recommendationsValue,
    locale,
  )
  const recommendationsLabel = pickText(
    skillsContent.page.stats.recommendationsLabel,
    locale,
  )

  return (
    <HeroSplit
      className={className}
      left={
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {titleA} <span className="text-primary">& {titleB}</span>
          </h1>

          <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </div>
      }
      right={
        <StatsCard>
          <StatItem
            icon={<ExperienceYearsIcon className="h-6 w-6 text-primary" />}
            value={skillAreasValue}
            label={skillAreasLabel}
          />
          <StatItem
            icon={<ExperienceProjectsIcon className="h-6 w-6 text-primary" />}
            value={recommendationsValue}
            label={recommendationsLabel}
          />
        </StatsCard>
      }
    />
  )
}
