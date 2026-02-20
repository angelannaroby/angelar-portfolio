import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"
type ButtonSize = "sm" | "md"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none"

const variants: Record<ButtonVariant, string> = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-neutral-900",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:outline-neutral-900",
  ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100 focus-visible:outline-neutral-900",
}

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
}

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={[base, variants[variant], sizes[size], className].filter(Boolean).join(" ")}
      {...rest}
    >
      {leftIcon}
      {isLoading ? <span aria-live="polite">Loading…</span> : children}
      {rightIcon}
    </button>
  )
}