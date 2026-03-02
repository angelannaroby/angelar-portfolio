import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type ContainerSize = "default" | "wide"

type Props<T extends ElementType> = {
  as?: T
  size?: ContainerSize
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">

const sizes: Record<ContainerSize, string> = {
  default: "max-w-5xl",
  wide: "max-w-6xl",
}

export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  className,
  children,
  ...rest
}: Props<T>) {
  const Component = (as ?? "div") as ElementType

  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6", sizes[size], className)}
      {...rest}
    >
      {children}
    </Component>
  )
}
