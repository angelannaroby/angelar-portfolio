import { createFileRoute, notFound } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { projects } from "@/features/projects"
import { pickText } from "@/shared/i18n"
import { Badge } from "@/shared/ui/Badge"
import { PageHeader } from "@/shared/ui/PageHeader"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const { locale } = useLocale()
  const { projectId } = Route.useParams()

  const project = projects.find((p) => p.id === projectId)
  if (!project) throw notFound()

  return (
    <>
      <PageHeader
        title={pickText(project.title, locale)}
        subtitle={pickText(project.summary, locale)}
      />

      <Section className="pt-6">
        <div className="space-y-10">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            {project.featured && <Badge variant="accent">Featured</Badge>}
          </div>

          {project.caseStudy && (
            <div className="space-y-6">
              <CaseStudyBlock
                title="Problem"
                body={pickText(project.caseStudy.problem, locale)}
              />
              <CaseStudyBlock
                title="Solution"
                body={pickText(project.caseStudy.solution, locale)}
              />
              <CaseStudyBlock
                title="Impact"
                body={pickText(project.caseStudy.impact, locale)}
              />
            </div>
          )}

          {!!project.links.length && (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Links</h2>
              <ul className="list-disc pl-5 text-sm">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a
                      className="underline"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {pickText(l.label, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm leading-6 text-neutral-700">{body}</p>
    </section>
  )
}
