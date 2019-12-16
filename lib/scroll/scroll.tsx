import React from 'react';
import './scroll.scss';
import classes, {classMaker} from "../helpers/classMaker";
import scrollbarWidth from "../../example/scroll/getScrollBarWidth";

const componentName = 'Scroll';
const sc = classMaker('seele-scroll');
interface IProps extends IStyledProps{
}

const Scroll: SFC<IProps> = (props) => {
    const {children, className, ...rest} = props;
    return (
        <div {...rest} className={classes(sc(''), className)}>
            <div className={sc('inner')} style={{right: -scrollbarWidth()}}>
                {children}
            </div>
        </div>
    )
};

Scroll.displayName = componentName;
export default Scroll;
