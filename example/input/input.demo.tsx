import React from 'react';
import Demo from '../demo';
import InputExample from './input';

const InputDemo = () => {
    return (
        <Demo code={require('!!raw-loader!./input.tsx').default}>
            <InputExample/>
        </Demo>
    )
}

export default InputDemo;