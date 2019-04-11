import React, { SVGAttributes } from 'react';
import '../utils/importAll';
import './icon.scss';
import classes from '../helpers/classes';

interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
    size?: string;
    theme?: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, ...restProps} = props;
    return (
        <svg className={classes('wui-icon', className)} {...restProps}>
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
};

export default Icon;