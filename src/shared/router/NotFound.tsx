import { Link } from "@tanstack/react-router"

import { Section } from "@/shared/ui/Section"
import { H2, P } from "@/shared/ui/Typography"

export function NotFound() {
  return (
    <Section className="pt-12 text-center">
      <div className="space-y-4">
        <H2>404 – Page Not Found</H2>
        <P>The page you are looking for does not exist.</P>
        <div>
          <Link
            to="/"
            className="text-sm font-medium underline underline-offset-4"
          >
            Go back home
          </Link>
        </div>
      </div>
    </Section>
  )
}
