import React from 'react';
import Demo from '../demo';
import TableExample from "./table";

const TableDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./table.tsx').default}>
            <TableExample/>
        </Demo>
    )
}

export default TableDemo;
