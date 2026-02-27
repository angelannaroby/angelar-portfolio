import { useEffect, useId, useState } from "react"

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

function MenuIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  )
}

export function HomeHeader({ locale, brand, links }: Props) {
  const { toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()

  const [open, setOpen] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const body = document.body
    const prev = body.style.overflow
    body.style.overflow = "hidden"
    return () => {
      body.style.overflow = prev
    }
  }, [open])

  // ESC closes
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
          {/* Brand */}
          <div className="shrink-0">
            <div className="text-2xl font-semibold tracking-tight">
              {pickText(brand, locale)}
            </div>
            <div className="mt-2 h-[3px] w-16 bg-neutral-900 dark:bg-white" />
          </div>

          {/* Desktop nav */}
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

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-neutral-900 ring-1 ring-neutral-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-neutral-950/50 dark:text-white dark:ring-neutral-800 dark:hover:bg-neutral-900 sm:hidden"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <MenuIcon className="h-5 w-5" />
            </button>

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

      {/* Mobile drawer */}
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="sm:hidden"
        >
          {/* backdrop */}
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-black/30"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div className="fixed inset-x-0 top-0 z-50 rounded-b-3xl bg-white/95 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-neutral-950/85 dark:ring-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div id={titleId} className="text-base font-semibold">
                  {pickText(brand, locale)}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  {locale === "en" ? "Navigation" : "Navigation"}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-neutral-900 dark:text-white dark:ring-neutral-800"
                aria-label="Close menu"
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
                  className="flex items-start justify-between gap-4 rounded-2xl px-3 py-3 ring-1 ring-neutral-200 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:ring-neutral-800 dark:hover:bg-white/5 dark:focus-visible:ring-white"
                >
                  <div>
                    <div className="text-sm font-semibold">
                      {pickText(item.title, locale)}
                    </div>
                    <div className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                      {pickText(item.hint, locale)}
                    </div>
                  </div>
                  <span className="mt-[2px] text-neutral-400">↗</span>
                </Link>
              ))}
            </div>

            <div className="mt-4 h-px bg-neutral-200 dark:bg-neutral-800" />

            <div className="mt-3 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
              <span>
                {locale === "en" ? "Theme & language" : "Theme & Sprache"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="rounded-full px-3 py-1 ring-1 ring-neutral-200 hover:bg-neutral-50 dark:ring-neutral-800 dark:hover:bg-white/5"
                >
                  {theme === "dark"
                    ? locale === "en"
                      ? "Light"
                      : "Hell"
                    : locale === "en"
                      ? "Dark"
                      : "Dunkel"}
                </button>
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="rounded-full px-3 py-1 ring-1 ring-neutral-200 hover:bg-neutral-50 dark:ring-neutral-800 dark:hover:bg-white/5"
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
