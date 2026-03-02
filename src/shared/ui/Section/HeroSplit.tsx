import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type Props = {
  className?: string
  left: ReactNode
  right?: ReactNode
}

export function HeroSplit({ className, left, right }: Props) {
  return (
    <header
      className={cn(
        "py-14 sm:py-16 lg:py-20",
        "grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center",
        className,
      )}
    >
      <div className="min-w-0">{left}</div>
      {right ? <div className="min-w-0">{right}</div> : null}
    </header>
  )
}
