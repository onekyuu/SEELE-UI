import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Icon from "./icon";
import {
  faCoffee,
  faHouse,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

// mock FontAwesomeIcon（防止其内部逻辑影响测试）
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: (props: any) => (
    <svg data-testid={`icon-${props.icon?.iconName}`} {...props} />
  ),
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
    const { container } = render(<Icon icon={faCoffee} color="red" />);
    const icon = container.querySelector("i");
    expect(icon).toHaveStyle("color: red");
  });

  it("renders FontAwesomeIcon inside", () => {
    const { getByTestId } = render(<Icon icon={faSpinner} />);
    expect(getByTestId("icon-spinner")).toBeTruthy();
  });

  it("passes props to FontAwesomeIcon", () => {
    const { getByTestId } = render(<Icon icon={faHouse} spin />);
    expect(getByTestId("icon-house").querySelector("svg")).toHaveClass(
      "fa-spin"
    );
  });
});
