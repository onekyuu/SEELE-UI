import React from 'react';
import Demo from '../demo';
import GridExample from './grid';


const GridDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./grid.tsx').default}>
            <GridExample/>
        </Demo>
    )
}

export default GridDemo;