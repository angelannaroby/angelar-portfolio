import { type Locale, type LocalizedText, pickText } from "@/shared/i18n"
import { FocusIcon } from "@/shared/ui/Icons"

type FocusItem = {
  id: "frontend" | "ui" | "testing"
  label: LocalizedText
}

type Props = {
  locale: Locale
  title: LocalizedText
  items: FocusItem[]
}

export function ExperienceFocusPills({ locale, title, items }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <h2 className="text-base font-semibold text-foreground">
          {pickText(title, locale)}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground shadow-sm"
          >
            <FocusIcon id={item.id} className="h-5 w-5 text-primary" />
            <span>{pickText(item.label, locale)}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
