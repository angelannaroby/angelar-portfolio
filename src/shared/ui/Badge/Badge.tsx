import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type BadgeTone = "default" | "primary"

/**
 * Standardize on `variant` going forward (neutral/subtle/accent/primary).
 * `tone` remains supported for backwards compatibility.
 */
export type BadgeVariant = "neutral" | "subtle" | "accent" | "primary"

type Props = {
  children: ReactNode
  className?: string

  /** @deprecated Prefer `variant` */
  tone?: BadgeTone

  variant?: BadgeVariant
}

const base =
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset"

const styles: Record<BadgeVariant, string> = {
  neutral: "bg-surface text-foreground ring-border",
  subtle: "bg-surface-2/60 text-foreground ring-border",
  accent: "bg-accent text-accent-foreground ring-border",
  primary: "bg-primary/15 text-foreground ring-primary/35",
}

function resolveVariant(
  variant: BadgeVariant | undefined,
  tone: BadgeTone | undefined,
): BadgeVariant {
  if (variant) return variant
  if (tone === "primary") return "primary"
  return "neutral"
}

export function Badge({ children, className, tone, variant }: Props) {
  const v = resolveVariant(variant, tone)

  return <span className={cn(base, styles[v], className)}>{children}</span>
}
