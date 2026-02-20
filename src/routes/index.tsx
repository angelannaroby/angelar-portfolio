import { createFileRoute } from "@tanstack/react-router"
import { Section } from "../shared/ui/Section"
import { H1, P } from "../shared/ui/Typography"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  return (
    <Section>
      <div className="space-y-3">
        <H1>Hi, I’m Angel</H1>
        <P>
          I build production-grade web applications with React, TypeScript, and
          strong engineering practices.
        </P>
      </div>
    </Section>
  )
}