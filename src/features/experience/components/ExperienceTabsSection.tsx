import { useMemo, useState } from "react"

import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"
import { TabbedCollectionSection } from "@/shared/ui/TabbedCollectionSection"

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

export function ExperienceTabsSection({
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

    return {
      work: workEntries,
      education: educationEntries,
    }
  }, [entries])

  const experienceLabel = pickText(content.tabs.experience, locale)
  const educationLabel = pickText(content.tabs.education, locale)
  const tabsAriaLabel = pickText(content.aria.tabsToggle, locale)

  const options = [
    { value: "experience", label: experienceLabel },
    { value: "education", label: educationLabel },
  ] as const

  const activeEntries = tab === "experience" ? work : education

  return (
    <TabbedCollectionSection
      value={tab}
      options={options}
      onChange={setTab}
      ariaLabel={tabsAriaLabel}
      className={cn(className)}
      contentClassName="grid gap-5 sm:gap-6"
    >
      {activeEntries.map((entry) => (
        <ExperienceCard key={entry.id} entry={entry} locale={locale} />
      ))}
    </TabbedCollectionSection>
  )
}
