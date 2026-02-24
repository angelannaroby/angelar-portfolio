import type { ReactNode } from "react"

import { Container } from "../Container"
import { H1, P } from "../Typography"

type PageHeaderProps = {
  title: string
  subtitle?: string
  actions?: ReactNode
}

export function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <header className="border-b">
      <Container className="py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <H1>{title}</H1>
            {subtitle && <P className="text-neutral-600">{subtitle}</P>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      </Container>
    </header>
  )
}
