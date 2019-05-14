import React from 'react';
import { classMaker } from '../helpers/classMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = classMaker('wui-layout')
const Aside: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('aside', {extra: className})} {...rest}>Aside</div>
    )
}

export default Aside;