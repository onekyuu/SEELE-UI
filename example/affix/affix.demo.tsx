import React from 'react';
import Demo from '../demo';
import AffixExample from './affix';


const AffixDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./affix.tsx').default}>
            <AffixExample/>
        </Demo>
    )
}

export default AffixDemo;
