import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { HomePage } from "@/features/home"

export const Route = createFileRoute("/")({
  component: IndexRoute,
})

function IndexRoute() {
  const { locale } = useLocale()
  return <HomePage locale={locale} />
}
