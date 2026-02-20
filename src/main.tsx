import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import "./styles/globals.css"

const rawBase = import.meta.env.BASE_URL
const basepath = rawBase === "/" ? "/" : rawBase.replace(/\/$/, "")

const router = createRouter({
  routeTree,
  basepath,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)