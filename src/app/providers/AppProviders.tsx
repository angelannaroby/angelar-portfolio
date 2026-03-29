import { LocaleProvider } from "./locales/LocaleProvider"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>
}
