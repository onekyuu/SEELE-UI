import React from 'react';
import Demo from '../demo';
import IconExample from './icon';

const IconDemo = () => {
    return (
        <Demo code={require('!!raw-loader!./icon.tsx').default}>
            <IconExample/>
        </Demo>
    )
}

export default IconDemo