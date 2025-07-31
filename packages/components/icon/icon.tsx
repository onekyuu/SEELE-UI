import { FC } from "react";
import { IconProps } from "./types";
import "./icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const Icon: FC<IconProps> = ({ type, color, ...rest }) => {
  return (
    <i
      className={clsx("se-icon", type && `se-icon-${type}`)}
      style={{ color: color ?? void 0 }}
    >
      <FontAwesomeIcon className="se-icon-fontawesome" {...rest} />
    </i>
  );
};

export default Icon;
