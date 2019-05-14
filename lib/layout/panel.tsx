import React from 'react';
import { classMaker } from '../helpers/classMaker';

const sc = classMaker('wui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Panel: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('panel', {extra: className})} {...rest}>Panel</div>
    )
}

export default Panel;