import type { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

/**
 * Constrains content width and applies consistent horizontal padding.
 */
export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={["mx-auto w-full max-w-5xl px-4", className].filter(Boolean).join(" ")}>
      {children}
    </Component>
  )
}