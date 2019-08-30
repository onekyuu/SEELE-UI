import React from 'react';
import Demo from '../demo';
import DrawerExample from "./drawer";


const DrawerDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./drawer.tsx').default}>
            <DrawerExample/>
        </Demo>
    )
}

export default DrawerDemo;
