import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
})

function ExperiencePage() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">Experience & Education</h1>
      <p className="text-neutral-700">We’ll structure this like a product resume.</p>
    </section>
  )
}