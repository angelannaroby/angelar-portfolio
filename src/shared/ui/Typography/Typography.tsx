import type { ReactNode } from "react"

type TextProps = {
  children: ReactNode
  className?: string
}

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export function H1({ children, className }: TextProps) {
  return (
    <h1 className={cx("text-3xl font-bold tracking-tight", className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: TextProps) {
  return (
    <h2 className={cx("text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h2>
  )
}

export function H3({ children, className }: TextProps) {
  return (
    <h3 className={cx("text-lg font-semibold tracking-tight", className)}>
      {children}
    </h3>
  )
}

export function P({ children, className }: TextProps) {
  return (
    <p className={cx("leading-relaxed text-neutral-700", className)}>
      {children}
    </p>
  )
}

export function Small({ children, className }: TextProps) {
  return <p className={cx("text-sm text-neutral-600", className)}>{children}</p>
}
