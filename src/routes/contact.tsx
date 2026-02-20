import { createFileRoute } from "@tanstack/react-router"
import { Section } from "../shared/ui/Section"
import { H2, P } from "../shared/ui/Typography"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

function ContactPage() {
  return (
    <Section>
      <div className="space-y-2">
        <H2>Contact</H2>
        <P>Next: React Hook Form + Zod validation.</P>
      </div>
    </Section>
  )
}