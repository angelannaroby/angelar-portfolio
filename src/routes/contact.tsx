import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

function ContactPage() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-neutral-700">Next: React Hook Form + Zod validation.</p>
    </section>
  )
}