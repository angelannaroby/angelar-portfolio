import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { recommendations, skillItems, skillsContent } from "@/features/skills"
import {
  RecommendationCard,
  SkillsHero,
  SkillsList,
} from "@/features/skills/components"
import { pickText } from "@/shared/i18n"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/skills/")({
  component: SkillsPage,
})

function SkillsPage() {
  const { locale } = useLocale()

  const recommendationsTitle = pickText(
    skillsContent.recommendations.title,
    locale,
  )
  const recommendationsSubtitle = pickText(
    skillsContent.recommendations.subtitle,
    locale,
  )

  return (
    <>
      {/* <Section>
        <SkillsHero locale={locale} />
      </Section> */}

      <Section className="pt-20">
        <SkillsList items={skillItems} locale={locale} />
      </Section>

      <Section className="pt-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {recommendationsTitle}
            </h2>
            <p className="max-w-[65ch] text-sm leading-7 text-muted-foreground sm:text-base">
              {recommendationsSubtitle}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {recommendations.map((recommendation) => (
              <RecommendationCard
                key={recommendation.id}
                recommendation={recommendation}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
