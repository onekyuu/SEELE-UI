import React, { useState, Fragment } from 'react';
import Form, {FormValue} from '../../lib/form/form';
import Validator, {noError} from "../../lib/form/validator";
import Button from "../../lib/button/button";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: '',
    })
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    const [errors, setErrors] = useState({})
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required: true},
            {key: 'username', minLength: 6, maxLength: 16},
            {key: 'username', pattern: /^[A-Za-z0-9]+$/},
            {key: 'password', required: true},
            {key: 'password', minLength: 6, maxLength: 16},
            {key: 'password', pattern: /^[A-Za-z0-9]+$/},
        ]
        const errors = Validator(formData, rules)
        if (noError(errors)) {
            setErrors({})
        } else {
            setErrors(errors)
        }
    }
    return (
        <Form value={formData} fields={fields}
            buttons={
                <Fragment>
                    <Button type="submit">提交</Button>
                    <Button type="cancel">取消</Button>
                </Fragment>
            }
            errors={errors}
            onSubmit={onSubmit} onChange={(newData: FormValue) => setFormData(newData)}
        />
    )
}

export default FormExample;