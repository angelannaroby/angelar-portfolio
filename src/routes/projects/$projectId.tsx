import { createFileRoute, notFound } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { projects } from "@/features/projects"
import { projectsContent } from "@/features/projects/content"
import { pickText } from "@/shared/i18n"
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

  const problemTitle = pickText(projectsContent.detail.personal.problem, locale)
  const solutionTitle = pickText(
    projectsContent.detail.personal.solution,
    locale,
  )
  const impactTitle = pickText(projectsContent.detail.personal.impact, locale)
  const linksTitle = pickText(projectsContent.detail.linksTitle, locale)

  return (
    <>
      <PageHeader
        title={pickText(project.title, locale)}
        subtitle={pickText(project.summary, locale)}
      />

      <Section className="pt-6">
        <div className="space-y-10">
          {project.caseStudy ? (
            <div className="space-y-6">
              <CaseStudyBlock
                title={problemTitle}
                body={pickText(project.caseStudy.problem, locale)}
              />
              <CaseStudyBlock
                title={solutionTitle}
                body={pickText(project.caseStudy.solution, locale)}
              />
              <CaseStudyBlock
                title={impactTitle}
                body={pickText(project.caseStudy.impact, locale)}
              />
            </div>
          ) : null}

          {project.links.length ? (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">
                {linksTitle}
              </h2>
              <ul className="list-disc pl-5 text-sm text-foreground">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a
                      className="underline underline-offset-4 hover:opacity-80"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {pickText(l.label, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Section>
    </>
  )
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="text-sm leading-6 text-muted-foreground">{body}</p>
    </section>
  )
}
