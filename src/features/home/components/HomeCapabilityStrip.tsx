import { type Locale, pickText } from "@/shared/i18n"
import { Container } from "@/shared/ui/Container"

import type { HomeContent } from "../types"

type Props = {
  locale: Locale
  content: HomeContent
}

export function HomeCapabilityStrip({ locale, content }: Props) {
  return (
    <div className="border-y border-border/70 bg-surface/55 backdrop-blur-md">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/80">
          {content.capabilityStrip.map((item) => (
            <span key={item.en} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {pickText(item, locale)}
            </span>
          ))}
        </div>
      </Container>
    </div>
  )
}
