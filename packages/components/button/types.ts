export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "outline" | "ghost" | "text" | "danger";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  btnType?: ButtonType;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  rounded?: ButtonRounded;
  useThrottle?: boolean;
  throttleDelay?: number;
}
