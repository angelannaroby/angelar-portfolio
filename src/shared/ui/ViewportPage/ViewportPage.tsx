import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type ViewportPageProps = {
  header?: ReactNode
  footer?: ReactNode
  strip?: ReactNode
  children: ReactNode
  className?: string
  contentClassName?: string
}

export function ViewportPage({
  header,
  strip,
  footer,
  children,
  className,
  contentClassName,
}: ViewportPageProps) {
  return (
    <div className={cn("min-h-full", className)}>
      {header ? <div>{header}</div> : null}

      <div className={cn("min-h-full", contentClassName)}>{children}</div>

      {strip ? <div>{strip}</div> : null}
      {footer ? <div>{footer}</div> : null}
    </div>
  )
}
