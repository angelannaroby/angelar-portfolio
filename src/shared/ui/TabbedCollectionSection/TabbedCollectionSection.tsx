import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"
import {
  SegmentedToggle,
  type SegmentedToggleOption,
} from "@/shared/ui/SegmentedToggle"

type Props<T extends string> = {
  value: T
  options: readonly SegmentedToggleOption<T>[]
  onChange: (value: T) => void
  ariaLabel: string
  children: ReactNode
  className?: string
  controlsClassName?: string
  contentClassName?: string
}

export function TabbedCollectionSection<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
  children,
  className,
  controlsClassName,
  contentClassName,
}: Props<T>) {
  return (
    <section className={cn("space-y-7 sm:space-y-8", className)}>
      <div className={cn("flex justify-center", controlsClassName)}>
        <SegmentedToggle
          value={value}
          options={options}
          onChange={onChange}
          ariaLabel={ariaLabel}
        />
      </div>

      <div className={contentClassName}>{children}</div>
    </section>
  )
}
