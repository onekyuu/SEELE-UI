import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Icon from "./icon";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// mock FontAwesomeIcon（防止其内部逻辑影响测试）
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: (props: any) => <svg data-testid="icon" {...props} />,
}));

describe("Icon Component", () => {
  it("renders with base class", () => {
    const { container } = render(<Icon icon={faCoffee} />);
    const icon = container.querySelector("i");
    expect(icon).toBeTruthy();
    expect(icon?.classList.contains("se-icon")).toBe(true);
  });

  it("applies type class when type is set", () => {
    const { container } = render(<Icon icon={faCoffee} type="success" />);
    const icon = container.querySelector("i");
    expect(icon?.classList.contains("se-icon-success")).toBe(true);
  });

  it("applies color class when color is set", () => {
    const { container } = render(<Icon icon={faCoffee} color="primary" />);
    const icon = container.querySelector("i");
    expect(icon?.classList.contains("se-icon-text-primary")).toBe(true);
  });

  it("renders FontAwesomeIcon inside", () => {
    const { getByTestId } = render(<Icon icon={faCoffee} />);
    expect(getByTestId("icon")).toBeTruthy();
  });

  it("passes props to FontAwesomeIcon", () => {
    const { getByTestId } = render(<Icon icon={faCoffee} spin />);
    expect(getByTestId("icon")).toHaveAttribute("spin");
  });
});
