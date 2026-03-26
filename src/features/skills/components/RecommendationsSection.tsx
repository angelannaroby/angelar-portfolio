import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"

import { skillsContent } from "../content"
import type { Recommendation } from "../types"

import { RecommendationCard } from "./RecommendationCard"

type Props = {
  items: Recommendation[]
  locale: Locale
  className?: string
}

export function RecommendationsSection({ items, locale, className }: Props) {
  const title = pickText(skillsContent.recommendations.title, locale)
  const subtitle = pickText(skillsContent.recommendations.subtitle, locale)

  return (
    <section className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>

        <p className="max-w-[65ch] text-sm leading-7 text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {items.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
            locale={locale}
          />
        ))}
      </div>
    </section>
  )
}
