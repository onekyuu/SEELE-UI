import React from 'react';
import Demo from '../demo';
import FormExample from './form';


const FormDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./form.tsx').default}>
            <FormExample/>
        </Demo>
    )
}

export default FormDemo;