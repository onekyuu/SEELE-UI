import React from 'react';
import { classMaker } from '../helpers/classMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = classMaker('seele-layout')
const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('header', {extra: className})} {...rest}>{props.children}</div>
    )
}

export default Header;