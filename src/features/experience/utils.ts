import type { Locale } from "@/shared/i18n"

type FormatPeriodOptions = {
  presentLabel: string
}

export function formatPeriod(
  start: string,
  end: string | undefined,
  locale: Locale,
  options: FormatPeriodOptions,
) {
  const format = (ym: string) => {
    const [y, m] = ym.split("-")
    const date = new Date(Number(y), Number(m) - 1, 1)

    return new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-GB", {
      month: "short",
      year: "numeric",
    }).format(date)
  }

  const startText = format(start)
  const endText = end ? format(end) : options.presentLabel

  return `${startText} – ${endText}`
}
