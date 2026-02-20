import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-bold tracking-tight">Hi, I’m Angel</h1>
      <p className="text-neutral-700">
        I build production-grade web applications with React, TypeScript, and
        strong engineering practices.
      </p>
    </section>
  )
}