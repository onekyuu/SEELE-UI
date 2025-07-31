import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Icon from "./icon";
import {
  faCoffee,
  faHouse,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

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
    const { container } = render(<Icon icon={faHouse} />);
    expect(container.querySelector("i")?.querySelector("svg")).toBeTruthy();
  });

  it("passes props to FontAwesomeIcon", () => {
    const { container } = render(<Icon icon={faSpinner} spin />);

    expect(container.querySelector("i")?.querySelector("svg")).toHaveClass(
      "fa-spin"
    );
  });
});
