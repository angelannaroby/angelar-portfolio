import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { ContactForm } from "@/features/contact/components/ContactForm"
import { PageHeader } from "@/shared/ui/PageHeader"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
})

function ContactPage() {
  const { locale } = useLocale()

  return (
    <>
      <PageHeader
        title={locale === "en" ? "Contact" : "Kontakt"}
        subtitle={
          locale === "en"
            ? "Let’s connect — I’m open to internships and working student roles."
            : "Lass uns sprechen — ich bin offen für Praktika und Werkstudentenstellen."
        }
      />

      <Section className="pt-6">
        <ContactForm locale={locale} />
      </Section>
    </>
  )
}
