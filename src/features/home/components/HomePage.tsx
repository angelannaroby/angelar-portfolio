import { useEffect } from "react"

import type { Locale } from "@/shared/i18n"
import { ViewportPage } from "@/shared/ui/ViewportPage"

import { homeContent } from "../content"

import { HomeCapabilityStrip } from "./HomeCapabilityStrip"
import { HomeFooter } from "./HomeFooter"
import { HomeHeader } from "./HomeHeader"
import { HomeIntroSection } from "./HomeIntroSection"

type Props = {
  locale: Locale
}

export function HomePage({ locale }: Props) {
  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    root.classList.add("home-no-scroll")
    body.classList.add("home-no-scroll")

    return () => {
      root.classList.remove("home-no-scroll")
      body.classList.remove("home-no-scroll")
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      {/* <BackgroundLayer variant="warmBeigeLuxury" /> */}

      <div className="relative z-10">
        <ViewportPage
          className="bg-transparent"
          header={
            <HomeHeader
              locale={locale}
              brand={homeContent.topBrand}
              links={homeContent.topLinks}
            />
          }
          strip={<HomeCapabilityStrip locale={locale} content={homeContent} />}
          footer={<HomeFooter locale={locale} content={homeContent} />}
        >
          <div className="h-full">
            <HomeIntroSection locale={locale} content={homeContent} />
          </div>
        </ViewportPage>
      </div>
    </div>
  )
}
