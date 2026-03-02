import { useCallback, useMemo, useState } from "react"

import type { Locale } from "@/shared/i18n"

import { LocaleContext, type LocaleContextValue } from "./localeContext"

const STORAGE_KEY = "portfolio.locale"
const DEFAULT_LOCALE: Locale = "en"

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE

  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "de" || stored === "en" ? stored : DEFAULT_LOCALE
}

type LocaleProviderProps = {
  children: React.ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "de" : "en"
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, next)
      }
      return next
    })
  }, [])

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}
