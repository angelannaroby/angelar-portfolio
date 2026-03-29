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
      <Section className="pt-14 sm:pt-16">
        <SkillsStackSection items={skillItems} locale={locale} />
      </Section>

      <Section className="pt-6 sm:pt-8">
        <RecommendationsSection items={recommendations} locale={locale} />
      </Section>
    </>
  )
}
