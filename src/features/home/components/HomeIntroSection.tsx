import { Link } from "@tanstack/react-router"

import { type Locale, pickText } from "@/shared/i18n"
import { Button } from "@/shared/ui/Button"
import { Container } from "@/shared/ui/Container"
import { GitHubIcon, LinkedInIcon } from "@/shared/ui/Icons"

import type { HomeContent } from "../types"

type Props = {
  locale: Locale
  content: HomeContent
}

export function HomeIntroSection({ locale, content }: Props) {
  const portraitAlt = pickText(content.intro.portraitAlt, locale)
  const linkedInAria = pickText(content.intro.social.linkedinAria, locale)
  const githubAria = pickText(content.intro.social.githubAria, locale)

  return (
    <section className="py-8 lg:h-full lg:py-0">
      <Container size="wide" className="lg:h-full">
        <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:pt-10">
          <div className="min-h-0 lg:flex lg:flex-col lg:justify-center lg:pb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl leading-none">👋</span>
              <span className="inline-flex items-center rounded-full border border-border bg-accent px-3 py-1 text-xs text-accent-foreground">
                {pickText(content.intro.availability, locale)}
              </span>
            </div>

            <div className="mt-6">
              <h1 className="tracking-tight">
                <span
                  className="font-medium leading-[0.92]"
                  style={{ fontSize: "clamp(2.0rem, 4.2vw, 3.6rem)" }}
                >
                  {pickText(content.intro.hello, locale)}
                  {"\u00A0"}
                </span>
                <span
                  className="font-extrabold leading-[0.92]"
                  style={{ fontSize: "clamp(2.6rem, 5.0vw, 4.4rem)" }}
                >
                  {content.intro.name}
                </span>
              </h1>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-px w-16 bg-border" />
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                  {pickText(content.intro.role, locale)}
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
            </div>

            <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {pickText(content.intro.introText, locale)}
            </p>

            <ul className="mt-6 space-y-2 text-sm text-foreground">
              {content.intro.bullets.map((b) => (
                <li key={b.en} className="flex gap-3">
                  <span aria-hidden className="mt-[2px] text-muted-foreground">
                    ✓
                  </span>
                  <span>{pickText(b, locale)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link to="/contact">
                  {pickText(content.intro.ctaPrimary, locale)}
                </Link>
              </Button>

              <Button asChild variant="secondary">
                <a href={content.links.cvHref} download>
                  {pickText(content.intro.ctaSecondary, locale)}
                </a>
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={content.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex rounded-full p-2 ring-1 ring-border transition hover:bg-surface/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={linkedInAria}
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>

              <a
                href={content.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex rounded-full p-2 ring-1 ring-border transition hover:bg-surface/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={githubAria}
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="min-h-0 lg:flex lg:items-end lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <div className="relative h-[clamp(260px,44vh,420px)] overflow-hidden rounded-[28px] lg:h-full lg:max-h-[680px]">
                <img
                  src="/images/angel.png"
                  alt={portraitAlt}
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
