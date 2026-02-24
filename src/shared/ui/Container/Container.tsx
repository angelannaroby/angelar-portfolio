import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

type Props<T extends ElementType> = {
  as?: T
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: Props<T>) {
  const Component = (as ?? "div") as ElementType

  return (
    <Component
      className={["mx-auto w-full max-w-5xl px-4", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Component>
  )
}
