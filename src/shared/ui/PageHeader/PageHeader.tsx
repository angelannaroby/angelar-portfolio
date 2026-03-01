import { useId } from "react"

import type { ElementType, ReactNode } from "react"

import { Container } from "../Container"
import { H1, P } from "../Typography"

type PageHeaderProps = {
  title: string
  subtitle?: string
  actions?: ReactNode
  as?: ElementType
}

export function PageHeader({
  title,
  subtitle,
  actions,
  as: Comp = "header",
}: PageHeaderProps) {
  const subtitleId = useId()
  const describedBy = subtitle ? subtitleId : undefined

  return (
    <Comp className="border-b border-border" aria-describedby={describedBy}>
      <Container className="py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <H1>{title}</H1>
            {subtitle ? (
              <P id={subtitleId} className="text-muted-foreground">
                {subtitle}
              </P>
            ) : null}
          </div>

          {actions ? (
            <div className="flex items-center gap-2">{actions}</div>
          ) : null}
        </div>
      </Container>
    </Comp>
  )
}
