import { useMemo, useState } from "react"

import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"
import { TabbedCollectionSection } from "@/shared/ui/TabbedCollectionSection"

import { projectsContent } from "../content"
import type { Project, ProjectCategory } from "../types"

import { ProjectCard } from "./ProjectCard"
import { ProjectDetailView } from "./ProjectDetailView"

type Props = {
  locale: Locale
  projects: Project[]
  className?: string
}

export function ProjectsTabsSection({ locale, projects, className }: Props) {
  const [tab, setTab] = useState<ProjectCategory>("professional")
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  )

  const professionalLabel = pickText(
    projectsContent.page.toggle.professional,
    locale,
  )
  const personalLabel = pickText(projectsContent.page.toggle.personal, locale)
  const ariaLabel = pickText(projectsContent.page.aria.categoryToggle, locale)

  const hasPersonalProjects = useMemo(
    () =>
      projects.some(
        (project) => (project.category ?? "professional") === "personal",
      ),
    [projects],
  )

  const options = [
    { value: "professional", label: professionalLabel },
    { value: "personal", label: personalLabel, disabled: !hasPersonalProjects },
  ] as const

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) => (project.category ?? "professional") === tab,
    )
  }, [projects, tab])

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [projects, selectedProjectId],
  )

  return (
    <>
      <TabbedCollectionSection
        value={tab}
        options={options}
        onChange={setTab}
        ariaLabel={ariaLabel}
        className={cn(className)}
        contentClassName="flex flex-wrap justify-center gap-5"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.5px)]"
          >
            <ProjectCard
              project={project}
              locale={locale}
              onOpen={() => setSelectedProjectId(project.id)}
            />
          </div>
        ))}
      </TabbedCollectionSection>

      {selectedProject ? (
        <ProjectDetailView
          project={selectedProject}
          locale={locale}
          open
          onClose={() => setSelectedProjectId(null)}
        />
      ) : null}
    </>
  )
}
