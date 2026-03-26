import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { projects } from "@/features/projects"
import { ProjectsTabsSection } from "@/features/projects/components/ProjectTabsSection"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
})

function ProjectsPage() {
  const { locale } = useLocale()

  return (
    <Section className="pt-8 pb-4 sm:pt-4 sm:pb-0">
      <ProjectsTabsSection locale={locale} projects={projects} />
    </Section>
  )
}
