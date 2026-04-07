import React from "react"

import { RouterProvider } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"

import { AppProviders } from "@/app/providers/AppProviders"
import { router } from "@/app/router"
import { initAnalytics } from "@/shared/lib/analytics"

import "@/app/styles/theme.css"
import "@/app/styles/globals.css"

initAnalytics()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>,
)
