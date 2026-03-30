import { Outlet, useRouterState } from "@tanstack/react-router"

import { AppFooter } from "./AppFooter"
import { AppHeader } from "./AppHeader"

export function RootLayout() {
  const { location } = useRouterState()
  const isHomePage = location.pathname === "/"

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <AppHeader />

      <main
        id="main"
        className={
          isHomePage ? "flex-1 lg:min-h-0 lg:overflow-hidden" : "flex-1"
        }
      >
        <Outlet />
      </main>

      <AppFooter />
    </div>
  )
}
