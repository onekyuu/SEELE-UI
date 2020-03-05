import React from 'react';
import Demo from '../demo';
import DropdownExample from './dropdown';

const DropdownDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./dropdown.tsx').default}>
            <DropdownExample/>
        </Demo>
    )
}

export default DropdownDemo;
