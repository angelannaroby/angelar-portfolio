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
  const linkedInText = pickText(content.intro.social.linkedinText, locale)
  const githubText = pickText(content.intro.social.githubText, locale)

  const sideRoleEyebrow = pickText(content.intro.sideRole.eyebrow, locale)
  const sideRoleTitle = pickText(content.intro.sideRole.title, locale)

  const firstName = pickText(content.intro.firstName, locale)
  const lastName = pickText(content.intro.lastName, locale)

  return (
    <section className="py-6 lg:h-full lg:py-0">
      <Container size="wide" className="lg:h-full">
        <div className="grid h-full grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1fr_0.68fr] lg:items-start lg:gap-8 xl:gap-12">
          <div className="order-2 lg:order-1 lg:pt-28">
            <div className="max-w-[360px]">
              <div className="inline-flex h-10 items-center rounded-[2px] bg-[rgb(34_34_36_/_0.9)] px-7 text-sm shadow-[0_4px_12px_rgb(0_0_0_/_0.12)]">
                <span className="font-semibold text-white">
                  {pickText(content.intro.helloLead, locale)}
                </span>
                <span className="ml-1.5 font-normal text-white/65">
                  {pickText(content.intro.helloTrail, locale)}
                </span>
              </div>

              <div className="mt-7">
                <h1 className="leading-[0.88] tracking-[-0.03em] text-foreground">
                  <span
                    className="block font-bold"
                    style={{ fontSize: "clamp(3.55rem, 5.4vw, 5.3rem)" }}
                  >
                    {firstName}
                  </span>
                </h1>

                <div className="mt-5 flex items-center gap-4">
                  <div className="h-[3px] w-20 shrink-0 rounded-full bg-primary sm:w-24" />
                  <span
                    className="whitespace-nowrap font-medium text-foreground/96"
                    style={{ fontSize: "clamp(1.7rem, 2vw, 2.25rem)" }}
                  >
                    {lastName}
                  </span>
                </div>
              </div>

              <div className="mt-14 max-w-[330px]">
                <Button
                  asChild
                  variant="outline"
                  className="h-12 w-full rounded-r-3xl rounded-l-none border-primary/80 text-base text-foreground hover:border-primary hover:bg-primary/6"
                >
                  <Link to="/contact">
                    {pickText(content.intro.ctaPrimary, locale)}
                  </Link>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-foreground/92">
                <a
                  href={content.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={linkedInAria}
                  className="inline-flex items-center gap-2 rounded-full px-1 py-1 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <LinkedInIcon className="h-5 w-5 shrink-0" />
                  <span>{linkedInText}</span>
                </a>

                <span aria-hidden className="text-muted-foreground">
                  |
                </span>

                <a
                  href={content.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={githubAria}
                  className="inline-flex items-center gap-2 rounded-full px-1 py-1 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <GitHubIcon className="h-5 w-5 shrink-0" />
                  <span>{githubText}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:pt-16">
            <div className="relative flex h-[430px] w-full max-w-[500px] items-end justify-center sm:h-[500px] sm:max-w-[560px] lg:h-[640px] lg:max-w-[620px]">
              <div className="absolute left-1/2 top-[38%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary sm:h-[220px] sm:w-[220px] lg:h-[280px] lg:w-[280px]" />

              <div className="pointer-events-none absolute left-1/2 top-[52%] h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-[380px] sm:w-[380px] lg:h-[480px] lg:w-[480px]" />
              <img
                src="/images/angel.png"
                alt={portraitAlt}
                className="relative z-10 translate-y-4 max-h-[114%] w-auto object-contain object-bottom sm:translate-y-6 sm:max-h-[116%] lg:translate-y-8 lg:max-h-[121%]"
                draggable={false}
              />
            </div>
          </div>

          <div className="order-3 lg:justify-self-end lg:pt-60">
            <div className="max-w-[255px] lg:ml-auto xl:max-w-[275px]">
              <div className="text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-base">
                {sideRoleEyebrow}
              </div>

              <div
                className="mt-1 font-semibold leading-[0.98] tracking-[-0.02em] text-foreground"
                style={{ fontSize: "clamp(2rem, 2.55vw, 2.7rem)" }}
              >
                {sideRoleTitle}
              </div>

              <p className="mt-6 text-[14px] leading-8 text-fg-soft">
                {pickText(content.intro.introText, locale)}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
