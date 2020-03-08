import React, { SVGAttributes } from 'react';
import '../utils/importAll';
import './icon.scss';
import classes, { classMaker } from '../helpers/classMaker';

const componentName = 'Icon';
const sc = classMaker('seele-icon')

interface Props extends SVGAttributes<SVGElement> {
    name: string;
    size?: string;
    width?: string;
    height?: string;
}

const Icon: SFC<Props> = (props) => {
    const {className, width, height, fill, size, ...restProps} = props;
    return (
        <svg className={classes(sc(''), sc(props.name), className)} style={{width: width, height: height, fontSize: size}} {...restProps}>
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
};

Icon.displayName = componentName;

export default Icon;
