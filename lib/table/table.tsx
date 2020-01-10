import React from 'react';
import './table.scss';
import {classMaker} from "../helpers/classMaker";
import TBody from "./tbody";
import THead from "./thead";

const componentName = 'Table';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    data: Array<{[K: string]: string | number}>,
    columns: Array<{label: string, key: string, render?: Function}>,
};

const Table: SFC<IProps> = (props) => {
    const {data, columns} = props;
    return (
        <div className={sc('')}>
            <THead columns={columns}/>
            <TBody data={data} columns={columns}/>
        </div>
    )
};

Table.displayName = componentName;
export default Table;
