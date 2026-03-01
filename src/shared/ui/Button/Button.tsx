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
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring " +
  "disabled:pointer-events-none disabled:opacity-50"

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/85",
  secondary:
    "bg-surface text-foreground hover:bg-surface/85 active:bg-surface/80",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface/60 active:bg-surface/55",
  ghost:
    "bg-transparent text-foreground hover:bg-surface/60 active:bg-surface/55",
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
