import React from 'react';
import Demo from './demo';
import LayoutExample from './layout';


const LayoutDemo = () => {
    return (
        <Demo code={require('!!raw-loader!./layout.tsx').default}>
            <LayoutExample/>
        </Demo>
    )
}

export default LayoutDemo;