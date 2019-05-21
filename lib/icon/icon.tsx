import React, { SVGAttributes } from 'react';
import '../utils/importAll';
import './icon.scss';
import classes, { classMaker } from '../helpers/classMaker';

const componentName = 'Icon';
const sc = classMaker('wui-icon')

interface Props extends SVGAttributes<SVGElement> {
    name: string;
    size?: string;
    theme?: string;
}

const Icon: WFC<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <svg className={classes(sc(''), sc(props.name), className)} {...restProps}>
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
};

Icon.displayName = componentName;

export default Icon;