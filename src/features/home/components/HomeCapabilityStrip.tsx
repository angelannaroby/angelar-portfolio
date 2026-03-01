import { type Locale, pickText } from "@/shared/i18n"
import { Container } from "@/shared/ui/Container"

import type { HomeContent } from "../types"

type Props = {
  locale: Locale
  content: HomeContent
}

export function HomeCapabilityStrip({ locale, content }: Props) {
  return (
    <div className="border-t border-border bg-foreground text-background">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold tracking-[0.18em] opacity-90">
          {content.capabilityStrip.map((item) => (
            <span key={item.en} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-background/70" />
              {pickText(item, locale)}
            </span>
          ))}
        </div>
      </Container>
    </div>
  )
}
