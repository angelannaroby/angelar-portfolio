import { createFileRoute } from "@tanstack/react-router"

import { ExperiencePage } from "@/features/experience"

export const Route = createFileRoute("/experience/")({
  component: ExperienceRoute,
})

function ExperienceRoute() {
  return <ExperiencePage />
}
