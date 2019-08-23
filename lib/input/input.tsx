import React, {InputHTMLAttributes, useState} from 'react';
import classes, {classMaker} from "../helpers/classMaker";
import './input.scss';

const componentName = 'Input';
const sc = classMaker('seele-input')
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string,
    hasInputLabel?: boolean,
}

const Input: SFC<Props> = (props) => {
    const {className, labelText, hasInputLabel, ...rest} = props
    const [inputState, setInputState] = useState('blur')
    const [inputValue, setInputValue] = useState()
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return(
        <span className={classes(sc(''), className, inputState, inputValue && 'hasInput')}>
            <input className={sc('text')}
                   {...rest}
                   onFocus={() => setInputState('focus')}
                   onBlur={() => setInputState('blur')}
                   onInput={inputHandler}
                   value={inputValue}/>
            {hasInputLabel && <span className={sc('label')}>{labelText}</span>}
            <div className={sc('bar')}/>
        </span>
    )
}


Input.displayName = componentName;
export default Input;