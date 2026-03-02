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
      .filter((e) => e.kind === "work")
      .slice()
      .sort(sortDescByStart)

    const educationEntries = entries
      .filter((e) => e.kind === "education")
      .slice()
      .sort(sortDescByStart)

    return { work: workEntries, education: educationEntries }
  }, [entries])

  const tabLabelExperience = pickText(content.tabs.experience, locale)
  const tabLabelEducation = pickText(content.tabs.education, locale)

  const active = tab === "experience" ? work : education

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/70",
        "bg-surface-2/70 shadow-[0_14px_36px_-26px_rgba(0,0,0,0.35)] backdrop-blur",
        className,
      )}
    >
      {/* subtle template-like wash */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-70",
          "bg-[radial-gradient(900px_circle_at_0%_0%,rgba(99,102,241,0.06),transparent_55%),radial-gradient(900px_circle_at_100%_30%,rgba(16,185,129,0.06),transparent_55%)]",
          "dark:bg-[radial-gradient(900px_circle_at_0%_0%,rgba(99,102,241,0.10),transparent_55%),radial-gradient(900px_circle_at_100%_30%,rgba(16,185,129,0.10),transparent_55%)]",
        )}
      />

      <div className="relative">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6">
          <div
            role="tablist"
            aria-label={`${pickText(
              content.page.title.experience,
              locale,
            )} & ${pickText(content.page.title.education, locale)}`}
            className={cn(
              "inline-flex items-center rounded-2xl p-1",
              "bg-background/70 ring-1 ring-border/80 shadow-sm",
            )}
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "experience"}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-semibold transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                tab === "experience"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setTab("experience")}
            >
              {tabLabelExperience}
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={tab === "education"}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-semibold transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                tab === "education"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setTab("education")}
            >
              {tabLabelEducation}
            </button>
          </div>
        </div>

        <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
          <div className="grid gap-5">
            {active.map((entry) => (
              <ExperienceCard key={entry.id} entry={entry} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
