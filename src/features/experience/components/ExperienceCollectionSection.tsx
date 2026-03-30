import { useMemo, useState } from "react"

import { useLocale } from "@/app/providers"
import { cn } from "@/shared/lib/cn"
import { TabbedCollectionSection } from "@/shared/ui/TabbedCollectionSection"

import { useExperienceViewModel } from "../hooks/useExperienceViewModel"
import type { ExperienceEntry } from "../types"

import { ExperienceCard } from "./ExperienceCard"

type JourneyCategory = "experience" | "education"

type Props = {
  entries: ExperienceEntry[]
  className?: string
}

function sortDescByStart(a: ExperienceEntry, b: ExperienceEntry) {
  return b.start.localeCompare(a.start)
}

export function ExperienceCollectionSection({ entries, className }: Props) {
  const { locale } = useLocale()
  const text = useExperienceViewModel(locale)

  const [activeCategory, setActiveCategory] =
    useState<JourneyCategory>("experience")

  const { workEntries, educationEntries } = useMemo(() => {
    const workEntries = entries
      .filter((entry) => entry.kind === "work")
      .slice()
      .sort(sortDescByStart)

    const educationEntries = entries
      .filter((entry) => entry.kind === "education")
      .slice()
      .sort(sortDescByStart)

    return {
      workEntries,
      educationEntries,
    }
  }, [entries])

  const categoryOptions = [
    { value: "experience", label: text.tabs.experience },
    { value: "education", label: text.tabs.education },
  ] as const

  const visibleEntries =
    activeCategory === "experience" ? workEntries : educationEntries

  return (
    <TabbedCollectionSection
      value={activeCategory}
      options={categoryOptions}
      onChange={setActiveCategory}
      ariaLabel={text.aria.tabsToggle}
      className={cn(className)}
      contentClassName="grid gap-5 sm:gap-6"
    >
      {visibleEntries.map((entry) => (
        <ExperienceCard key={entry.id} entry={entry} />
      ))}
    </TabbedCollectionSection>
  )
}
