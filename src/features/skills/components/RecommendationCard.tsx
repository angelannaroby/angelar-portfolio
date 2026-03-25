import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { Card, CardContent } from "@/shared/ui/Card"

import type { Recommendation } from "../types"

type Props = {
  recommendation: Recommendation
  locale: Locale
}

export function RecommendationCard({ recommendation, locale }: Props) {
  const quote = pickText(recommendation.quote, locale)
  const role = pickText(recommendation.role, locale)

  return (
    <Card className="h-full border-border shadow-sm">
      <CardContent className="flex h-full flex-col gap-4 p-5 sm:p-6">
        <p className="text-sm leading-7 text-muted-foreground">“{quote}”</p>

        <div className="mt-auto space-y-1 border-t border-border pt-4">
          <p className="text-base font-semibold text-foreground">
            {recommendation.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {role}
            {recommendation.company ? ` · ${recommendation.company}` : ""}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
