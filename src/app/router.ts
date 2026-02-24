import { createRouter } from "@tanstack/react-router"

import { routeTree } from "@/routeTree.gen"
import { RouterErrorBoundary } from "@/shared/router/RouterErrorBoundary"

const rawBase = import.meta.env.BASE_URL
const basepath = rawBase === "/" ? "/" : rawBase.replace(/\/$/, "")

export const router = createRouter({
  routeTree,
  basepath,
  defaultErrorComponent: RouterErrorBoundary,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
