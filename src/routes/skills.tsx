import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
})

function SkillsPage() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">Skills</h1>
      <p className="text-neutral-700">We’ll group skills by strengths, not by buzzwords.</p>
    </section>
  )
}