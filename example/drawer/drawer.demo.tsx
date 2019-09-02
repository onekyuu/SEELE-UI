import React from 'react';
import Demo from '../demo';
import DrawerExample, {DrawerExample2} from "./drawer";


const DrawerDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./drawer.tsx').default}>
            <div>*Drawer未提供禁止浮层下window窗体滚动的功能，如有需要请自行添加</div>
            <DrawerExample/>
            <DrawerExample2/>
        </Demo>
    )
}

export default DrawerDemo;
