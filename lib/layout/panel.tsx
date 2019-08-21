import React from 'react';
import { classMaker } from '../helpers/classMaker';

const sc = classMaker('seele-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Panel: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('panel', {extra: className})} {...rest}>{props.children}</div>
    )
}

export default Panel;