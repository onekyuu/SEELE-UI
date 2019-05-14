import React, { ReactElement } from 'react';
import './layout.scss'
import Aside from './aside';
import { classMaker } from '../helpers/classMaker';

const sc = classMaker('wui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>,
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    const children = props.children as Array<ReactElement>
    const hasAside = 'length' in children && 
        children.reduce((result, node) => {
            return result || node.type === Aside
        }, false)
    return (
        <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;