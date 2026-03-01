import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type TextProps = {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TextProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className }: TextProps) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className }: TextProps) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h3>
  )
}

export function P({ children, className }: TextProps) {
  return (
    <p className={cn("leading-relaxed text-foreground", className)}>
      {children}
    </p>
  )
}

export function Small({ children, className }: TextProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  )
}
