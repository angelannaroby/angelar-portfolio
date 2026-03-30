import { Section } from "@/shared/ui/Section"
import { ViewportPage } from "@/shared/ui/ViewportPage"

import { ContactSection } from "./ContactSection"

export function ContactPage() {
  return (
    <ViewportPage>
      <Section className="pt-8 pb-4 sm:pt-10 sm:pb-2 lg:pt-12">
        <ContactSection />
      </Section>
    </ViewportPage>
  )
}
