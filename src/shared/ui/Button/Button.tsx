import React from "react"

import { Slot } from "@radix-ui/react-slot"
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"
type ButtonSize = "sm" | "md"

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
}

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: false
    children: ReactNode
  }

type AsChildProps = CommonProps & {
  asChild: true
  children: ReactElement
} & Omit<React.HTMLAttributes<HTMLElement>, "children">

export type ButtonProps = NativeButtonProps | AsChildProps

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50"

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-neutral-900 " +
    "dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:outline-white",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:outline-neutral-900 " +
    "dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:focus-visible:outline-white",
  outline:
    "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-neutral-900 " +
    "dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900 dark:focus-visible:outline-white",
  ghost:
    "bg-transparent text-neutral-900 hover:bg-neutral-100 focus-visible:outline-neutral-900 " +
    "dark:text-neutral-50 dark:hover:bg-neutral-900 dark:focus-visible:outline-white",
}

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
}

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ")
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
  } = props

  const classes = cx(base, variants[variant], sizes[size], className)

  const renderInner = (main: ReactNode) => (
    <>
      {leftIcon}
      {isLoading ? <span aria-live="polite">Loading…</span> : main}
      {rightIcon}
    </>
  )

  if (props.asChild) {
    const { children, ...rest } = props

    const existingChildren =
      (children.props as { children?: ReactNode }).children ?? null

    const cloned = React.cloneElement(children, {
      children: renderInner(existingChildren),
    } as unknown as Partial<typeof children.props>)

    return (
      <Slot className={classes} aria-busy={isLoading || undefined} {...rest}>
        {cloned}
      </Slot>
    )
  }

  const { disabled, type = "button", children, ...rest } = props
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {renderInner(children)}
    </button>
  )
}
