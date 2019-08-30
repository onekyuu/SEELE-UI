import React from 'react';
import Demo from '../demo';
import DrawerExample, {DrawerExample2} from "./drawer";


const DrawerDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./drawer.tsx').default}>
            <DrawerExample/>
            <DrawerExample2/>
        </Demo>
    )
}

export default DrawerDemo;
