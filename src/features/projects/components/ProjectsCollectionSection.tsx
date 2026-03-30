import { useEffect, useMemo, useState } from "react"

import { useLocale } from "@/app/providers"
import { cn } from "@/shared/lib/cn"
import { TabbedCollectionSection } from "@/shared/ui/TabbedCollectionSection"

import { useProjectsViewModel } from "../hooks/useProjectsViewModel"
import type { Project, ProjectCategory } from "../types"

import { ProjectCard } from "./ProjectCard"
import { ProjectDetailView } from "./ProjectDetailView"

type Props = {
  projects: Project[]
  className?: string
}

export function ProjectsCollectionSection({ projects, className }: Props) {
  const { locale } = useLocale()
  const text = useProjectsViewModel(locale)

  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("professional")
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  )

  const hasPersonalProjects = useMemo(
    () =>
      projects.some(
        (project) => (project.category ?? "professional") === "personal",
      ),
    [projects],
  )

  const categoryOptions = [
    { value: "professional", label: text.toggle.professional },
    {
      value: "personal",
      label: text.toggle.personal,
      disabled: !hasPersonalProjects,
    },
  ] as const

  const visibleProjects = useMemo(() => {
    return projects.filter(
      (project) => (project.category ?? "professional") === activeCategory,
    )
  }, [projects, activeCategory])

  useEffect(() => {
    setSelectedProjectId(null)
  }, [activeCategory])

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [projects, selectedProjectId],
  )

  return (
    <>
      <TabbedCollectionSection
        value={activeCategory}
        options={categoryOptions}
        onChange={setActiveCategory}
        ariaLabel={text.aria.categoryToggle}
        className={cn(className)}
        contentClassName="flex flex-wrap justify-center gap-5"
      >
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.5px)]"
          >
            <ProjectCard
              project={project}
              onOpen={() => setSelectedProjectId(project.id)}
            />
          </div>
        ))}
      </TabbedCollectionSection>

      {selectedProject ? (
        <ProjectDetailView
          project={selectedProject}
          open
          onClose={() => setSelectedProjectId(null)}
        />
      ) : null}
    </>
  )
}
