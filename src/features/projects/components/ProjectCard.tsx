import { Link } from "@tanstack/react-router"

import { type Locale, pickText } from "@/shared/i18n"
import { Badge } from "@/shared/ui/Badge"
import { Card, CardContent, CardHeader } from "@/shared/ui/Card"

import type { Project } from "../types"

type ProjectCardProps = {
  project: Project
  locale: Locale
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="font-semibold">{pickText(project.title, locale)}</p>
            <p className="text-sm text-neutral-600">
              {pickText(project.summary, locale)}
            </p>
          </div>

          <Link
            to="/projects/$projectId"
            params={{ projectId: project.id }}
            className="inline-flex h-9 items-center justify-center rounded-md bg-neutral-100 px-3 text-sm font-medium text-neutral-900 hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            View
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
          {project.featured && <Badge variant="accent">Featured</Badge>}
        </div>
      </CardContent>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Badge key={t} className="opacity-80">
            {t}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
