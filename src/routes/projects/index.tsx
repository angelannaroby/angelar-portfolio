import { useMemo, useState } from "react"

import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { ProjectCard, projects } from "@/features/projects"
import { ProjectsHero } from "@/features/projects/components"
import { projectsContent } from "@/features/projects/content"
import type { ProjectCategory } from "@/features/projects/types"
import { pickText } from "@/shared/i18n"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
})

function ProjectsPage() {
  const { locale } = useLocale()
  const [tab, setTab] = useState<ProjectCategory>("professional")

  const profLabel = pickText(projectsContent.page.toggle.professional, locale)
  const personalLabel = pickText(projectsContent.page.toggle.personal, locale)

  const filtered = useMemo(() => {
    return projects.filter((p) => (p.category ?? "professional") === tab)
  }, [tab])

  const hasPersonal = useMemo(
    () => projects.some((p) => (p.category ?? "professional") === "personal"),
    [],
  )

  return (
    <>
      <Section>
        <ProjectsHero locale={locale} />
      </Section>

      {/* Toggle */}
      <Section className="pt-0">
        <div className="flex items-center justify-center">
          <div
            className="inline-flex rounded-full border border-border bg-card p-1 shadow-sm"
            role="tablist"
            aria-label="Projects category"
          >
            <ToggleButton
              active={tab === "professional"}
              onClick={() => setTab("professional")}
              label={profLabel}
            />
            <ToggleButton
              active={tab === "personal"}
              onClick={() => setTab("personal")}
              label={personalLabel}
              disabled={!hasPersonal}
            />
          </div>
        </div>
      </Section>

      {/* Grid */}
      <Section className="pt-6">
        <div className="flex flex-wrap justify-center gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.5px)]"
            >
              <ProjectCard project={project} locale={locale} />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

function ToggleButton({
  active,
  label,
  onClick,
  disabled,
}: {
  active: boolean
  label: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      disabled={disabled}
      onClick={onClick}
      className={[
        "relative rounded-full px-4 py-2 text-sm font-medium transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
      ].join(" ")}
    >
      {label}
    </button>
  )
}
