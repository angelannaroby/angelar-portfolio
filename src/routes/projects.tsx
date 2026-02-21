import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects } from "../features/projects/data/projects";
import { ProjectCard } from "../features/projects/components/ProjectCard";
import { pickText, type Locale } from "../shared/i18n";
import { Section } from "../shared/ui/Section";
import { TextInput } from "../shared/ui/TextInput";
import { Badge } from "../shared/ui/Badge";
import { PageHeader } from "../shared/ui/PageHeader";
import { useLocale } from "../app/providers/LocalProvider"

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const { locale } = useLocale()
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((p) => {
      const title = pickText(p.title, locale).toLowerCase();
      const summary = pickText(p.summary, locale).toLowerCase();
      const stack = p.stack.join(" ").toLowerCase();
      const tagsText = p.tags.join(" ").toLowerCase();

      const matchesQuery =
        q.length === 0
          ? true
          : [title, summary, stack, tagsText].some((field) =>
              field.includes(q),
            );

      const matchesTags =
        selectedTags.length === 0
          ? true
          : selectedTags.every((t) => p.tags.includes(t));

      return matchesQuery && matchesTags;
    });
  }, [query, locale, selectedTags]);

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
              const active = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 rounded-full"
                  aria-pressed={active}
                >
                  <Badge variant={active ? "accent" : "neutral"}>{tag}</Badge>
                </button>
              );
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
  );
}
