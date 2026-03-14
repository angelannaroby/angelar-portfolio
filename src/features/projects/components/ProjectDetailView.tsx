import { useEffect } from "react"

import { type Locale, pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/Button"
import { Card, CardContent, CardHeader } from "@/shared/ui/Card"

import { projectsContent } from "../content"
import type { Project } from "../types"

type Props = {
  project: Project | null
  locale: Locale
  open: boolean
  onClose: () => void
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
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function ProjectDetailView({ project, locale, open, onClose }: Props) {
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, onClose])

  if (!open || !project) return null

  const isProfessional = project.category === "professional"

  const title = pickText(project.title, locale)
  const summary = pickText(project.summary, locale)
  const imgAlt = project.image ? pickText(project.image.alt, locale) : ""

  const overview = project.details
    ? pickText(project.details.whatItDoes, locale)
    : ""
  const capabilities = project.details
    ? pickText(project.details.keyCapabilities, locale)
    : ""
  const businessValue = project.details
    ? pickText(project.details.whyItMatters, locale)
    : ""

  const problem = project.caseStudy
    ? pickText(project.caseStudy.problem, locale)
    : ""
  const solution = project.caseStudy
    ? pickText(project.caseStudy.solution, locale)
    : ""
  const impact = project.caseStudy
    ? pickText(project.caseStudy.impact, locale)
    : ""

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
        "animate-in fade-in duration-200",
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

      <Card
        className={cn(
          "relative z-10 max-h-[90vh] w-full max-w-4xl overflow-hidden border-border bg-background shadow-2xl",
          "animate-in zoom-in-95 slide-in-from-bottom-4 duration-200",
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">
              {pickText(projectsContent.detail.title, locale)}
            </p>
            <h2
              id="project-detail-title"
              className="truncate text-xl font-semibold tracking-tight text-foreground"
            >
              {title}
            </h2>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label={pickText(projectsContent.detail.close, locale)}
          >
            <CloseIcon className="h-5 w-5" />
          </Button>
        </div>

        <div className="max-h-[calc(90vh-73px)] overflow-y-auto">
          <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-border md:border-r md:border-b-0">
              <div className="aspect-[16/10] w-full bg-muted">
                {project.image?.src ? (
                  <img
                    src={project.image.src}
                    alt={imgAlt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.18),transparent_40%),linear-gradient(to_bottom,rgba(15,23,42,0.04),transparent)]"
                  />
                )}
              </div>

              <CardContent className="space-y-5 p-5 sm:p-6">
                {isProfessional && project.details ? (
                  <>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {pickText(
                          projectsContent.detail.professional.overview,
                          locale,
                        )}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {overview}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {pickText(
                          projectsContent.detail.professional.capabilities,
                          locale,
                        )}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {capabilities}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {pickText(
                          projectsContent.detail.professional.businessValue,
                          locale,
                        )}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {businessValue}
                      </p>
                    </div>
                  </>
                ) : project.caseStudy ? (
                  <>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {pickText(
                          projectsContent.detail.personal.problem,
                          locale,
                        )}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {pickText(
                          projectsContent.detail.personal.solution,
                          locale,
                        )}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {solution}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {pickText(
                          projectsContent.detail.personal.impact,
                          locale,
                        )}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {impact}
                      </p>
                    </div>
                  </>
                ) : null}
              </CardContent>
            </div>

            <div className="p-5 sm:p-6">
              <CardHeader className="space-y-3 p-0">
                <p className="text-sm leading-7 text-muted-foreground">
                  {summary}
                </p>
              </CardHeader>

              <div className="mt-6 space-y-6">
                <section className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/90">
                    {pickText(projectsContent.detail.stackTitle, locale)}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                {project.links.length > 0 ? (
                  <section className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/90">
                      {pickText(projectsContent.detail.linksTitle, locale)}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => {
                        const label = pickText(link.label, locale)

                        return (
                          <a
                            key={`${label}-${link.href}`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:bg-muted"
                          >
                            {label}
                          </a>
                        )
                      })}
                    </div>
                  </section>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
