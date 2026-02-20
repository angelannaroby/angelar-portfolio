import { createFileRoute } from "@tanstack/react-router"
import { Section } from "../shared/ui/Section"
import { H2, P } from "../shared/ui/Typography"

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
})

function ExperiencePage() {
  return (
    <Section>
      <div className="space-y-2">
        <H2>Experience & Education</H2>
        <P>We’ll structure this like a product resume.</P>
      </div>
    </Section>
  )
}