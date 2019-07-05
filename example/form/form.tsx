import React, { useState, Fragment } from 'react';
import Form from '../../lib/form/form';

const FormExample: React.FunctionComponent = () => {
    const [formData] = useState({
        username: 'wwww',
        password: '',
    })
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(formData);
        console.log(e);
    }
    return (
        <Form value={formData} fields={fields}
            buttons={
                <Fragment>
                    <button type="submit">提交</button>
                    <button type="cancel">取消</button>
                </Fragment>
            }
            onSubmit={onSubmit}
        />
    )
}

export default FormExample;