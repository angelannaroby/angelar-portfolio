import type { KeyboardEvent } from "react"

import { pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"
import { Card, CardContent } from "@/shared/ui/Card"

// type Props = ProjectCardProps & {
//   onOpen: () => void
// }

export function ProjectCard({ project, locale, onOpen }: Props) {
  const title = pickText(project.title, locale)
  const summary = pickText(project.summary, locale)
  const imgAlt = project.image ? pickText(project.image.alt, locale) : ""

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onOpen()
    }
  }

  return (
    <Card
      role="button"
      tabIndex={0}
      aria-label={title}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px]",
        "border border-[rgb(var(--color-primary)/0.22)]",
        "bg-[linear-gradient(180deg,rgba(var(--color-bg-elevated),0.96)_0%,rgba(var(--color-card),0.99)_100%)]",
        "shadow-[0_14px_42px_rgba(0,0,0,0.22)]",
        "transition duration-300",
        "hover:-translate-y-1 hover:border-[rgb(var(--color-primary)/0.4)] hover:shadow-[0_18px_56px_rgba(0,0,0,0.32)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg))]",
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[rgb(var(--color-primary)/0.12)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />

      <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-[rgb(var(--color-primary)/0.12)] bg-[rgb(var(--color-surface-2))]">
        {project.image?.src ? (
          <img
            src={project.image.src}
            alt={imgAlt}
            loading="lazy"
            className="h-full w-full scale-[1.02] object-cover object-top transition duration-300 group-hover:scale-[1.05]"
          />
        ) : (
          <div
            aria-hidden
            className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgb(var(--color-primary)/0.12),transparent_45%),linear-gradient(180deg,rgba(var(--color-bg-elevated),0.92)_0%,rgba(var(--color-card),0.98)_100%)]"
          />
        )}

        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/6" />
      </div>

      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              {title}
            </h3>

            <span
              aria-hidden
              className="mt-1 shrink-0 text-muted-foreground transition duration-200 group-hover:translate-x-1 group-hover:text-foreground"
            >
              →
            </span>
          </div>

          <p className="text-base leading-9 text-muted-foreground">{summary}</p>
        </div>
      </CardContent>
    </Card>
  )
}
