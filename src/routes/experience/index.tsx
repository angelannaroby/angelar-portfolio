import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { experience, experienceContent } from "@/features/experience"
import { ExperienceTabsSection } from "@/features/experience/components/ExperienceTabsSection"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/experience/")({
  component: ExperiencePage,
})

function ExperiencePage() {
  const { locale } = useLocale()

  return (
    <Section className="pt-8 pb-4 sm:pt-8 sm:pb-0">
      <ExperienceTabsSection
        locale={locale}
        content={experienceContent}
        entries={experience}
      />
    </Section>
  )
}
