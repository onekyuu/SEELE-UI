import React from 'react';
import './table.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Table';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    columns: Array<{title: string, key: string}>,
    source: Array<{[K: string]: string | number}>,
}

const Table: SFC<IProps> = (props) => {
    const {columns, source} = props;
    const TableHeader = columns.map((column, index) => {
        const key = `column-${index}`;
        return (
          <th className={sc('header')} key={key}>
              {column.title}
          </th>
        );
    });
    const TableBody = source.map((row, index) => {
        const key = `row-${index}`;
        const rowNodes = columns.map((column, index) => {
            const key = `cell-${index}`;
            return (
                <td className={sc('cell')} key={key}>{row[column.title]}</td>
            )
        })
        return (
            <tr className={sc('row')} key={key}>
                {rowNodes}
            </tr>
        );
    })
    return (
        <div className={sc('')}>
            <table>
                <thead className={sc('thead')}>
                    <tr>
                        {TableHeader}
                    </tr>
                </thead>
                <tbody className={sc('tbody')}>
                    {TableBody}
                </tbody>
            </table>
        </div>
    )
};

Table.displayName = componentName;
export default Table;
