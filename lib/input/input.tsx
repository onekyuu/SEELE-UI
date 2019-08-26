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
    inputType?: 'text' | 'number' | 'password' | 'email' | 'date' | 'datetime-local' | 'search' | 'tel' | 'time' | 'url';
    before?: ReactChild;
    after?: ReactChild;
    length?: number | string,
    disabled?: boolean,
    required?: boolean,
    onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input: SFC<Props> = (props) => {
    const {before, after, length, size, className, style, labelPosition, labelText, inputType, disabled, onEnter, ...rest} = props
    const [inputState, setInputState] = useState('blur')
    const [inputValue, setInputValue] = useState()
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const labelPositionClass = labelPosition && `label-${labelPosition}`
    const width = length ? `calc(${length}em + 10px)` : undefined
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            onEnter && onEnter.call(null, e)
        }
        props.onKeyDown && props.onKeyDown.call(null, e)
    }

    return(
        <div className={classes(sc(''), inputType, className, size, disabled ? 'disabled' : '', inputState, inputValue && 'hasInput')}>
            {before && <span className={sc('before')}>{before}</span>}
            <div className={sc('container')}>
                <input className={classes(sc('text'), !labelText ? 'noLabel' : '')}
                       {...rest}
                       onFocus={() => setInputState('focus')}
                       onBlur={() => setInputState('blur')}
                       onInput={inputHandler}
                       value={inputValue}
                       type={inputType}
                       style={{width, ...style}}
                       onKeyDown={onKeyDown}/>
                {labelText && <span className={classes(sc('label'), labelPositionClass)}>{labelText}</span>}
                <div className={sc('bar')}/>
            </div>
            {after && <span className={sc('after')}>{after}</span>}
        </div>
    )
}


Input.displayName = componentName;
Input.defaultProps = {
    labelText: false,
    labelPosition: 'left',
    size: 'normal',
}
export default Input;