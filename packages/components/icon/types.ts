import { IconProp, RotateProp } from "@fortawesome/fontawesome-svg-core";

// export type IconProps = FontAwesomeIconProps & {
//   type?: "primary" | "success" | "warning" | "danger" | "info";
//   color?: string;
// };

export interface IconProps {
  border?: boolean;
  fixedWidth?: boolean;
  flip?: "horizontal" | "vertical" | "both";
  icon: IconProp;
  mask?: IconProp;
  listItem?: boolean;
  pull?: "right" | "left";
  pulse?: boolean;
  rotation?: RotateProp;
  swapOpacity?: boolean;
  size?:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
  spin?: boolean;
  transform?: object | string;
  symbol?: boolean | string;
  title?: string;
  inverse?: boolean;
  bounce?: boolean;
  shake?: boolean;
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  spinPulse?: boolean;
  spinReverse?: boolean;
  type?: "primary" | "success" | "warning" | "danger" | "info";
  color?: string;
  className?: string;
}
