import React from 'react';
import Demo from '../demo';
import ScrollExample from "./scroll";

const ScrollDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./scroll.tsx').default}>
            <ScrollExample/>
        </Demo>
    )
}

export default ScrollDemo;
