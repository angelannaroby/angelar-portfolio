import { createFileRoute, Link } from "@tanstack/react-router"

import { Button } from "@/shared/ui/Button"
import { Section } from "@/shared/ui/Section"
import { H1, P } from "@/shared/ui/Typography"

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

        <div className="pt-2">
          <Link to="/contact">
            <Button variant="primary">Contact me</Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
