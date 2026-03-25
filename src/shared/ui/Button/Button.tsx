import { Slot } from "@radix-ui/react-slot"
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react"

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
} & Omit<HTMLAttributes<HTMLElement>, "children">

export type ButtonProps = NativeButtonProps | AsChildProps

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "shadow-[0_1px_2px_rgb(0_0_0_/_0.18)]"

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground " +
    "shadow-[0_10px_30px_rgb(var(--color-primary)/0.18),0_1px_2px_rgb(0_0_0_/_0.2)] " +
    "hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-[0_14px_34px_rgb(var(--color-primary)/0.22),0_4px_12px_rgb(0_0_0_/_0.24)] " +
    "active:translate-y-0 active:bg-primary/88",

  secondary:
    "border border-border/80 bg-surface/85 text-foreground backdrop-blur-sm " +
    "shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04),0_6px_18px_rgb(0_0_0_/_0.18)] " +
    "hover:-translate-y-0.5 hover:bg-surface-2/88 hover:border-border hover:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05),0_10px_24px_rgb(0_0_0_/_0.22)] " +
    "active:translate-y-0 active:bg-surface-2/78",

  outline:
    "border border-border bg-background/20 text-foreground backdrop-blur-sm " +
    "hover:-translate-y-0.5 hover:bg-surface/55 hover:border-border-strong " +
    "active:translate-y-0 active:bg-surface/48",

  ghost:
    "bg-transparent text-foreground " +
    "hover:bg-surface/55 hover:text-foreground active:bg-surface/48",
}

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
}

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 animate-spin"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        d="M4 12a8 8 0 0 1 8-8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
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
    ...rest
  } = props as ButtonProps & { className?: string }

  const classes = cx(base, variants[variant], sizes[size], className)

  if ("asChild" in props && props.asChild) {
    const { children, ...slotProps } = rest as Omit<
      AsChildProps,
      keyof CommonProps
    >

    return (
      <Slot
        className={classes}
        data-loading={isLoading ? "true" : undefined}
        aria-busy={isLoading || undefined}
        {...slotProps}
      >
        {children}
      </Slot>
    )
  }

  const nativeProps = rest as NativeButtonProps
  const disabled = Boolean(nativeProps.disabled) || isLoading

  return (
    <button
      className={classes}
      disabled={disabled}
      aria-busy={isLoading || undefined}
      data-loading={isLoading ? "true" : undefined}
      {...nativeProps}
    >
      {isLoading ? <Spinner /> : leftIcon}
      <span>{nativeProps.children}</span>
      {rightIcon}
    </button>
  )
}
