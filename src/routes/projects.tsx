import { createFileRoute } from "@tanstack/react-router"
import { Section } from "../shared/ui/Section"
import { H2, P } from "../shared/ui/Typography"

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <Section>
      <div className="space-y-2">
        <H2>Projects</H2>
        <P>Coming next: search + filters + case studies.</P>
      </div>
    </Section>
  )
}