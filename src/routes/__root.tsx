import { createRootRoute, Link, Outlet } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <header className="border-b">
        <nav className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-4">
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
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} angelannaroby
        </div>
      </footer>
    </div>
  )
}