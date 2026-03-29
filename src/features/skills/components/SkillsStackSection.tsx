import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { cn } from "@/shared/lib/cn"

import { skillsContent } from "../content"
import type { SkillItem } from "../types"

type Props = {
  items: SkillItem[]
  locale: Locale
  className?: string
}

const highlightedSkillIds = new Set(["react", "typescript", "playwright"])

export function SkillsStackSection({ items, locale, className }: Props) {
  const title = pickText(skillsContent.skills.title, locale)

  return (
    <section className={cn("relative", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(var(--color-primary),0.18),transparent_42%),radial-gradient(circle_at_50%_0%,rgba(var(--color-primary),0.08),transparent_62%)]" />

      <div className="mx-auto max-w-4xl px-4 pb-6 text-center sm:px-6 sm:pb-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--color-primary)/0.88)]">
            {title}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3.5 sm:mt-14">
          {items.map((item) => {
            return (
              <span
                key={item.id}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-foreground",
                  "border transition-none",
                  "border-[rgb(var(--color-primary)/0.32)]",
                  "bg-[linear-gradient(180deg,rgba(var(--color-primary),0.06)_0%,rgba(var(--color-bg-elevated),0.98)_100%)]",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
                )}
              >
                {item.label}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
