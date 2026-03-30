import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

describe("Smoke test", () => {
  it("renders a heading", () => {
    render(<h1>Hello Test</h1>)
    expect(
      screen.getByRole("heading", { name: "Hello Test" }),
    ).toBeInTheDocument()
  })
})
