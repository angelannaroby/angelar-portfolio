import type { ReactNode } from "react"

type TextProps = {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TextProps) {
  return <h1 className={["text-3xl font-bold tracking-tight", className].filter(Boolean).join(" ")}>{children}</h1>
}

export function H2({ children, className }: TextProps) {
  return <h2 className={["text-2xl font-semibold tracking-tight", className].filter(Boolean).join(" ")}>{children}</h2>
}

export function P({ children, className }: TextProps) {
  return <p className={["text-neutral-700 leading-relaxed", className].filter(Boolean).join(" ")}>{children}</p>
}

export function Small({ children, className }: TextProps) {
  return <p className={["text-sm text-neutral-600", className].filter(Boolean).join(" ")}>{children}</p>
}