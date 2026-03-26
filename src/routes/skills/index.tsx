import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { recommendations, skillItems } from "@/features/skills"
import {
  RecommendationsSection,
  SkillsStackSection,
} from "@/features/skills/components"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/skills/")({
  component: SkillsPage,
})

function SkillsPage() {
  const { locale } = useLocale()

  return (
    <>
      <Section className="pt-20">
        <SkillsStackSection items={skillItems} locale={locale} />
      </Section>

      <Section className="pt-10">
        <RecommendationsSection items={recommendations} locale={locale} />
      </Section>
    </>
  )
}
