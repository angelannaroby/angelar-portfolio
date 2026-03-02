import { Link } from "@tanstack/react-router"

import { pickText } from "@/shared/i18n"
import { Badge } from "@/shared/ui/Badge"
import { Button } from "@/shared/ui/Button"
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/Card"

import type { ProjectCardProps } from "../types"

export function ProjectCard({ project, locale, labels }: ProjectCardProps) {
  const title = pickText(project.title, locale)
  const summary = pickText(project.summary, locale)

  return (
    <Card className="transition will-change-transform hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-1">
            <p className="truncate text-base font-semibold tracking-tight text-foreground">
              {title}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {summary}
            </p>
          </div>

          <Button asChild size="sm" variant="primary">
            <Link
              to="/projects/$projectId"
              params={{ projectId: project.id }}
              aria-label={`${labels.view}: ${title}`}
              preload="intent"
            >
              {labels.view}
            </Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={`${project.id}-stack-${s}`} variant="subtle">
              {s}
            </Badge>
          ))}
          {project.featured ? (
            <Badge variant="accent">{labels.featured}</Badge>
          ) : null}
        </div>
      </CardContent>

      {project.tags.length > 0 ? (
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={`${project.id}-tag-${t}`} className="opacity-80">
                {t}
              </Badge>
            ))}
          </div>
        </CardFooter>
      ) : null}
    </Card>
  )
}
