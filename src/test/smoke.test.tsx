import { render, screen } from "@testing-library/react"

describe("Smoke test", () => {
  it("renders a heading", () => {
    render(<h1>Hello Test</h1>)
    expect(
      screen.getByRole("heading", { name: "Hello Test" }),
    ).toBeInTheDocument()
  })
})
