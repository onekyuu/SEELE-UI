export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "link"
  | "text"
  | "danger";
export type ButtonType = "button" | "submit" | "reset";
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}
