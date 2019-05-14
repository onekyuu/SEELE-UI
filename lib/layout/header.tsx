import React from 'react';
import { classMaker } from '../helpers/classMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = classMaker('wui-layout')
const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('header', {extra: className})} {...rest}>Header</div>
    )
}

export default Header;