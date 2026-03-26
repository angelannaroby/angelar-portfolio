import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { Badge } from "@/shared/ui/Badge"
import { Card, CardContent } from "@/shared/ui/Card"

import { skillsContent } from "../content"
import type { SkillItem } from "../types"

type Props = {
  items: SkillItem[]
  locale: Locale
  className?: string
}

export function SkillsStackSection({ items, locale, className }: Props) {
  const title = pickText(skillsContent.skills.title, locale)

  return (
    <Card className={className}>
      <CardContent className="p-6 sm:p-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xl leading-none" aria-hidden="true">
              🛠️
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            {items.map((item) => (
              <Badge
                key={item.id}
                variant="neutral"
                className="rounded-full border-border bg-muted/60 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
              >
                {item.label}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
