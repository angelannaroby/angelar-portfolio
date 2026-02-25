import { LocaleProvider, ThemeProvider } from "./index"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  )
}

export { useLocale } from "./hooks/useLocale"
export { useTheme } from "./theme/ThemeProvider"
