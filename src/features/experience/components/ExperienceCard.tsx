import { useId, useMemo, useState } from "react"

import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"
import { ChevronRightIcon, ExternalLinkIcon } from "@/shared/ui/Icons"

import type { ExperienceEntry } from "../types"
import { formatPeriod, getCollapsedStack, getInitials } from "../utils"

type Props = {
  entry: ExperienceEntry
  locale: Locale
  className?: string
}

function CheckMark() {
  return (
    <span
      aria-hidden
      className={cn(
        "mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
        "bg-primary/10 text-primary ring-1 ring-inset ring-primary/25",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  )
}

function StackChip({ children }: { children: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5",
        "text-[10.5px] font-medium",
        "bg-transparent text-muted-foreground",
        "ring-1 ring-inset ring-border/70",
      )}
    >
      {children}
    </span>
  )
}

export function ExperienceCard({ entry, locale, className }: Props) {
  const contentId = useId()
  const role = pickText(entry.role, locale)
  const period = formatPeriod(entry.start, entry.end, locale)

  const [open, setOpen] = useState(false)

  const initials = useMemo(() => getInitials(entry.org), [entry.org])
  const { items: collapsedStack, remaining } = useMemo(
    () => getCollapsedStack(entry.stack, 4),
    [entry.stack],
  )

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70",
        "bg-surface-2/70 backdrop-blur",
        "shadow-[0_10px_28px_-20px_rgba(0,0,0,0.35)]",
        "transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)]",
        "hover:ring-1 hover:ring-primary/18",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200",
          "group-hover:opacity-100",
          "bg-[radial-gradient(900px_circle_at_0%_0%,rgba(99,102,241,0.10),transparent_55%),radial-gradient(900px_circle_at_100%_30%,rgba(16,185,129,0.10),transparent_55%)]",
          "dark:bg-[radial-gradient(900px_circle_at_0%_0%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(900px_circle_at_100%_30%,rgba(16,185,129,0.16),transparent_55%)]",
        )}
      />

      <header
        className={cn(
          "relative px-5 py-4 sm:px-6 sm:py-5",
          "flex flex-col gap-3",
          "sm:flex-row sm:items-center sm:gap-4",
        )}
      >
        <div className="flex min-w-0 items-center gap-4">
          <div
            className={cn(
              "grid h-12 w-12 shrink-0 place-items-center rounded-2xl",
              "bg-background/85 ring-1 ring-inset ring-border/80 shadow-sm",
              "transition group-hover:ring-primary/25",
              "sm:h-14 sm:w-14",
            )}
            aria-hidden
          >
            {entry.logo?.src ? (
              <img
                src={entry.logo.src}
                alt={entry.logo.alt}
                className={cn("h-9 w-9 object-contain", "sm:h-10 sm:w-10")}
                loading="lazy"
              />
            ) : (
              <span className="text-sm font-semibold text-muted-foreground">
                {initials}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="min-w-0">
              <p
                className={cn(
                  "truncate text-[16px] font-semibold tracking-tight text-foreground",
                  "sm:hidden",
                )}
                title={entry.org}
              >
                {entry.org}
              </p>
              <p
                className="mt-0.5 truncate text-sm font-medium text-muted-foreground sm:hidden"
                title={entry.location}
              >
                {entry.location}
              </p>

              <div className="hidden min-w-0 items-baseline gap-x-2 sm:flex">
                <p
                  className={cn(
                    "min-w-0 flex-1 truncate text-[16px] font-semibold tracking-tight text-foreground",
                    "sm:text-[17px]",
                  )}
                  title={entry.org}
                >
                  {entry.org}
                </p>
                <span aria-hidden className="shrink-0 text-muted-foreground/70">
                  -
                </span>
                <p
                  className="min-w-0 truncate text-sm font-medium text-muted-foreground sm:text-[13px]"
                  title={entry.location}
                >
                  {entry.location}
                </p>
              </div>
            </div>

            <p
              className={cn(
                "mt-2 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5",
                "text-[13px] font-semibold sm:text-[14px]",
                "bg-primary/10 text-foreground ring-1 ring-inset ring-primary/20",
              )}
            >
              <span className="truncate">{role}</span>
            </p>

            {collapsedStack.length ? (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {collapsedStack.map((s) => (
                  <StackChip key={`${entry.id}-collapsed-${s}`}>{s}</StackChip>
                ))}
                {remaining > 0 ? (
                  <span className="text-xs text-muted-foreground">
                    +{remaining}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div
          className={cn(
            "flex items-center gap-3",
            "justify-between",
            "sm:justify-start sm:ml-auto",
          )}
        >
          <div
            className={cn(
              "min-w-0 rounded-full px-3 py-1 text-xs font-medium",
              "bg-background/80 text-muted-foreground ring-1 ring-inset ring-border/80 shadow-sm",
            )}
            title={period}
          >
            <span className="truncate">{period}</span>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={contentId}
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
              "bg-background/80 ring-1 ring-inset ring-border/80 shadow-sm",
              "text-muted-foreground transition",
              "hover:text-foreground hover:ring-primary/25",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
          >
            <span className="sr-only">
              {open ? "Collapse details" : "Expand details"}
            </span>
            <ChevronRightIcon
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                open && "rotate-90",
              )}
            />
          </button>
        </div>
      </header>

      {/* EXPANDED */}
      <div
        id={contentId}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="h-px bg-border/60" aria-hidden />

            {entry.website ? (
              <div className="mt-4 flex items-center justify-between gap-3">
                <a
                  href={entry.website}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
                    "text-xs font-medium",
                    "bg-background/80 text-foreground ring-1 ring-inset ring-border/80 shadow-sm",
                    "transition hover:ring-primary/25",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  )}
                >
                  <ExternalLinkIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">
                    {entry.website.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              </div>
            ) : null}

            {entry.highlights?.length ? (
              <ul className="mt-4 grid gap-3">
                {entry.highlights.map((h, idx) => (
                  <li key={`${entry.id}-h-${idx}`} className="flex gap-3">
                    <CheckMark />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pickText(h, locale)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}

            {entry.stack?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {entry.stack.map((s) => (
                  <StackChip key={`${entry.id}-stack-${s}`}>{s}</StackChip>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
