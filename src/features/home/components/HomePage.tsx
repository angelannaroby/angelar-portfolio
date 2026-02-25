import { ViewportPage } from "@/shared/ui/ViewportPage"

import { homeContent } from "../data"
import type { Locale } from "../types"

import { HomeCapabilityStrip } from "./HomeCapabilityStrip"
import { HomeFooter } from "./HomeFooter"
import { HomeHeader } from "./HomeHeader"
import { HomeIntroSection } from "./HomeIntroSection"

type Props = {
  locale: Locale
}

export function HomePage({ locale }: Props) {
  return (
    <div className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <ViewportPage
        className="relative"
        header={
          <HomeHeader
            locale={locale}
            brand={homeContent.topBrand}
            links={homeContent.topLinks}
          />
        }
        strip={<HomeCapabilityStrip locale={locale} content={homeContent} />}
        footer={<HomeFooter />}
      >
        {/* Template-style soft gradient wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 h-[460px] w-[1050px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-200 via-sky-200 to-pink-200 blur-3xl opacity-60 dark:from-emerald-500/18 dark:via-sky-500/18 dark:to-pink-500/18"
        />

        {/* IMPORTANT: no scrolling on home */}
        <div className="relative z-10 h-full overflow-hidden">
          <HomeIntroSection locale={locale} content={homeContent} />
        </div>
      </ViewportPage>
    </div>
  )
}
