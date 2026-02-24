import type { InputHTMLAttributes, ReactNode } from "react"

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
  ...rest
}: TextInputProps) {
  const inputId = id ?? rest.name

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-900"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={[
          "h-10 w-full rounded-md border px-3 text-sm",
          "bg-white text-neutral-900 placeholder:text-neutral-400",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
          error ? "border-red-500" : "border-neutral-300",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={error ? true : undefined}
        aria-describedby={hint || error ? `${inputId}-help` : undefined}
        {...rest}
      />

      {(hint || error) && (
        <p
          id={`${inputId}-help`}
          className={[
            "text-sm",
            error ? "text-red-600" : "text-neutral-600",
          ].join(" ")}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  )
}
