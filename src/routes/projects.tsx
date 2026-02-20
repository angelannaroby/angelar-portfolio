import { createFileRoute } from "@tanstack/react-router"
import { Section } from "../shared/ui/Section"
import { H2, P } from "../shared/ui/Typography"
import { Card, CardContent, CardHeader } from "../shared/ui/Card"
import { Badge } from "../shared/ui/Badge"
import { Button } from "../shared/ui/Button"

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <Section>
      <div className="space-y-6">
        <div className="space-y-2">
          <H2>Projects</H2>
          <P>Next: typed data model + search/filter + case studies.</P>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="font-semibold">Example Project Card</p>
                <p className="text-sm text-neutral-600">Short description goes here.</p>
              </div>
              <Button variant="secondary" size="sm">
                View
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind</Badge>
              <Badge variant="accent">CI</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}