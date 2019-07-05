import React, { ReactFragment, FormEventHandler } from 'react';

const componentName = 'Form';
interface Props extends IStyledProps {
    value: { [K: string]: any },
    fields: Array<{name: string, label: string, input: {type: string}}>,
    buttons: ReactFragment,
    onSubmit: FormEventHandler<HTMLFormElement>,
}

const Form: WFC<Props>= (props) => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }
    const formData = props.value;
    return (
        <form onSubmit={onSubmit}>
            {props.fields.map(field => (
                <div key={field.name}>
                    <div>{field.label}</div>
                    <input type={field.input.type} value={formData[field.name]}/>
                </div>
            ))}
            <div>{props.buttons}</div>
        </form>
    )
}

Form.displayName = componentName;

export default Form;