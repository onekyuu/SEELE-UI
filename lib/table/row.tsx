import React from 'react';
import './Column.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Column';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
    fixed?: boolean,
    width?: number,
    align?: 'left' | 'center' | 'right',
}

const Column: SFC<IProps> = (props) => {
    const {width} = props;
    return (
        <div className={sc('column')} style={{width: `${width}px`}}>
            {props.children}
        </div>
    )
};

Column.displayName = componentName;
export default Column;
