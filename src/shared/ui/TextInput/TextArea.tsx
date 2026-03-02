import { forwardRef, useId } from "react"

import type { TextareaHTMLAttributes } from "react"

import { cn } from "@/shared/lib/cn"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  hint?: string
  error?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  function TextArea(
    { label, hint, error, id, className, name, ...props },
    ref,
  ) {
    const autoId = useId()
    const textareaId = id ?? name ?? `textarea-${autoId}`

    const hintId = hint ? `${textareaId}-hint` : undefined
    const errorId = error ? `${textareaId}-error` : undefined
    const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined

    return (
      <div className="space-y-1">
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>

        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "w-full rounded-md border px-3 py-2 text-sm",
            "bg-background text-foreground placeholder:text-muted-foreground",
            "border-border",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            "disabled:cursor-not-allowed disabled:opacity-60",
            error && "border-red-500",
            className,
          )}
          {...props}
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
  },
)

TextArea.displayName = "TextArea"
