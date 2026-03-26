import { useMemo, useState } from "react"

import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"

import type { ExperienceContent } from "../content"
import type { ExperienceEntry } from "../types"

import { ExperienceCard } from "./ExperienceCard"

type TabKey = "experience" | "education"

type Props = {
  locale: Locale
  content: ExperienceContent
  entries: ExperienceEntry[]
  className?: string
}

function sortDescByStart(a: ExperienceEntry, b: ExperienceEntry) {
  return b.start.localeCompare(a.start)
}

export function ExperienceTabsPanel({
  locale,
  content,
  entries,
  className,
}: Props) {
  const [tab, setTab] = useState<TabKey>("experience")

  const { work, education } = useMemo(() => {
    const workEntries = entries
      .filter((entry) => entry.kind === "work")
      .slice()
      .sort(sortDescByStart)

    const educationEntries = entries
      .filter((entry) => entry.kind === "education")
      .slice()
      .sort(sortDescByStart)

    return { work: workEntries, education: educationEntries }
  }, [entries])

  const tabLabelExperience = pickText(content.tabs.experience, locale)
  const tabLabelEducation = pickText(content.tabs.education, locale)
  const activeEntries = tab === "experience" ? work : education

  return (
    <section className={cn("space-y-7 sm:space-y-8", className)}>
      <div className="flex justify-center pt-2 sm:pt-3">
        <div
          role="tablist"
          aria-label={`${tabLabelExperience} & ${tabLabelEducation}`}
          className={cn(
            "inline-flex items-center rounded-2xl p-1",
            "border border-[rgb(var(--color-border)/0.7)]",
            "bg-[rgb(var(--color-bg-elevated)/0.7)]",
            "backdrop-blur-sm",
          )}
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === "experience"}
            onClick={() => setTab("experience")}
            className={cn(
              "rounded-xl px-4 py-2.5 text-sm font-semibold transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg-elevated))]",
              tab === "experience"
                ? "bg-[rgb(var(--color-card))] text-[rgb(var(--color-fg))] ring-1 ring-[rgb(var(--color-primary)/0.25)] shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
                : "text-[rgb(var(--color-muted-fg))] hover:text-[rgb(var(--color-fg))]",
            )}
          >
            {tabLabelExperience}
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={tab === "education"}
            onClick={() => setTab("education")}
            className={cn(
              "rounded-xl px-4 py-2.5 text-sm font-semibold transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg-elevated))]",
              tab === "education"
                ? "bg-[rgb(var(--color-card))] text-[rgb(var(--color-fg))] ring-1 ring-[rgb(var(--color-primary)/0.25)] shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
                : "text-[rgb(var(--color-muted-fg))] hover:text-[rgb(var(--color-fg))]",
            )}
          >
            {tabLabelEducation}
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:gap-6">
        {activeEntries.map((entry) => (
          <ExperienceCard key={entry.id} entry={entry} locale={locale} />
        ))}
      </div>
    </section>
  )
}
