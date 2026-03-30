import { Outlet, useRouterState } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { homeContent, HomeFooter, HomeHeader } from "@/features/home"

export function RootLayout() {
  const { locale } = useLocale()
  const { location } = useRouterState()

  const isHome = location.pathname === "/"

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {!isHome ? (
        <HomeHeader
          locale={locale}
          brand={homeContent.topBrand}
          links={homeContent.topLinks}
        />
      ) : null}

      <main id="main" className="min-h-[calc(100dvh-1px)]">
        <Outlet />
      </main>

      {!isHome ? <HomeFooter locale={locale} content={homeContent} /> : null}
    </div>
  )
}
