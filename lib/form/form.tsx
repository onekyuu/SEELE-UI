import React, { ReactFragment, FormEventHandler } from 'react';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Form';
const sc = classMaker('seele-form')

export interface FormValue {
    [K: string]: any,
}

interface Props extends IStyledProps {
    value: FormValue,
    fields: Array<{name: string, label: string, input: {type: string}}>,
    buttons: ReactFragment,
    onSubmit: FormEventHandler<HTMLFormElement>,
    onChange: (value: FormValue) => void,
    errors: {[K: string]: string[]},
}

const Form: WFC<Props>= (props) => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }
    const formData = props.value;
    const onInputChange = (name: string, value: string) => {
        const newFormData = {...formData, [name]: value};
        props.onChange(newFormData);
    }
    return (
        <form onSubmit={onSubmit}>
            {props.fields.map(field => (
                <div key={field.name}>
                    <div>{field.label}</div>
                    <input type={field.input.type} value={formData[field.name]}
                    onChange={(e) => onInputChange(field.name, e.target.value)}/>
                    <div className={sc('error')}>
                        {props.errors[field.name] && props.errors[field.name][0]}
                    </div>
                </div>
            ))}
            <div>{props.buttons}</div>
        </form>
    )
}

Form.displayName = componentName;

export default Form;