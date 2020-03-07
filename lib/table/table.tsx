import React, {useEffect, useRef, useState} from 'react';
import './table.scss';
import classes, {classMaker} from "../helpers/classMaker";
import Scroll from "../scroll/scroll";

const componentName = 'Table';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    data: Array<{[K: string]: string | number}>,
    columns: Array<{
        label: string,
        key: string,
        render?: Function,
        actions?: Array<{title: string, callback: Function}>,
        width?: number,
        resizable?: boolean,
    }>,
    height?: number,
    width?: number,
    autoHeight?: boolean,
};

const Table: SFC<IProps> = (props) => {
    const {data, columns, height, width, autoHeight, ...rest} = props;
    const [tableHeight, setTableHeight] = useState(0);
    const ref = useRef<HTMLTableElement>(null);
    useEffect(() => {
        setTableHeight(ref.current!.getBoundingClientRect().height)
    }, []);
    const gutterVisible = height && (height < tableHeight);
    const blockVisible = height && (height > tableHeight);
    const tableWidth = columns.map(c => c.width).reduce((total, acc) => {
        if (total !== undefined && acc !== undefined) {
            return total + acc
        } else if (width) {
            return width;
        } else {
            return undefined;
        }
    });
    const RenderContent =
            <table className={sc('body')} ref={ref} style={{width: tableWidth}}>
                <colgroup>
                    {columns.map(column => (<col style={{width: column.width}} key={column.key}/>))}
                </colgroup>
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
    return (
        <div className={classes(sc(''), gutterVisible && 'gutterVisible', blockVisible && 'block')} style={{width: width && (width + 2)}} {...rest}>
            <table className={sc('header')} style={{width: tableWidth}}>
                <colgroup>
                    {columns.map(column => (<col style={{width: column.width}} key={column.key}/>))}
                </colgroup>
                <thead>
                    <tr className={sc('row')}>
                        {columns.map(column => (<th className={classes(sc('cell'), 'header')} key={column.key}>{column.label}</th>))}
                        {/*{gutterVisible && <th className={classes(sc('cell'), 'gutter')} style={{width: '12px', backgroundColor: '#e5e5e5'}}/>}*/}
                    </tr>
                </thead>
            </table>
            {autoHeight ?
                <div>
                    {RenderContent}
                </div> :
                <Scroll className={sc('content')} style={{height: height, width: tableWidth}}>
                    {RenderContent}
                </Scroll>}
        </div>
    )
};

Table.displayName = componentName;
Table.defaultProps = {
    width: 800,
}
export default Table;
