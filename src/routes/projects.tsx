import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="text-neutral-700">Coming next: search + filters + case studies.</p>
    </section>
  )
}