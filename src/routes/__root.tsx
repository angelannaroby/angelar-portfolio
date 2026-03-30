import { createRootRoute } from "@tanstack/react-router"

import { RootLayout } from "@/app/layout"
import { NotFound } from "@/shared/router/NotFound"

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})
