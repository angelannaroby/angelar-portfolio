import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { ContactForm } from "@/features/contact/components/ContactForm"
import { contactContent } from "@/features/contact/content"
import { pickText } from "@/shared/i18n"
import { PageHeader } from "@/shared/ui/PageHeader"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
})

function ContactPage() {
  const { locale } = useLocale()

  const title = pickText(contactContent.page.title, locale)
  const subtitle = pickText(contactContent.page.subtitle, locale)

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />

      <Section className="pt-6">
        <ContactForm locale={locale} />
      </Section>
    </>
  )
}
