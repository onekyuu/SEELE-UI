import React from 'react';
import './scroll.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Scroll';
const sc = classMaker('seele-scroll');
interface IProps extends IStyledProps{
}

const Scroll: SFC<IProps> = (props) => {
    return (
        <div className={sc('')}>
            scroll
        </div>
    )
};

Scroll.displayName = componentName;
export default Scroll;
