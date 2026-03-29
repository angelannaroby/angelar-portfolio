import { useMemo, useState } from "react"

import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"

import { skillsContent } from "../content"
import type { Recommendation } from "../types"

type Props = {
  items: Recommendation[]
  locale: Locale
  className?: string
}

export function RecommendationsSection({ items, locale, className }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "")

  const title = pickText(skillsContent.recommendations.title, locale)
  const subtitle = pickText(skillsContent.recommendations.subtitle, locale)

  const activeRecommendation = useMemo(() => {
    return items.find((item) => item.id === activeId) ?? items[0] ?? null
  }, [activeId, items])

  if (!activeRecommendation) {
    return null
  }

  const quote = pickText(activeRecommendation.quote, locale)
  const role = pickText(activeRecommendation.role, locale)
  const roleLine = activeRecommendation.company
    ? `${role} · ${activeRecommendation.company}`
    : role

  return (
    <section className={cn("relative", className)}>
      <div
        className={cn(
          "mx-auto flex max-w-4xl flex-col items-center text-center",
          "px-4 py-6 sm:px-6 sm:py-8",
        )}
      >
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>

          <p className="text-sm italic leading-7 text-muted-foreground/85 sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 max-w-3xl sm:mt-16">
          <p className="text-sm leading-8 text-muted-foreground sm:text-[15px] sm:leading-9">
            “{quote}”
          </p>
        </div>

        <div className="mt-10 space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--color-primary)/0.85)]">
            {activeRecommendation.name}
          </p>

          <p className="text-sm text-muted-foreground">{roleLine}</p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          {items.map((item) => {
            const isActive = item.id === activeRecommendation.id
            const itemRole = pickText(item.role, locale)

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                aria-label={`${item.name} — ${itemRole}`}
                aria-pressed={isActive}
                className={cn(
                  "group relative h-14 w-14 overflow-hidden rounded-full transition duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg))]",
                  isActive
                    ? "scale-110 ring-2 ring-[rgb(var(--color-primary)/0.55)]"
                    : "opacity-70 ring-1 ring-white/10 hover:scale-105 hover:opacity-100 hover:ring-[rgb(var(--color-primary)/0.35)]",
                )}
              >
                {item.avatarSrc ? (
                  <img
                    src={item.avatarSrc}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className={cn(
                      "flex h-full w-full items-center justify-center",
                      "bg-[linear-gradient(180deg,rgba(var(--color-bg-elevated),0.96)_0%,rgba(var(--color-card),0.99)_100%)]",
                      "text-sm font-semibold text-foreground",
                    )}
                  >
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                )}

                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-full",
                    isActive
                      ? "shadow-[0_0_0_4px_rgba(var(--color-primary),0.10)]"
                      : "",
                  )}
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
