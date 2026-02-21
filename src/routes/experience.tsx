import { createFileRoute } from "@tanstack/react-router"
import { experience } from "../features/experience/data/experience"
import { ExperienceCard } from "../features/experience/components/ExperienceCard"
import type { Locale } from "../shared/i18n"
import { PageHeader } from "../shared/ui/PageHeader"
import { Section } from "../shared/ui/Section"

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
})

function ExperiencePage() {
  const locale: Locale = "en"

  const work = experience.filter((e) => e.kind === "work")
  const education = experience.filter((e) => e.kind === "education")

  return (
    <>
      <PageHeader title="Experience & Education" subtitle="Roles and education highlights." />
      <Section className="pt-6">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Work Experience</h2>
            <div className="grid gap-4">
              {work.map((entry) => (
                <ExperienceCard key={entry.id} entry={entry} locale={locale} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Education</h2>
            <div className="grid gap-4">
              {education.map((entry) => (
                <ExperienceCard key={entry.id} entry={entry} locale={locale} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}