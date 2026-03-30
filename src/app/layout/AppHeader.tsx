import { useEffect, useId, useState } from "react"

import { Link, useRouterState } from "@tanstack/react-router"

import { useAppShellViewModel } from "@/app/hooks/useAppShellViewModel"
import { useLocale } from "@/app/providers"
import { cn } from "@/shared/lib/cn"
import { Container } from "@/shared/ui/Container"
import { CloseIcon, MenuIcon } from "@/shared/ui/Icons"

export function AppHeader() {
  const { locale, toggleLocale } = useLocale()
  const { location } = useRouterState()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuTitleId = useId()

  const text = useAppShellViewModel(locale)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileMenuOpen])

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
              src="/images/logo.png"
              alt="A²R Logo"
              className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80 sm:h-12 lg:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {text.header.links.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: true }}>
                {({ isActive }) => (
                  <span
                    className={cn(
                      "group relative text-sm font-semibold transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-foreground/85 hover:text-foreground",
                    )}
                  >
                    {item.title}
                    <span
                      className={cn(
                        "absolute -bottom-2 left-0 h-[2px] rounded-full bg-primary transition-all duration-200",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="hidden rounded-full border border-border/70 bg-surface/35 px-3 py-2 text-sm font-semibold text-foreground backdrop-blur-sm hover:bg-surface/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
              aria-label={text.header.toggleLanguage}
            >
              {locale === "en" ? "DE" : "EN"}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/35 text-foreground backdrop-blur-sm hover:bg-surface/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
              aria-label={text.header.openMenu}
              aria-haspopup="dialog"
              aria-expanded={isMobileMenuOpen}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {isMobileMenuOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={mobileMenuTitleId}
          className="md:hidden"
        >
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50"
            aria-label={text.header.closeMenu}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed inset-x-0 top-0 z-50 rounded-b-3xl border-b border-border/70 bg-background/95 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <div
                  id={mobileMenuTitleId}
                  className="text-base font-semibold text-foreground"
                >
                  {text.header.brand}
                </div>
                <div className="text-xs text-muted-foreground">
                  {text.header.mobileNavTitle}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/50 text-foreground hover:bg-surface/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label={text.header.closeMenu}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-2">
              {text.header.links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <span
                      className={cn(
                        "block rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "border-primary/30 bg-surface/55 text-foreground"
                          : "border-border/60 bg-surface/35 text-foreground hover:bg-surface/55",
                      )}
                    >
                      {item.title}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{text.header.language}</span>

              <button
                type="button"
                onClick={toggleLocale}
                className="rounded-full border border-border/70 bg-surface/45 px-3 py-1.5 text-foreground hover:bg-surface/65"
                aria-label={text.header.toggleLanguage}
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
