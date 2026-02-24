import type { ErrorComponentProps } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

import { Section } from "@/shared/ui/Section"
import { H2, P } from "@/shared/ui/Typography"

export function RouterErrorBoundary({ error }: ErrorComponentProps) {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred."

  return (
    <Section className="pt-12">
      <div className="space-y-3">
        <H2>Something went wrong</H2>
        <P>{message}</P>

        <div className="pt-2">
          <Link to="/" className="underline underline-offset-4">
            Go back home
          </Link>
        </div>

        <details className="pt-4">
          <summary className="cursor-pointer text-sm text-neutral-700">
            Technical details
          </summary>
          <pre className="mt-2 overflow-auto rounded bg-neutral-100 p-4 text-xs text-neutral-800">
            {String(error)}
          </pre>
        </details>
      </div>
    </Section>
  )
}
