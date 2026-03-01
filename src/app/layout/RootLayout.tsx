import { Link, Outlet, useRouterState } from "@tanstack/react-router"

import { Button } from "@/shared/ui/Button"
import { Container } from "@/shared/ui/Container"

import { useLocale } from "../providers"

import { SkipToContent } from "./SkipToContent"

export function RootLayout() {
  const { locale, toggleLocale } = useLocale()
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isHome = pathname === "/"

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SkipToContent />

      {!isHome && (
        <header className="border-b border-border">
          <Container as="nav" className="flex items-center gap-6 py-4">
            <Link to="/" className="font-semibold">
              angelannaroby
            </Link>

            <Link to="/projects" className="text-sm hover:underline">
              Projects
            </Link>
            <Link to="/experience" className="text-sm hover:underline">
              Experience
            </Link>
            <Link to="/skills" className="text-sm hover:underline">
              Skills
            </Link>
            <Link to="/contact" className="text-sm hover:underline">
              Contact
            </Link>

            <a
              href="/cv/AngelAnnaRoby_CV.pdf"
              className="text-sm hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>

            <div className="ml-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLocale}
                aria-label="Toggle language"
              >
                {locale === "en" ? "DE" : "EN"}
              </Button>
            </div>
          </Container>
        </header>
      )}

      <main id="main" className="min-h-0">
        <Outlet />
      </main>

      {!isHome && (
        <footer className="border-t border-border">
          <Container className="py-6 text-center text-sm text-muted-foreground">
            <p>© 2026 Angel Anna Roby. All rights reserved.</p>
            <p className="mt-1">Built with React, Tailwind CSS, and ❤️.</p>
          </Container>
        </footer>
      )}
    </div>
  )
}
