import { experience } from "@/features/experience"
import { Section } from "@/shared/ui/Section"
import { ViewportPage } from "@/shared/ui/ViewportPage"

import { ExperienceCollectionSection } from "./ExperienceCollectionSection"

export function ExperiencePage() {
  return (
    <ViewportPage className="pb-10 md:pb-12">
      <Section className="pt-8 pb-4 sm:pt-10 sm:pb-2 lg:pt-12">
        <ExperienceCollectionSection entries={experience} />
      </Section>
    </ViewportPage>
  )
}
