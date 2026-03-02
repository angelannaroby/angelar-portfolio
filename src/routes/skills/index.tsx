import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { skillGroups, skillsContent } from "@/features/skills"
import { pickText } from "@/shared/i18n"
import { Badge } from "@/shared/ui/Badge"
import { PageHeader } from "@/shared/ui/PageHeader"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/skills/")({
  component: SkillsPage,
})

function SkillsPage() {
  const { locale } = useLocale()

  const title = pickText(skillsContent.page.title, locale)
  const subtitle = pickText(skillsContent.page.subtitle, locale)

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />

      <Section className="pt-6">
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <section key={group.id} className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">
                {pickText(group.title, locale)}
              </h2>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={`${group.id}-${skill}`} variant="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  )
}
