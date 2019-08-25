import React, {useState} from 'react';
import classes, {classMaker} from "../helpers/classMaker";
import './input.scss';
import {ReactChild} from 'react';

const componentName = 'Input';
const sc = classMaker('seele-input')
export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    labelText?: string | boolean,
    labelPosition?: 'right' | 'left',
    placeholder?: string,
    size?: 'large' | 'normal' | 'small',
    inputType?: 'text' | 'number' | 'password' | 'email' | 'date' | 'datetime' | 'datetime-local' | 'search' | 'tel' | 'time' | 'url';
    before?: ReactChild;
    after?: ReactChild;
    length?: number | string,
    disabled?: boolean,
}

const Input: SFC<Props> = (props) => {
    const {before, after, length, size, className, style, labelPosition, labelText, inputType, disabled, ...rest} = props
    const [inputState, setInputState] = useState('blur')
    const [inputValue, setInputValue] = useState()
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const labelPositionClass = labelPosition && `label-${labelPosition}`

    return(
        <span className={classes(sc(''), className, size, disabled ? 'disabled' : '', inputState, inputValue && 'hasInput')}>
            <input className={sc('text')}
                   {...rest}
                   onFocus={() => setInputState('focus')}
                   onBlur={() => setInputState('blur')}
                   onInput={inputHandler}
                   value={inputValue}
                   type={inputType}/>
            {labelText && <span className={classes(sc('label'), labelPositionClass)}>{labelText}</span>}
            <div className={sc('bar')}/>
        </span>
    )
}


Input.displayName = componentName;
Input.defaultProps = {
    labelText: false,
    labelPosition: 'left',
    size: 'normal',
}
export default Input;