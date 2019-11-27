import React from 'react';
import './table.scss';

const componentName = 'Table';
interface IProps extends IStyledProps{

}

const Table: SFC<IProps> = (props) => {
    return (
        <div>table</div>
    )
}

Table.displayName = componentName;
export default Table;
