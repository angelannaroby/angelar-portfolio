import type { Locale } from "@/shared/i18n"
import { ViewportPage } from "@/shared/ui/ViewportPage"

import { HomeIntroSection } from "./HomeIntroSection"

type Props = {
  locale: Locale
}

export function HomePage({ locale }: Props) {
  return (
    <ViewportPage
      className="relative text-foreground"
      contentClassName="relative z-10 lg:flex lg:min-h-[calc(100dvh-10rem)] lg:flex-col lg:justify-center"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_620px_at_52%_48%,rgb(255_255_255_/_0.03),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(760px_540px_at_54%_54%,rgb(var(--gradient-hero-glow-1)/0.08),transparent_56%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(680px_500px_at_82%_18%,rgb(var(--gradient-hero-glow-2)/0.08),transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--gradient-bg-start)/0.18)_0%,transparent_28%,transparent_72%,rgb(var(--gradient-bg-end)/0.20)_100%)]" />
      </div>

      <div className="relative z-10 lg:w-full">
        <HomeIntroSection locale={locale} />
      </div>
    </ViewportPage>
  )
}
