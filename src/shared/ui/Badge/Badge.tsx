import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type BadgeTone = "default" | "primary"

/**
 * Standardize on `variant` going forward (neutral/subtle/accent/primary).
 * `tone` remains supported for backwards compatibility.
 */
export type BadgeVariant = "neutral" | "subtle" | "accent" | "primary"

export type BadgeProps = {
  children: ReactNode
  className?: string

  /** @deprecated Prefer `variant` */
  tone?: BadgeTone

  variant?: BadgeVariant
}

const base =
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-[0.01em] " +
  "ring-1 ring-inset transition-colors"

const styles: Record<BadgeVariant, string> = {
  neutral:
    "bg-surface/70 text-foreground ring-border/80 backdrop-blur-sm shadow-[inset_0_1px_0_rgb(255_255_255_/_0.03)]",
  subtle:
    "bg-surface-2/70 text-foreground ring-border/70 backdrop-blur-sm shadow-[inset_0_1px_0_rgb(255_255_255_/_0.03)]",
  accent:
    "bg-accent/80 text-accent-foreground ring-border/70 backdrop-blur-sm shadow-[inset_0_1px_0_rgb(255_255_255_/_0.03)]",
  primary:
    "bg-primary/14 text-foreground ring-primary/30 backdrop-blur-sm shadow-[inset_0_1px_0_rgb(255_255_255_/_0.02)]",
}

function resolveVariant(
  variant: BadgeVariant | undefined,
  tone: BadgeTone | undefined,
): BadgeVariant {
  if (variant) return variant
  if (tone === "primary") return "primary"
  return "neutral"
}

export function Badge({ children, className, tone, variant }: BadgeProps) {
  const v = resolveVariant(variant, tone)

  return <span className={cn(base, styles[v], className)}>{children}</span>
}
