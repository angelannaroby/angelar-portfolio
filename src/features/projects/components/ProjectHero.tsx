import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { ExperienceProjectsIcon, ExperienceYearsIcon } from "@/shared/ui/Icons"
import { HeroSplit, StatItem, StatsCard } from "@/shared/ui/Section"

import { projectsContent } from "../content"

type Props = {
  locale: Locale
  className?: string
}

export function ProjectsHero({ locale, className }: Props) {
  const titleA = pickText(projectsContent.page.title.a, locale)
  const titleB = pickText(projectsContent.page.title.b, locale)

  const subtitle = pickText(projectsContent.page.subtitle, locale)

  const yearsValue = pickText(projectsContent.page.stats.yearsValue, locale)
  const yearsLabel = pickText(projectsContent.page.stats.yearsLabel, locale)

  const enterpriseValue = pickText(
    projectsContent.page.stats.enterpriseValue,
    locale,
  )
  const enterpriseLabel = pickText(
    projectsContent.page.stats.enterpriseLabel,
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
            value={yearsValue}
            label={yearsLabel}
          />
          <StatItem
            icon={<ExperienceProjectsIcon className="h-6 w-6 text-primary" />}
            value={enterpriseValue}
            label={enterpriseLabel}
          />
        </StatsCard>
      }
    />
  )
}
