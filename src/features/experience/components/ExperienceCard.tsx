import { useMemo } from "react"

import { useLocale } from "@/app/providers"
import { cn } from "@/shared/lib/cn"

import { useExperienceViewModel } from "../hooks/useExperienceViewModel"
import type { ExperienceEntry } from "../types"
import { getInitials } from "../utils"

type Props = {
  entry: ExperienceEntry
  className?: string
}

function StackChip({ children }: { children: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1",
        "text-[10.5px] font-medium",
        "bg-[rgb(var(--color-bg-elevated)/0.82)] text-[rgb(var(--color-muted-fg))]",
        "ring-1 ring-inset ring-[rgb(var(--color-border)/0.68)]",
      )}
    >
      {children}
    </span>
  )
}

export function ExperienceCard({ entry, className }: Props) {
  const { locale } = useLocale()
  const text = useExperienceViewModel(locale)

  const initials = useMemo(() => getInitials(entry.org), [entry.org])
  const entryText = text.resolveEntry(entry)
  const stackItems = entry.stack ?? []

  return (
    <article
      tabIndex={0}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border",
        "border-[rgb(var(--color-border)/0.58)]",
        "bg-[linear-gradient(180deg,rgba(23,33,48,0.96)_0%,rgba(18,27,40,0.94)_100%)]",
        "shadow-[0_14px_36px_rgba(0,0,0,0.24)]",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(0,0,0,0.28)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg))]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--color-primary)/0.75)] to-transparent"
      />

      <header
        className={cn(
          "relative px-5 py-5 sm:px-6 sm:py-6",
          "flex flex-col gap-4",
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <div
              className={cn(
                "grid h-12 w-12 shrink-0 place-items-center rounded-2xl sm:h-14 sm:w-14",
                "bg-[rgb(var(--color-bg-elevated)/0.95)]",
                "ring-1 ring-inset ring-[rgb(var(--color-border)/0.75)]",
              )}
              aria-hidden
            >
              {entry.logo?.src ? (
                <img
                  src={entry.logo.src}
                  alt={entry.logo.alt}
                  className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                  loading="lazy"
                />
              ) : (
                <span className="text-sm font-semibold text-[rgb(var(--color-muted-fg))]">
                  {initials}
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="min-w-0">
                <p
                  className="truncate text-[17px] font-semibold tracking-tight text-[rgb(var(--color-fg))] sm:text-[18px]"
                  title={entry.org}
                >
                  {entry.org}
                </p>

                <p
                  className="mt-1 truncate text-sm font-medium text-[rgb(var(--color-muted-fg))]"
                  title={entry.location}
                >
                  {entry.location}
                </p>
              </div>

              <p
                className={cn(
                  "mt-3 inline-flex max-w-full items-center rounded-full px-3.5 py-1.5",
                  "text-[13px] font-semibold sm:text-[14px]",
                  "bg-[rgb(var(--color-primary)/0.1)] text-[rgb(var(--color-primary))]",
                  "ring-1 ring-inset ring-[rgb(var(--color-primary)/0.22)]",
                )}
              >
                <span className="truncate">{entryText.role}</span>
              </p>

              {stackItems.length > 0 ? (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {stackItems.map((stackItem) => (
                    <StackChip key={`${entry.id}-stack-${stackItem}`}>
                      {stackItem}
                    </StackChip>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-3 sm:ml-4">
            <div
              className={cn(
                "min-w-0 rounded-full px-3 py-1.5 text-xs font-medium",
                "bg-[rgb(var(--color-bg-elevated)/0.86)] text-[rgb(var(--color-fg-soft))]",
                "ring-1 ring-inset ring-[rgb(var(--color-border)/0.68)]",
              )}
              title={entryText.period}
            >
              <span className="truncate">{entryText.period}</span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out",
            "grid-rows-[0fr] opacity-0",
            "group-hover:grid-rows-[1fr] group-hover:opacity-100",
            "group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100",
          )}
        >
          <div className="overflow-hidden">
            {entryText.previewHighlights.length ? (
              <ul className="mt-4 grid gap-2.5">
                {entryText.previewHighlights.map((highlight, index) => (
                  <li
                    key={`${entry.id}-preview-${index}`}
                    className="flex gap-2.5"
                  >
                    <span
                      aria-hidden
                      className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--color-primary))]"
                    />
                    <p className="text-sm leading-relaxed text-[rgb(var(--color-fg-soft))]">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}

            {entry.website ? (
              <div className="mt-4">
                <a
                  href={entry.website}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
                    "text-xs font-medium",
                    "bg-[rgb(var(--color-bg-elevated)/0.86)] text-[rgb(var(--color-fg))]",
                    "ring-1 ring-inset ring-[rgb(var(--color-border)/0.68)]",
                    "transition hover:text-[rgb(var(--color-fg))]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg-elevated))]",
                  )}
                >
                  <span className="truncate">
                    {entry.website.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </article>
  )
}
