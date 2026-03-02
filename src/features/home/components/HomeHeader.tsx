// HomeHeader.tsx
import { useEffect, useId, useMemo, useState } from "react"

import { Link } from "@tanstack/react-router"

import { useLocale, useTheme } from "@/app/providers"
import { type Locale, pickText } from "@/shared/i18n"
import { Container } from "@/shared/ui/Container"
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/shared/ui/Icons"

import { homeContent } from "../content"
import type { HomeTopLink } from "../types"

type Props = {
  locale: Locale
  brand: { en: string; de: string }
  links: HomeTopLink[]
}

export function HomeHeader({ locale, brand, links }: Props) {
  const { toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()

  const [open, setOpen] = useState(false)
  const titleId = useId()

  const t = useMemo(() => {
    const h = homeContent.header
    return {
      navTitle: pickText(h.mobileNavTitle, locale),
      openMenu: pickText(h.openMenu, locale),
      closeMenu: pickText(h.closeMenu, locale),
      toggleTheme: pickText(h.toggleTheme, locale),
      toggleLanguage: pickText(h.toggleLanguage, locale),
      themeAndLanguage: pickText(h.themeAndLanguage, locale),
      light: pickText(h.light, locale),
      dark: pickText(h.dark, locale),
    }
  }, [locale])

  useEffect(() => {
    if (!open) return
    const body = document.body
    const prev = body.style.overflow
    body.style.overflow = "hidden"
    return () => {
      body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="pt-4 sm:pt-6">
      <Container size="wide">
        <div className="flex items-start justify-between gap-4 sm:gap-10">
          <Link
            to="/"
            className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label={pickText(brand, locale)}
          >
            <div className="text-2xl font-semibold tracking-tight text-foreground">
              {pickText(brand, locale)}
            </div>
            <div className="mt-2 h-[3px] w-16 bg-foreground" />
          </Link>

          <nav className="hidden flex-1 items-start justify-end gap-14 sm:flex">
            {links.map((item) => (
              <Link key={item.to} to={item.to} className="group lg:w-[150px]">
                {/* <div className="h-px w-full bg-border" /> */}
                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-foreground">
                      {pickText(item.title, locale)}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {pickText(item.hint, locale)}
                    </div>
                  </div>
                  <span className="mt-[2px] text-muted-foreground group-hover:text-foreground">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground ring-1 ring-border hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:hidden"
              aria-label={t.openMenu}
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground ring-1 ring-border hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={t.toggleTheme}
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
              className="text-sm font-semibold text-foreground hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={t.toggleLanguage}
            >
              {locale === "en" ? "DE" : "EN"}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="sm:hidden"
        >
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-black/30"
            aria-label={t.closeMenu}
            onClick={() => setOpen(false)}
          />

          <div className="fixed inset-x-0 top-0 z-50 rounded-b-3xl bg-background/95 p-4 shadow-xl ring-1 ring-border backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <div
                  id={titleId}
                  className="text-base font-semibold text-foreground"
                >
                  {pickText(brand, locale)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {t.navTitle}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground ring-1 ring-border hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label={t.closeMenu}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-start justify-between gap-4 rounded-2xl px-3 py-3 ring-1 ring-border hover:bg-surface/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {pickText(item.title, locale)}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {pickText(item.hint, locale)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4 h-px bg-border" />

            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>{t.themeAndLanguage}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="rounded-full px-3 py-1 ring-1 ring-border hover:bg-surface/60"
                >
                  {theme === "dark" ? t.light : t.dark}
                </button>
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="rounded-full px-3 py-1 ring-1 ring-border hover:bg-surface/60"
                >
                  {locale === "en" ? "DE" : "EN"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
