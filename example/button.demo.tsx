import React from 'react';
import Demo from './demo';
import ButtonExample from './button';


const ButtonDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./button.tsx').default}>
            <ButtonExample/>
        </Demo>
    )
}

export default ButtonDemo;