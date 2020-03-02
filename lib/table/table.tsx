import React, {useEffect, useRef, useState} from 'react';
import './table.scss';
import classes, {classMaker} from "../helpers/classMaker";
import scrollbarWidth from "../helpers/getScrollBarWidth";

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
        resizable?: boolean,
    }>,
    height?: number,
    width?: number,
};

const Table: SFC<IProps> = (props) => {
    const {data, columns, height} = props;
    const [tableHeight, setTableHeight] = useState(0);
    const ref = useRef<HTMLTableElement>(null);
    useEffect(() => {
        setTableHeight(ref.current!.getBoundingClientRect().height)
    }, [])
    return (
        <div className={sc('')}>
            <table className={sc('header')}>
                <thead>
                    <tr className={sc('row')}>
                        {columns.map(column => (<th className={sc('cell')} key={column.key}>{column.label}</th>))}
                        {(height! < tableHeight) && <th className={classes(sc('cell'), 'gutter')} style={{width: scrollbarWidth()}}/>}
                    </tr>
                </thead>
            </table>
            <div className={sc('content')} style={{height: height}}>
                <table className={sc('body')} ref={ref}>
                    <tbody>
                        {data.map((row, index) => {
                            const key = `row-${index}`
                            return (
                                <tr key={key} className={sc('row')}>{columns.map((column, index) => {
                                    if (column.key === 'render' && column.render) {
                                        const key = `render-${index}`;
                                        return (
                                            <td className={sc('cell')} key={key}>{column.render(row)}</td>
                                        )
                                    } else if (column.key === 'action' && column.actions) {
                                        return (
                                            <td className={sc('cell')} key={`${key}-actions`}>
                                                {column.actions.map((action, index) => {
                                                    const key = `action-${index}`;
                                                    return (
                                                        <span key={key} className={sc('cell-action')} onClick={() => action.callback(row)}>{action.title}</span>
                                                    )
                                                })}
                                            </td>)
                                    }
                                    return (<td className={sc('cell')} key={`${column.key}`}>{row[column.key]}</td>)
                                })}</tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

Table.displayName = componentName;
Table.defaultProps = {
    width: 1000,
    height: 200,
}
export default Table;
