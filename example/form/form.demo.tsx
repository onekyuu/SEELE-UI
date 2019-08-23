import React from 'react';
import Demo from '../demo';
import FormExample, {FormExample2} from './form';


const FormDemo = () => {
    return(
        <Demo code={require('!!raw-loader!./form.tsx').default}>
            <FormExample/>
            <FormExample2/>
        </Demo>
    )
}

export default FormDemo;