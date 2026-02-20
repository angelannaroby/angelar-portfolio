import type { ReactNode } from "react"
import { Container } from "../Container"

type SectionProps = {
  children: ReactNode
  title?: string
  description?: string
  className?: string
}

export function Section({ children, title, description, className }: SectionProps) {
  return (
    <section className={["py-10", className].filter(Boolean).join(" ")}>
      <Container>
        {(title || description) && (
          <header className="mb-6 space-y-1">
            {title && <h2 className="text-xl font-semibold">{title}</h2>}
            {description && <p className="text-sm text-neutral-600">{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}