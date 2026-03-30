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
      <Section className="pt-8 pb-4 sm:pt-8 sm:pb-0">
        <ContactForm locale={locale} />
      </Section>
    </>
  )
}
