import { useMemo } from "react"

import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import {
  experience,
  ExperienceCard,
  experienceContent,
} from "@/features/experience"
import { pickText } from "@/shared/i18n"
import { PageHeader } from "@/shared/ui/PageHeader"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/experience/")({
  component: ExperiencePage,
})

function ExperiencePage() {
  const { locale } = useLocale()

  const { work, education } = useMemo(() => {
    const workEntries = experience
      .filter((e) => e.kind === "work")
      .slice()
      .sort((a, b) => b.start.localeCompare(a.start))

    const educationEntries = experience
      .filter((e) => e.kind === "education")
      .slice()
      .sort((a, b) => b.start.localeCompare(a.start))

    return { work: workEntries, education: educationEntries }
  }, [])

  const title = pickText(experienceContent.page.title, locale)
  const subtitle = pickText(experienceContent.page.subtitle, locale)
  const workTitle = pickText(experienceContent.sections.work, locale)
  const educationTitle = pickText(experienceContent.sections.education, locale)

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />

      <Section className="pt-6">
        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              {workTitle}
            </h2>
            <div className="grid gap-4">
              {work.map((entry) => (
                <ExperienceCard key={entry.id} entry={entry} locale={locale} />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              {educationTitle}
            </h2>
            <div className="grid gap-4">
              {education.map((entry) => (
                <ExperienceCard key={entry.id} entry={entry} locale={locale} />
              ))}
            </div>
          </section>
        </div>
      </Section>
    </>
  )
}
