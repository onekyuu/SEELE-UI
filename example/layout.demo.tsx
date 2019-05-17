import React from 'react';
import Demo from './demo';
import DialogExample from './dialog';


const LayoutDemo = () => {
    return (
        <Demo code={require('!!raw-loader!./layout.tsx').default}>
            <DialogExample/>
        </Demo>
    )
}

export default LayoutDemo;