import { createFileRoute } from "@tanstack/react-router"
import { Section } from "../shared/ui/Section"
import { H2, P } from "../shared/ui/Typography"

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
})

function SkillsPage() {
  return (
    <Section>
      <div className="space-y-2">
        <H2>Skills</H2>
        <P>We’ll group skills by strengths, not by buzzwords.</P>
      </div>
    </Section>
  )
}