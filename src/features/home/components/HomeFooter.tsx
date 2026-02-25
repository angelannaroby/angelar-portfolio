import { Container } from "@/shared/ui/Container"

export function HomeFooter() {
  return (
    <footer className="border-t border-neutral-200/60 py-5 dark:border-neutral-800/60">
      <Container
        size="wide"
        className="text-center text-sm text-neutral-600 dark:text-neutral-400"
      >
        <p>© 2026 Angel Anna Roby. All rights reserved.</p>
        <p className="mt-1">Built with React, Tailwind CSS, and ❤️</p>
      </Container>
    </footer>
  )
}
