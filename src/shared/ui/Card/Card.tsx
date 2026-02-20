import type { HTMLAttributes, ReactNode } from "react"

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

type CardSectionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border bg-white shadow-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...rest }: CardSectionProps) {
  return (
    <div className={["border-b px-4 py-3", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  )
}

export function CardContent({ children, className, ...rest }: CardSectionProps) {
  return (
    <div className={["px-4 py-4", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  )
}