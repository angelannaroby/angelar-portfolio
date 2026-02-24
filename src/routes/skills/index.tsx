import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { skillGroups } from "@/features/skills/data"
import { Badge } from "@/shared/ui/Badge"
import { PageHeader } from "@/shared/ui/PageHeader"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/skills/")({
  component: SkillsPage,
})

function SkillsPage() {
  const { locale } = useLocale()

  return (
    <>
      <PageHeader
        title={locale === "en" ? "Skills" : "Kenntnisse"}
        subtitle={
          locale === "en"
            ? "Technical competencies and tools."
            : "Technische Kompetenzen und Tools."
        }
      />

      <Section className="pt-6">
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <section key={group.id} className="space-y-4">
              <h2 className="text-lg font-semibold">
                {locale === "en" ? group.label.en : group.label.de}
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
