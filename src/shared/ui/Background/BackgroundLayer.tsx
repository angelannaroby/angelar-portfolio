import { cn } from "@/shared/lib/cn"

import { type BackgroundKey, BG } from "./backgrounds"

type Props = {
  variant: BackgroundKey
  className?: string
}

export function BackgroundLayer({ variant, className }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        BG[variant],
        className,
      )}
    />
  )
}
