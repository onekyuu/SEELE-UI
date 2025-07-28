import { FC } from "react";
import "./button.css";
import { ButtonProps } from "./types";
import { clsx } from "clsx";

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  type = "button",
  icon,
  loading = false,
  disabled = false,
  onClick,
  children,
  className,
  "aria-label": ariaLabel,
}) => {
  return (
    <button
      className={clsx("se-btn", className, {
        [variant]: true,
        [size]: true,
      })}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-label={ariaLabel}
    >
      {loading && <span className="loader" />}
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
};

Button.displayName = "SeButton";
export default Button;
