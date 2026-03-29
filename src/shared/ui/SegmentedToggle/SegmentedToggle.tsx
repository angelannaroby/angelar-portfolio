import { cn } from "@/shared/lib/cn"

export type SegmentedToggleOption<T extends string> = {
  value: T
  label: string
  disabled?: boolean
}

type Props<T extends string> = {
  value: T
  options: readonly SegmentedToggleOption<T>[]
  onChange: (value: T) => void
  ariaLabel: string
  className?: string
}

export function SegmentedToggle<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
  className,
}: Props<T>) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full px-1.5 py-1",
        "bg-white/[0.03] backdrop-blur-sm",
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]",
        className,
      )}
    >
      {options.map((option) => {
        const isActive = option.value === value

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-disabled={option.disabled ? "true" : undefined}
            disabled={option.disabled}
            onClick={() => onChange(option.value)}
            style={
              isActive
                ? { color: "rgb(var(--color-primary) / 0.88)" }
                : undefined
            }
            className={cn(
              "relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em]",
              "transition-all duration-150 ease-out",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              "active:scale-[0.97]",
              option.disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer",
              isActive &&
                "bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] active:bg-white/[0.05]",
              !isActive &&
                "bg-transparent text-foreground/72 hover:bg-white/[0.02] hover:text-foreground/90 active:bg-white/[0.04]",
            )}
          >
            <span className="relative z-10 whitespace-nowrap">
              {option.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
