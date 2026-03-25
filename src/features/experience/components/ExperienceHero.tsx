import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { ExperienceProjectsIcon, ExperienceYearsIcon } from "@/shared/ui/Icons"
import { HeroSplit, StatItem, StatsCard } from "@/shared/ui/Section"

import type { ExperienceContent } from "../content"

type Props = {
  locale: Locale
  content: ExperienceContent
  className?: string
}

export function ExperienceHero({ locale, content, className }: Props) {
  const titleA = pickText(content.page.title.experience, locale)
  const titleB = pickText(content.page.title.education, locale)
  const subtitle = pickText(content.page.subtitle, locale)

  const yearsLabel = pickText(content.stats.years.label, locale)
  const projectsLabel = pickText(content.stats.projects.label, locale)

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
            value={content.stats.years.value}
            label={yearsLabel}
          />
          <StatItem
            icon={<ExperienceProjectsIcon className="h-6 w-6 text-primary" />}
            value={content.stats.projects.value}
            label={projectsLabel}
          />
        </StatsCard>
      }
    />
  )
}
