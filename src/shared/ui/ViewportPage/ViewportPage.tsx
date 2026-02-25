import type { ReactNode } from "react"

type Props = {
  header: ReactNode
  footer?: ReactNode
  strip?: ReactNode
  children: ReactNode
  className?: string
}

/**
 * A strict viewport page:
 * - header / strip / footer are fixed in layout
 * - the content area gets the remaining space
 * - prevents body scrolling; content can scroll if it overflows
 */
export function ViewportPage({
  header,
  strip,
  footer,
  children,
  className,
}: Props) {
  return (
    <div
      className={["min-h-dvh h-dvh overflow-hidden", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex h-full flex-col">
        <div className="shrink-0">{header}</div>

        <div className="min-h-0 flex-1">{children}</div>

        {strip ? <div className="shrink-0">{strip}</div> : null}
        {footer ? <div className="shrink-0">{footer}</div> : null}
      </div>
    </div>
  )
}
