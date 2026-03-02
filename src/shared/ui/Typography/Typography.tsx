import type { HTMLAttributes, PropsWithChildren } from "react"

import { cn } from "@/shared/lib/cn"

type BaseProps<T> = PropsWithChildren<
  HTMLAttributes<T> & {
    className?: string
  }
>

export function H1({
  children,
  className,
  ...props
}: BaseProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "text-3xl font-bold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function H2({
  children,
  className,
  ...props
}: BaseProps<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={cn(
        "text-2xl font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function H3({
  children,
  className,
  ...props
}: BaseProps<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn(
        "text-lg font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h3>
  )
}

export function P({
  children,
  className,
  ...props
}: BaseProps<HTMLParagraphElement>) {
  return (
    <p {...props} className={cn("text-sm leading-6", className)}>
      {children}
    </p>
  )
}

export function Small({
  children,
  className,
  ...props
}: BaseProps<HTMLParagraphElement>) {
  return (
    <p {...props} className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}
