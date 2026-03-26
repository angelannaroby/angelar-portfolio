import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { experience, experienceContent } from "@/features/experience"
import { ExperienceTabsPanel } from "@/features/experience/components"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/experience/")({
  component: ExperiencePage,
})

function ExperiencePage() {
  const { locale } = useLocale()

  return (
    <Section className="pt-8 sm:pt-4 pb-4 sm:pb-0">
      <div className="space-y-8">
        <ExperienceTabsPanel
          locale={locale}
          content={experienceContent}
          entries={experience}
        />
      </div>
    </Section>
  )
}
