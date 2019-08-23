import React, { ReactFragment, FormEventHandler } from 'react';
import classes, {classMaker} from "../helpers/classMaker";
import Input from "../input/input";
import './form.scss';

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
    hasFormLabel?: boolean,
}

const Form: SFC<Props>= (props) => {
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
            <table>
                <tbody>
                    {props.fields.map(field => (
                        <tr className={classes(sc('row'))} key={field.name}>
                            {props.hasFormLabel && <td className={sc('label')}>
                                <span>{field.label}</span>
                            </td>}
                            <td className={sc('td')}>
                                <Input type={field.input.type} value={formData[field.name]}
                                    onChange={(e) => onInputChange(field.name, e.target.value)}
                                    labelText={(!props.hasFormLabel && field.label)}/>
                                <div className={sc('error')}>
                                    {props.errors[field.name] && props.errors[field.name][0]}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>{props.buttons}</div>
        </form>
    )
}

Form.displayName = componentName;
Form.defaultProps = {
    hasFormLabel: true,
}

export default Form;