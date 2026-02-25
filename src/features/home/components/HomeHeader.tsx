import { Link } from "@tanstack/react-router"

import { useLocale, useTheme } from "@/app/providers"
import { Container } from "@/shared/ui/Container"
import { MoonIcon, SunIcon } from "@/shared/ui/Icons"

import type { HomeTopLink, Locale } from "../types"
import { pickText } from "../utils"

type Props = {
  locale: Locale
  brand: { en: string; de: string }
  links: HomeTopLink[]
}

export function HomeHeader({ locale, brand, links }: Props) {
  const { toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="pt-4 sm:pt-6">
      <Container size="wide">
        <div className="flex items-start justify-between gap-10">
          {/* "it's me" block */}
          <div className="shrink-0">
            <div className="text-2xl font-semibold tracking-tight">
              {pickText(brand, locale)}
            </div>
            <div className="mt-2 h-[3px] w-16 bg-neutral-900 dark:bg-white" />
          </div>

          {/* columns */}
          <nav className="hidden flex-1 items-start justify-end gap-14 sm:flex">
            {links.map((item) => (
              <Link key={item.to} to={item.to} className="group lg:w-[150px]">
                <div className="h-px w-full bg-neutral-300/80 dark:bg-neutral-700/70" />
                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-neutral-900 dark:text-white">
                      {pickText(item.title, locale)}
                    </div>
                    <div className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                      {pickText(item.hint, locale)}
                    </div>
                  </div>
                  <span className="mt-[2px] text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          {/* toggles right */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-neutral-900 ring-1 ring-neutral-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-neutral-950/50 dark:text-white dark:ring-neutral-800 dark:hover:bg-neutral-900"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleLocale}
              className="text-sm font-semibold text-neutral-900 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:text-white"
              aria-label="Toggle language"
            >
              {locale === "en" ? "DE" : "EN"}
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
