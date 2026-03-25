import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { experience, experienceContent } from "@/features/experience"
import {
  ExperienceFocusPills,
  ExperienceHero,
  ExperienceTabsPanel,
} from "@/features/experience/components"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/experience/")({
  component: ExperiencePage,
})

function ExperiencePage() {
  const { locale } = useLocale()

  return (
    <>
      {/* <Section>
        <ExperienceHero locale={locale} content={experienceContent} />
      </Section> */}

      <Section className="pt-20 pb-14 sm:pb-16">
        <div className="space-y-10">
          <ExperienceFocusPills
            locale={locale}
            title={experienceContent.focus.title}
            items={experienceContent.focus.items}
          />

          <ExperienceTabsPanel
            locale={locale}
            content={experienceContent}
            entries={experience}
          />
        </div>
      </Section>
    </>
  )
}
