import { LocaleProvider } from "./index"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>
}

export { useLocale } from "./hooks/useLocale"
