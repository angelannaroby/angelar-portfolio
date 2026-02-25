import { Link } from "@tanstack/react-router"

import { Button } from "@/shared/ui/Button"
import { Container } from "@/shared/ui/Container"
import { GitHubIcon, LinkedInIcon } from "@/shared/ui/Icons"

import type { HomeContent, Locale } from "../types"
import { pickText } from "../utils"

type Props = {
  locale: Locale
  content: HomeContent
}

export function HomeIntroSection({ locale, content }: Props) {
  return (
    <section className="h-full">
      {/* h-full + grid + min-h-0 is the key to “fit without scroll” */}
      <Container size="wide" className="h-full">
        <div className="grid h-full min-h-0 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT */}
          <div className="min-h-0">
            {/* wave + pill */}
            <div className="flex items-center gap-3">
              <span className="text-2xl leading-none">👋</span>

              <span className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white/50 px-3 py-1 text-xs text-neutral-800 backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-neutral-100">
                {pickText(content.availability, locale)}
              </span>
            </div>

            {/* Title (template-like: same line, Angel bigger) */}
            <div className="mt-6">
              <h1 className="tracking-tight">
                <span
                  className="font-medium leading-[0.92]"
                  style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)" }}
                >
                  {pickText(content.hello, locale)}
                  {"\u00A0"}
                </span>
                <span
                  className="font-extrabold leading-[0.92]"
                  style={{ fontSize: "clamp(2.8rem, 5.0vw, 4.4rem)" }}
                >
                  {content.name}
                </span>
              </h1>

              {/* Role line (template-ish with left/right lines) */}
              <div className="mt-3 flex items-center gap-4">
                <div className="h-px flex-1 bg-neutral-900/20 dark:bg-white/15" />
                <p className="text-sm font-semibold tracking-wide text-amber-600 dark:text-amber-400">
                  {pickText(content.role, locale)}
                </p>
                <div className="h-px flex-1 bg-neutral-900/20 dark:bg-white/15" />
              </div>
            </div>

            {/* Summary */}
            <p className="mt-6 max-w-[52ch] text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 sm:text-base">
              {pickText(content.intro, locale)}
            </p>

            {/* Bullets */}
            <ul className="mt-5 space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              {content.bullets.map((b) => (
                <li key={b.en} className="flex items-start gap-2">
                  <span className="mt-0.5 text-neutral-900/70 dark:text-white/60">
                    ✓
                  </span>
                  <span>{pickText(b, locale)}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/contact">
                <Button variant="primary" size="md">
                  {pickText(content.ctaPrimary, locale)}
                </Button>
              </Link>

              <a
                href="cv/AngelAnnaRoby_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary" size="md">
                  {pickText(content.ctaSecondary, locale)}
                </Button>
              </a>
            </div>

            {/* Social icons on next line (template) */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:outline-white"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:outline-white"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* RIGHT (image) */}
          <div className="min-h-0">
            {/* This ensures the image never makes the page taller than the viewport */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div
                className="relative overflow-hidden rounded-[28px]"
                style={{ height: "min(58vh, 520px)" }}
              >
                <img
                  src="/images/angel.png"
                  alt="Portrait of Angel"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
