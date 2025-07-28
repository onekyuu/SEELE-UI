import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./button";

// variant types for testing
const variants = [
  { name: "primary", className: "primary" },
  { name: "outline", className: "outline" },
  { name: "ghost", className: "ghost" },
  { name: "link", className: "link" },
  { name: "text", className: "text" },
  { name: "danger", className: "danger" },
] as const;

describe("Button Component", () => {
  it("should render with default props", () => {
    render(<Button>Click Me</Button>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("se-btn primary md");
  });

  it("should support different sizes", () => {
    render(<Button size="lg">Large Button</Button>);
    const btn = screen.getByRole("button", { name: /large button/i });
    expect(btn).toHaveClass("se-btn lg");
  });

  it("should render icon if provided", () => {
    render(<Button icon={<span data-testid="icon" />}>With Icon</Button>);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("should show loader and disable button when loading", () => {
    render(<Button loading>Loading...</Button>);
    const btn = screen.getByRole("button", { name: /loading/i });
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-busy", "true");
    expect(btn.querySelector(".loader")).toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button", { name: /disabled/i });
    expect(btn).toBeDisabled();
  });

  it("should support button type prop", () => {
    render(<Button type="submit">Submit</Button>);
    const btn = screen.getByRole("button", { name: /submit/i });
    expect(btn).toHaveAttribute("type", "submit");
  });

  it('should default to type="button"', () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole("button", { name: /default/i });
    expect(btn).toHaveAttribute("type", "button");
  });

  it("should support aria-label for accessibility", () => {
    render(<Button aria-label="custom label" />);
    const btn = screen.getByRole("button", { name: "custom label" });
    expect(btn).toBeInTheDocument();
  });

  it("should trigger onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Trigger</Button>);
    await userEvent.click(
      screen.getByRole("button", { name: /click trigger/i })
    );
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not trigger onClick when disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Event
      </Button>
    );
    await userEvent.click(
      screen.getByRole("button", { name: /disabled event/i })
    );
    expect(handleClick).not.toHaveBeenCalled();
  });

  describe("Button variants", () => {
    variants.forEach(({ name, className }) => {
      it(`should render with variant="${name}"`, () => {
        render(<Button variant={name}>{name} button</Button>);
        const btn = screen.getByRole("button", {
          name: new RegExp(`${name} button`, "i"),
        });
        expect(btn).toHaveClass(`se-btn ${className}`);
      });
    });
  });
});
