import { useCallback, useMemo, useState } from "react"

import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { ProjectCard, projects } from "@/features/projects"
import {
  formatProjectsText,
  getProjectCardLabels,
  projectsContent,
} from "@/features/projects/content"
import { pickText } from "@/shared/i18n"
import { Badge } from "@/shared/ui/Badge"
import { PageHeader } from "@/shared/ui/PageHeader"
import { Section } from "@/shared/ui/Section"
import { TextInput } from "@/shared/ui/TextInput"

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
})

function ProjectsPage() {
  const { locale } = useLocale()

  const [query, setQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const labels = useMemo(() => getProjectCardLabels(locale), [locale])

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    for (const p of projects) for (const t of p.tags) tagSet.add(t)
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return projects.filter((p) => {
      const title = pickText(p.title, locale).toLowerCase()
      const summary = pickText(p.summary, locale).toLowerCase()
      const stack = p.stack.join(" ").toLowerCase()
      const tagsText = p.tags.join(" ").toLowerCase()

      const matchesQuery =
        q.length === 0
          ? true
          : [title, summary, stack, tagsText].some((field) => field.includes(q))

      const matchesTags =
        selectedTags.length === 0
          ? true
          : selectedTags.every((t) => p.tags.includes(t))

      return matchesQuery && matchesTags
    })
  }, [query, locale, selectedTags])

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }, [])

  const headerTitle = pickText(projectsContent.page.title, locale)
  const headerSubtitle = pickText(projectsContent.page.subtitle, locale)

  const searchLabel = pickText(projectsContent.page.searchLabel, locale)
  const searchPlaceholder = pickText(
    projectsContent.page.searchPlaceholder,
    locale,
  )

  const showing = formatProjectsText(
    pickText(projectsContent.page.showing, locale),
    { shown: filtered.length, total: projects.length },
  )

  const noResults = pickText(projectsContent.page.noResults, locale)

  return (
    <>
      <PageHeader title={headerTitle} subtitle={headerSubtitle} />

      <Section className="pt-6">
        <div className="space-y-6">
          <TextInput
            label={searchLabel}
            placeholder={searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const active = selectedTags.includes(tag)

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-pressed={active}
                >
                  {/* Badge API will be updated later; keep variants for now */}
                  <Badge variant={active ? "accent" : "neutral"}>{tag}</Badge>
                </button>
              )
            })}
          </div>

          <p className="text-sm text-muted-foreground">{showing}</p>

          <div className="grid gap-4">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={locale}
                labels={labels}
              />
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">{noResults}</p>
          ) : null}
        </div>
      </Section>
    </>
  )
}
