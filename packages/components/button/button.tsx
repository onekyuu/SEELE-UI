import { FC } from "react";
import "./button.css";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { throttle } from "lodash-es";

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  btnType = "button",
  icon,
  loading = false,
  disabled = false,
  onClick,
  children,
  className,
  "aria-label": ariaLabel,
  rounded = "md",
  useThrottle = false,
  throttleDelay = 300,
}) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    onClick?.(event);
  const handleButtonClickThrottled = throttle(handleButtonClick, throttleDelay);
  return (
    <button
      className={clsx("se-btn", className, {
        [variant]: true,
        [size]: true,
        [`rounded-${rounded}`]: rounded,
        loading: loading,
        disabled: disabled,
      })}
      type={btnType}
      onClick={useThrottle ? handleButtonClickThrottled : handleButtonClick}
      disabled={disabled || loading ? true : void 0}
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
