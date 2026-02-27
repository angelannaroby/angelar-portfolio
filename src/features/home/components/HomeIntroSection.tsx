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
    <section className="py-8 lg:h-full lg:py-0">
      <Container size="wide" className="lg:h-full">
        <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:pt-10">
          {/* LEFT */}
          <div className="min-h-0 lg:flex lg:flex-col lg:justify-center lg:pb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl leading-none">👋</span>
              <span className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white/50 px-3 py-1 text-xs text-neutral-800 backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-neutral-100">
                {pickText(content.availability, locale)}
              </span>
            </div>

            <div className="mt-6">
              <h1 className="tracking-tight">
                <span
                  className="font-medium leading-[0.92]"
                  style={{ fontSize: "clamp(2.0rem, 4.2vw, 3.6rem)" }}
                >
                  {pickText(content.hello, locale)}
                  {"\u00A0"}
                </span>
                <span
                  className="font-extrabold leading-[0.92]"
                  style={{ fontSize: "clamp(2.6rem, 5.0vw, 4.4rem)" }}
                >
                  {content.name}
                </span>
              </h1>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-px w-16 bg-neutral-900/15 dark:bg-white/15" />
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                  {pickText(content.role, locale)}
                </div>
                <div className="h-px flex-1 bg-neutral-900/15 dark:bg-white/15" />
              </div>
            </div>

            <p className="mt-6 max-w-prose text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
              {pickText(content.intro, locale)}
            </p>

            <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
              {content.bullets.map((b) => (
                <li key={b.en} className="flex gap-3">
                  <span aria-hidden className="mt-[2px] text-neutral-500">
                    ✓
                  </span>
                  <span>{pickText(b, locale)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link to="/contact">
                  {pickText(content.ctaPrimary, locale)}
                </Link>
              </Button>

              <Button asChild variant="secondary">
                <a href="/cv/AngelAnnaRoby_CV.pdf" download>
                  {pickText(content.ctaSecondary, locale)}
                </a>
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={content.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full p-2 ring-1 ring-neutral-900/15 transition hover:bg-neutral-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:ring-white/15 dark:hover:bg-white/10 dark:focus-visible:ring-white"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>

              <a
                href={content.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full p-2 ring-1 ring-neutral-900/15 transition hover:bg-neutral-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:ring-white/15 dark:hover:bg-white/10 dark:focus-visible:ring-white"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* RIGHT (image) */}
          <div className="min-h-0 lg:flex lg:items-end lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <div className="relative h-[clamp(260px,44vh,420px)] overflow-hidden rounded-[28px] lg:h-full lg:max-h-[680px]">
                <img
                  src="/images/angel.png"
                  alt="Portrait of Angel"
                  className="h-full w-full object-contain sm:object-cover sm:object-[center_18%] lg:object-top"
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
