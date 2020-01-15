import React from 'react';
import './table.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Table';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    data: Array<{[K: string]: string | number}>,
    columns: Array<{
        label: string,
        key: string,
        render?: Function,
        actions?: Array<{title: string, callback: Function}>,
        width: number,
    }>,
    height?: number,
    width?: number,
};

const Table: SFC<IProps> = (props) => {
    const {data, columns, height, width} = props;
    // const columnWidth = width && width/columns.length
    return (
        <div className={sc('')} style={{height: height, width: width}}>
            <div className={sc('content')}>
                {columns.map((column, index) => {
                    const columnKey = `column-${index}-${column.key}`;
                    return (
                        <div className={sc('column')} key={columnKey} style={{width: column.width}}>
                            <div className={sc('tHead')}>
                                <div className={sc('tHead-content')}>{column.label}</div>
                            </div>
                            <div className={sc('wrapper')}>
                                {data.map((rowData, index) => {
                                    const cellKey = `${columnKey}-cell-${index}`;
                                    if (column.render) {
                                        return (
                                            <div className={sc('tCell')} key={cellKey}>
                                                <div className={sc('render-content')}>{column.render(rowData)}</div>
                                            </div>
                                        )
                                    }
                                    if (column.actions && column.actions.length > 0) {
                                        return (<div className={sc('tCell')} key={cellKey}>
                                            <div className={sc('action-content')}>
                                                {column.actions.map((action, index) => (
                                                    <span
                                                        className={sc('action')}
                                                        onClick={() => action.callback(rowData)}
                                                        key={`${cellKey}-action-${index}`}>
                                                        {action.title}
                                                    </span>))}
                                            </div>
                                        </div>)
                                    }
                                    return (
                                        <div className={sc('tCell')} key={cellKey}>
                                            <div className={sc('tCell-content')}>{rowData[column.key]}</div>
                                        </div>)
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

Table.displayName = componentName;
Table.defaultProps = {
    width: 1000,
    height: 300,
}
export default Table;
