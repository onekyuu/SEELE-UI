import React from 'react';
import './row.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Row';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    fixed?: boolean,
    width?: number,
    align?: 'left' | 'center' | 'right',
    rowData: {[K: string]: string | number},
    columns: Array<{label: string, key: string, render?: Function}>,
}

const Row: SFC<IProps> = (props) => {
    const {width, rowData, columns} = props;
    console.log(rowData)
    return (
        <div className={sc('row')} style={{width: `${width}px`}}>
            {columns.map((column, index) => {
                const key = `column-${index}-${rowData.id}-${column.key}`;
                console.log(key)
                if (column.render) {
                    return column.render(rowData)
                }
                return <div className={sc('cell')} key={key}>{rowData[column.key]}</div>
            })}
        </div>
    )
};

Row.displayName = componentName;
export default Row;
