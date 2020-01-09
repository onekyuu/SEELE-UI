import React from 'react';
import './THead.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'THead';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
}

const THead: SFC<IProps> = () => {
    return (
        <div className={sc('tHead')}>
            thead
        </div>
    )
};

THead.displayName = componentName;
export default THead;
