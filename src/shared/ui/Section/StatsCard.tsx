import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type StatsCardProps = {
  className?: string
  minWidthClassName?: string // allows Experience's min width behavior
  children: ReactNode
}

export function StatsCard({
  className,
  minWidthClassName = "min-w-[340px]",
  children,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-surface-2/60 shadow-sm backdrop-blur",
        className,
      )}
    >
      <div
        className={cn(
          "grid grid-cols-2 divide-x divide-border",
          minWidthClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}

type StatItemProps = {
  icon?: ReactNode
  value: ReactNode
  label: ReactNode
  className?: string
}

export function StatItem({ icon, value, label, className }: StatItemProps) {
  return (
    <div className={cn("flex items-center gap-4 px-7 py-6", className)}>
      {icon ? (
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-background/70 ring-1 ring-border">
          {icon}
        </div>
      ) : null}

      <div className="min-w-0">
        <div className="text-3xl font-semibold tracking-tight text-foreground">
          {value}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}
