import React from 'react';
import Demo from './demo';
import DialogExample from './dialog';


const DialogDemo = () => {
    return (
        <Demo code={require('!!raw-loader!./dialog.tsx').default}>
            <DialogExample/>
        </Demo>
    )
}

export default DialogDemo;