import { type ReactNode, useLayoutEffect, useRef } from "react"

type Props = {
  header: ReactNode
  footer?: ReactNode
  strip?: ReactNode
  children: ReactNode
  className?: string
}

/**
 * Responsive viewport page
 * - Mobile/tablet: natural document flow
 * - Desktop (lg+): strict viewport layout (no page scroll)
 *
 * Measures header/strip/footer heights and exposes remaining space via CSS var:
 *   --vp-content-h (px)
 */
export function ViewportPage({
  header,
  strip,
  footer,
  children,
  className,
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const stripRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const compute = () => {
      const headerH = headerRef.current?.offsetHeight ?? 0
      const stripH = stripRef.current?.offsetHeight ?? 0
      const footerH = footerRef.current?.offsetHeight ?? 0

      const remaining = window.innerHeight - headerH - stripH - footerH
      root.style.setProperty("--vp-content-h", `${Math.max(0, remaining)}px`)
    }

    compute()

    const ro = new ResizeObserver(() => compute())
    if (headerRef.current) ro.observe(headerRef.current)
    if (stripRef.current) ro.observe(stripRef.current)
    if (footerRef.current) ro.observe(footerRef.current)

    window.addEventListener("resize", compute)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", compute)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className={["min-h-dvh", "lg:h-dvh lg:overflow-hidden", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex min-h-dvh flex-col lg:h-full">
        <div ref={headerRef} className="shrink-0">
          {header}
        </div>

        <main className="lg:h-[var(--vp-content-h)] lg:min-h-0 lg:overflow-hidden">
          {children}
        </main>

        {strip ? (
          <div ref={stripRef} className="shrink-0">
            {strip}
          </div>
        ) : null}

        {footer ? (
          <div ref={footerRef} className="shrink-0">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  )
}
