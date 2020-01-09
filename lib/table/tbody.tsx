import React from 'react';
import './TCell.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'TCell';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    dataKey?: string,
}

const TCell: SFC<IProps> = () => {
    return (
        <div className={sc('tCell')}>
            TCell
        </div>
    )
};

TCell.displayName = componentName;
export default TCell;
