import { forwardRef } from "react"

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, id, className, ...props }, ref) => {
    const textareaId =
      id ?? props.name ?? label.replace(/\s+/g, "-").toLowerCase()
    const errorId = `${textareaId}-error`

    return (
      <div className="space-y-1">
        <label htmlFor={textareaId} className="text-sm font-medium">
          {label}
        </label>

        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={[
            "w-full rounded-md border px-3 py-2 text-sm",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
            error ? "border-red-500" : "border-neutral-300",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />

        {error && (
          <p id={errorId} className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    )
  },
)

TextArea.displayName = "TextArea"
