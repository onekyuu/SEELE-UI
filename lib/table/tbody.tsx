import React from 'react';
import './tbody.scss';
import {classMaker} from "../helpers/classMaker";
import Row from "./row";

const componentName = 'TBody';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    data: Array<{[K: string]: string | number}>,
    columns: Array<{label: string, key: string, render?: Function}>,
}

const TBody: SFC<IProps> = (props) => {
    const {data, columns} = props;
    return (
        <div className={sc('tCell')}>
            {data.map((d, index) => {
                const key = `row-${index}`;
                return <Row rowData={d} columns={columns} key={key}/>
            })}
        </div>
    )
};

TBody.displayName = componentName;
export default TBody;
