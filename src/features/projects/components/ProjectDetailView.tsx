import { type MouseEvent, useEffect } from "react"

import { type Locale, pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/Button"
import { Card } from "@/shared/ui/Card"

import { projectsContent } from "../content"
import type { Project } from "../types"

type Props = {
  project: Project
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

  if (!open) return null

  const title = pickText(project.title, locale)
  const imgAlt = project.image ? pickText(project.image.alt, locale) : ""

  const intro = project.content?.intro
    ? pickText(project.content.intro, locale)
    : ""

  const story =
    project.content?.story?.map((entry) => pickText(entry, locale)) ?? []

  const contribution = project.content?.contribution
    ? pickText(project.content.contribution, locale)
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
      <div className="absolute inset-0 bg-background/75 backdrop-blur-md" />

      <Card
        className={cn(
          "relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl",
          "border border-primary/30 bg-background/95 shadow-2xl",
          "ring-1 ring-primary/20",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px]",
          "before:[background:linear-gradient(135deg,hsl(var(--primary)/0.65),transparent_28%,transparent_72%,hsl(var(--primary)/0.35))]",
          "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
          "before:[mask-composite:xor] before:[-webkit-mask-composite:xor]",
          "animate-in zoom-in-95 slide-in-from-bottom-4 duration-200",
        )}
        onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        <div className="relative shrink-0 border-b border-border/70">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[260px] overflow-hidden border-b border-border/70 lg:border-r lg:border-b-0">
              {project.image?.src ? (
                <img
                  src={project.image.src}
                  alt={imgAlt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  aria-hidden
                  className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.28),transparent_42%),radial-gradient(circle_at_80%_30%,hsl(var(--primary)/0.16),transparent_38%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)))]"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 pr-16 sm:p-6 sm:pr-20">
              <div className="space-y-3">
                <h2
                  id="project-detail-title"
                  className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                >
                  {title}
                </h2>

                {intro ? (
                  <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                    {intro}
                  </p>
                ) : null}
              </div>

              <div className="mt-6">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
                  {pickText(projectsContent.detail.stackTitle, locale)}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-medium",
                        "border-primary/20 bg-primary/10 text-foreground",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label={pickText(projectsContent.detail.close, locale)}
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-sm hover:bg-black/35"
          >
            <CloseIcon className="h-5 w-5" />
          </Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="grid min-h-full gap-0 lg:grid-cols-[minmax(0,1fr)_260px]">
            <div className="p-5 pr-4 sm:p-6 sm:pr-5 lg:p-8 lg:pr-6">
              <div className="space-y-5">
                {story.map((paragraph, index) => (
                  <p
                    key={`${project.id}-story-${index}`}
                    className="text-sm leading-8 text-muted-foreground sm:text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}

                {contribution ? (
                  <section className="mt-8 rounded-2xl border border-border bg-muted/35 p-4 sm:p-5">
                    <h3 className="mb-2 text-sm font-semibold tracking-wide text-foreground">
                      {pickText(
                        projectsContent.detail.storyContribution,
                        locale,
                      )}
                    </h3>
                    <p className="whitespace-pre-line text-sm leading-7 text-muted-foreground">
                      {contribution}
                    </p>
                  </section>
                ) : null}
              </div>
            </div>

            {project.links.length > 0 ? (
              <aside className="border-t border-border/70 p-5 sm:p-6 lg:border-l lg:border-t-0">
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
                    {pickText(projectsContent.detail.linksTitle, locale)}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {project.links.map((link) => {
                      const label = pickText(link.label, locale)

                      return (
                        <a
                          key={`${label}-${link.href}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={cn(
                            "inline-flex items-center justify-between rounded-2xl border border-border",
                            "bg-muted/40 px-4 py-3 text-sm font-medium text-foreground transition",
                            "hover:border-primary/30 hover:bg-primary/10",
                          )}
                        >
                          <span>{label}</span>
                          <span aria-hidden>↗</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </aside>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  )
}
