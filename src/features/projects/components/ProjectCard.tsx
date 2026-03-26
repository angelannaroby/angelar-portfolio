import { pickText } from "@/shared/i18n"
import { Card, CardContent } from "@/shared/ui/Card"

import type { ProjectCardProps } from "../types"

type Props = ProjectCardProps & {
  onOpen: () => void
}

export function ProjectCard({ project, locale, onOpen }: Props) {
  const title = pickText(project.title, locale)
  const summary = pickText(project.summary, locale)
  const imgAlt = project.image ? pickText(project.image.alt, locale) : ""

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
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
      className="group flex h-full cursor-pointer flex-col overflow-hidden border-border shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/8] w-full overflow-hidden bg-muted">
        {project.image?.src ? (
          <img
            src={project.image.src}
            alt={imgAlt}
            loading="lazy"
            className="h-full w-full scale-[1.08] object-cover object-top transition duration-300 group-hover:scale-[1.12]"
          />
        ) : (
          <div
            aria-hidden
            className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.18),transparent_40%),linear-gradient(to_bottom,rgba(15,23,42,0.04),transparent)]"
          />
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-5">
        <div className="flex flex-1 flex-col gap-3">
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

          <p className="text-sm leading-7 text-muted-foreground">{summary}</p>
        </div>
      </CardContent>
    </Card>
  )
}
