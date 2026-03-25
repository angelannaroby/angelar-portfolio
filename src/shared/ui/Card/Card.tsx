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
        "rounded-2xl border border-border/80 bg-surface/72 backdrop-blur-md",
        "shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04),0_18px_50px_rgb(0_0_0_/_0.22)]",
        "transition-all duration-200",
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
