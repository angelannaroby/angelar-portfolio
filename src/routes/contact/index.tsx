import { createFileRoute } from "@tanstack/react-router"

import { useLocale } from "@/app/providers"
import { ContactForm } from "@/features/contact/components/ContactForm"
import { Section } from "@/shared/ui/Section"

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
})

function ContactPage() {
  const { locale } = useLocale()

  return (
    <>
      <Section className="pt-6">
        <ContactForm locale={locale} />
      </Section>
    </>
  )
}
