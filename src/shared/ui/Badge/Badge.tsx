import type { HTMLAttributes, ReactNode } from "react"

type BadgeVariant = "neutral" | "accent"

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  neutral: "bg-neutral-100 text-neutral-800",
  accent: "bg-neutral-900 text-white",
}

export function Badge({ children, variant = "neutral", className, ...rest }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </span>
  )
}