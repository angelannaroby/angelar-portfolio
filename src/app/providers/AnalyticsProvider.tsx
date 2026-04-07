import { useEffect } from "react"

import { useRouterState } from "@tanstack/react-router"

import { GA_MEASUREMENT_ID } from "@/shared/lib/analytics"

export function AnalyticsProvider() {
  const { location } = useRouterState()

  useEffect(() => {
    if (!window.gtag) return

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname,
    })
  }, [location.pathname])

  return null
}
