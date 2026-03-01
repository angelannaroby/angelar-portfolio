import { forwardRef } from "react"

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type PolymorphicProps<TAs extends ElementType> = {
  as?: TAs
  className?: string
} & Omit<ComponentPropsWithoutRef<TAs>, "as" | "className">

export const Card = forwardRef(function Card<TAs extends ElementType = "div">(
  { as, className, ...props }: PolymorphicProps<TAs>,
  ref: React.ForwardedRef<Element>,
) {
  const Comp = (as ?? "div") as ElementType

  return (
    <Comp
      ref={ref}
      className={cn(
        "rounded-xl border border-border bg-surface-2/60 backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  )
})

Card.displayName = "Card"

type SlotProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<"div">

export function CardHeader({ children, className, ...props }: SlotProps) {
  return (
    <div className={cn("px-5 py-4", className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ children, className, ...props }: SlotProps) {
  return (
    <div className={cn("px-5 py-4", className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className, ...props }: SlotProps) {
  return (
    <div className={cn("px-5 py-4", className)} {...props}>
      {children}
    </div>
  )
}
