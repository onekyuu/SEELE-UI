import React from 'react';
import { classMaker } from '../helpers/classMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = classMaker('wui-layout')
const Footer: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('footer', {extra: className})} {...rest}>Footer</div>
    )
}

export default Footer;