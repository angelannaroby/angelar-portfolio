import { useId } from "react"

import type { InputHTMLAttributes, ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label?: string
  hint?: ReactNode
  error?: string
}

export function TextInput({
  label,
  hint,
  error,
  className,
  id,
  name,
  ...rest
}: TextInputProps) {
  const autoId = useId()
  const inputId = id ?? name ?? `input-${autoId}`

  const hintId = hint ? `${inputId}-hint` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined

  return (
    <div className="space-y-1">
      {label ? (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        name={name}
        className={cn(
          "h-10 w-full rounded-md border px-3 text-sm",
          "bg-background text-foreground placeholder:text-muted-foreground",
          "border-border",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "disabled:cursor-not-allowed disabled:opacity-60",
          error && "border-red-500",
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      />

      {error ? (
        <p id={errorId} className="text-sm text-red-600">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  )
}
