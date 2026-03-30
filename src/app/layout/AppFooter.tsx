import { useAppShellViewModel } from "@/app/hooks/useAppShellViewModel"
import { useLocale } from "@/app/providers"
import { Container } from "@/shared/ui/Container"

export function AppFooter() {
  const { locale } = useLocale()
  const text = useAppShellViewModel(locale)

  return (
    <footer className="bg-surface/20 py-5 backdrop-blur-md">
      <Container
        size="wide"
        className="text-center text-sm text-muted-foreground"
      >
        <p>{text.footer.copyright}</p>
        <p className="mt-1">{text.footer.builtWith}</p>
      </Container>
    </footer>
  )
}
