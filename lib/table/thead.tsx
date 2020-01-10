import React from 'react';
import './THead.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'THead';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    columns: Array<{[K: string]: string | number | Function | undefined}>,
}

const THead: SFC<IProps> = (props) => {
    const {columns} = props;
    return (
        <div className={sc('tHead')}>
            {columns.map((column, index) => {
                const key = `thead-${index}`;
                return (
                    <div className={sc('tHead-column')} key={key}>{column.label}</div>
                )
            })}
        </div>
    )
};

THead.displayName = componentName;
export default THead;
