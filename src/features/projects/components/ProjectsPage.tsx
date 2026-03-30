import { projects } from "@/features/projects"
import { Section } from "@/shared/ui/Section"
import { ViewportPage } from "@/shared/ui/ViewportPage"

import { ProjectsCollectionSection } from "./ProjectsCollectionSection"

export function ProjectsPage() {
  return (
    <ViewportPage className="pb-10 md:pb-12">
      <Section className="pt-8 pb-4 sm:pt-10 sm:pb-2 lg:pt-12">
        <ProjectsCollectionSection projects={projects} />
      </Section>
    </ViewportPage>
  )
}
