import type { ReactNode } from "react"

import { LocaleProvider } from "@/app/providers/LocaleProvider"

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return <LocaleProvider>{children}</LocaleProvider>
}
