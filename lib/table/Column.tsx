import React from 'react';
import './Column.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Column';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
}

const Column: SFC<IProps> = (props) => {
    return (
        <div className={sc('column')}>
            column
            {props.children}
        </div>
    )
};

Column.displayName = componentName;
export default Column;
