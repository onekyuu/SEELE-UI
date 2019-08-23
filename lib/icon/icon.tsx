import React, { SVGAttributes } from 'react';
import '../utils/importAll';
import './icon.scss';
import classes, { classMaker } from '../helpers/classMaker';

const componentName = 'Icon';
const sc = classMaker('seele')

interface Props extends SVGAttributes<SVGElement> {
    name: string;
    size?: string;
    theme?: string;
}

const Icon: SFC<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <svg className={classes(sc('icon'), sc(props.name), className)} {...restProps}>
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
};

Icon.displayName = componentName;

export default Icon;