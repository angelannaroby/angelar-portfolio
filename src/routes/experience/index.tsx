import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { experience, experienceContent } from "@/features/experience"
import {
  ExperienceFocusPills,
  ExperienceHero,
  ExperienceTabsPanel,
} from "@/features/experience/components"
import { Container } from "@/shared/ui/Container"

export const Route = createFileRoute("/experience/")({
  component: ExperiencePage,
})

function ExperiencePage() {
  const { locale } = useLocale()

  return (
    <>
      <Container size="wide" className="pt-14 pb-6 sm:pt-16 sm:pb-8">
        <ExperienceHero locale={locale} content={experienceContent} />
      </Container>

      <Container size="wide" className="pt-0 pb-14 sm:pb-16">
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
      </Container>
    </>
  )
}
