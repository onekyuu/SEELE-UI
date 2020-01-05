import React from 'react';
import './table.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Table';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    // columns: Array<{title: string, key: string}>,
    // source: Array<{[K: string]: string | number}>,
}

const Table: SFC<IProps> = (props) => {
    return (
        <div className={sc('')}>
            {props.children}
        </div>
    )
};

Table.displayName = componentName;
export default Table;
