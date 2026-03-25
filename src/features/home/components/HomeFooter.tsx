import { type Locale, pickText } from "@/shared/i18n"
import { Container } from "@/shared/ui/Container"

import { formatHomeText } from "../content"
import type { HomeContent } from "../types"

type Props = {
  locale: Locale
  content: HomeContent
}

export function HomeFooter({ locale, content }: Props) {
  const year = new Date().getFullYear()

  const copyright = formatHomeText(pickText(content.footer.copyright, locale), {
    year,
  })
  const builtWith = pickText(content.footer.builtWith, locale)

  return (
    <footer className="bg-surface/20 py-5 backdrop-blur-md">
      <Container
        size="wide"
        className="text-center text-sm text-muted-foreground"
      >
        <p>{copyright}</p>
        <p className="mt-1">{builtWith}</p>
      </Container>
    </footer>
  )
}
