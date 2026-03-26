import { useEffect, useId, useMemo, useState } from "react"

import { Link } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { type Locale, pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"
import { Container } from "@/shared/ui/Container"
import { CloseIcon, MenuIcon } from "@/shared/ui/Icons"

import { homeContent } from "../content"
import type { HomeTopLink } from "../types"

type Props = {
  locale: Locale
  brand: { en: string; de: string }
  links: HomeTopLink[]
}

export function HomeHeader({ locale, brand, links }: Props) {
  const { toggleLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const titleId = useId()

  const t = useMemo(() => {
    const h = homeContent.header
    return {
      navTitle: pickText(h.mobileNavTitle, locale),
      openMenu: pickText(h.openMenu, locale),
      closeMenu: pickText(h.closeMenu, locale),
      toggleLanguage: pickText(h.toggleLanguage, locale),
      language: pickText(h.language, locale),
    }
  }, [locale])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="pt-5 sm:pt-6">
      <Container size="wide">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="group shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="A²R"
          >
            <img
              src="images/logo.png"
              alt="A²R Logo"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                className={({ isActive }) =>
                  cn(
                    "group relative text-sm font-semibold transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/85 hover:text-foreground",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {pickText(item.title, locale)}
                    <span
                      className={cn(
                        "absolute -bottom-2 left-0 h-[2px] rounded-full bg-primary transition-all duration-200",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="hidden rounded-full border border-border/70 bg-surface/35 px-3 py-2 text-sm font-semibold text-foreground backdrop-blur-sm hover:bg-surface/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
              aria-label={t.toggleLanguage}
            >
              {locale === "en" ? "DE" : "EN"}
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/35 text-foreground backdrop-blur-sm hover:bg-surface/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
              aria-label={t.openMenu}
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="md:hidden"
        >
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50"
            aria-label={t.closeMenu}
            onClick={() => setOpen(false)}
          />

          <div className="fixed inset-x-0 top-0 z-50 rounded-b-3xl border-b border-border/70 bg-background/95 p-4 backdrop-blur-xl">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/50 text-foreground hover:bg-surface/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label={t.closeMenu}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-2">
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "border-primary/30 bg-surface/55 text-foreground"
                        : "border-border/60 bg-surface/35 text-foreground hover:bg-surface/55",
                    )
                  }
                >
                  {pickText(item.title, locale)}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{t.language}</span>
              <button
                type="button"
                onClick={toggleLocale}
                className="rounded-full border border-border/70 bg-surface/45 px-3 py-1.5 text-foreground hover:bg-surface/65"
                aria-label={t.toggleLanguage}
              >
                {locale === "en" ? "DE" : "EN"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
