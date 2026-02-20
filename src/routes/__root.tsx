import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { Container } from "../shared/ui/Container"

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <header className="border-b">
        <Container as="nav" className="flex items-center gap-6 py-4">
          <Link to="/" className="font-semibold">
            angelannaroby
          </Link>
          <Link to="/projects" className="text-sm hover:underline">
            Projects
          </Link>
          <Link to="/experience" className="text-sm hover:underline">
            Experience
          </Link>
          <Link to="/skills" className="text-sm hover:underline">
            Skills
          </Link>
          <Link to="/contact" className="text-sm hover:underline">
            Contact
          </Link>
        </Container>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t">
        <Container className="py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} angelannaroby
        </Container>
      </footer>
    </div>
  )
}