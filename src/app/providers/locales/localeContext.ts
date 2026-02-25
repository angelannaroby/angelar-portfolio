import { createContext } from "react"

import type { Locale } from "@/shared/i18n"

export type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  toggleLocale: () => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
