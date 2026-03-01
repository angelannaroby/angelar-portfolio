import { type Locale, pickText } from "@/shared/i18n"
import { Badge } from "@/shared/ui/Badge"
import { Card, CardContent, CardHeader } from "@/shared/ui/Card"
import { H3, P } from "@/shared/ui/Typography"

import {
  experienceContent,
  formatExperienceText,
  getPresentLabel,
} from "../content"
import type { ExperienceEntry } from "../types"
import { formatPeriod } from "../utils"

type Props = {
  entry: ExperienceEntry
  locale: Locale
}

export function ExperienceCard({ entry, locale }: Props) {
  const title = pickText(entry.role, locale)
  const period = formatPeriod(entry.start, entry.end, locale, {
    presentLabel: getPresentLabel(locale),
  })

  const periodAria = formatExperienceText(
    pickText(experienceContent.labels.periodAria, locale),
    { period },
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <H3>{title}</H3>
            <span
              className="text-sm text-muted-foreground"
              aria-label={periodAria}
            >
              {period}
            </span>
          </div>

          <P className="text-sm text-foreground">
            <span className="font-medium">{entry.org}</span>
            <span className="text-muted-foreground"> · {entry.location}</span>
          </P>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="list-disc space-y-2 pl-5 text-sm text-foreground">
          {entry.highlights.map((h, idx) => (
            <li key={`${entry.id}-h-${idx}`}>{pickText(h, locale)}</li>
          ))}
        </ul>

        {entry.stack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.stack.map((s) => (
              <Badge key={`${entry.id}-s-${s}`} variant="subtle">
                {s}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
