import { recommendations, skillItems } from "@/features/skills"
import { Section } from "@/shared/ui/Section"
import { ViewportPage } from "@/shared/ui/ViewportPage"

import { RecommendationsSection } from "./RecommendationsSection"
import { SkillsStackSection } from "./SkillsStackSection"

export function SkillsPage() {
  return (
    <ViewportPage>
      <Section className="pt-10 sm:pt-12 lg:pt-14">
        <SkillsStackSection items={skillItems} />
      </Section>

      <Section className="pt-4 pb-2 sm:pt-6 sm:pb-2 lg:pt-2">
        <RecommendationsSection items={recommendations} />
      </Section>
    </ViewportPage>
  )
}
