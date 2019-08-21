import React from 'react';
import { classMaker } from '../helpers/classMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = classMaker('seele-layout')
const Footer: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('footer', {extra: className})} {...rest}>{props.children}</div>
    )
}

export default Footer;