import { useMemo, useState } from "react"

import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { ProjectCard, projects } from "@/features/projects"
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

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)))
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

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  return (
    <>
      <PageHeader title="Projects" subtitle="Selected work and case studies." />
      <Section className="pt-6">
        <div className="space-y-6">
          <TextInput
            label="Search"
            placeholder="Search by title, tech, or tags…"
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
                  className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  aria-pressed={active}
                >
                  <Badge variant={active ? "accent" : "neutral"}>{tag}</Badge>
                </button>
              )
            })}
          </div>

          <p className="text-sm text-neutral-600">
            Showing {filtered.length} of {projects.length}
          </p>

          <div className="grid gap-4">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} locale={locale} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-sm text-neutral-600">
              No projects match your search.
            </p>
          )}
        </div>
      </Section>
    </>
  )
}
