import { useId } from "react"

import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

import { Container } from "../Container"

type SectionProps = {
  children: ReactNode
  title?: string
  description?: string
  className?: string
}

export function Section({
  children,
  title,
  description,
  className,
}: SectionProps) {
  const titleId = useId()
  const descriptionId = useId()

  return (
    <section
      className={cn("py-0", className)}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descriptionId : undefined}
    >
      <Container>
        {title || description ? (
          <header className="mb-6 space-y-1">
            {title ? (
              <h2
                id={titleId}
                className="text-xl font-semibold text-foreground"
              >
                {title}
              </h2>
            ) : null}

            {description ? (
              <p id={descriptionId} className="text-sm text-muted-foreground">
                {description}
              </p>
            ) : null}
          </header>
        ) : null}

        {children}
      </Container>
    </section>
  )
}
