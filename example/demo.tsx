import * as React from 'react';
import Button from '../lib/button/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import './demo.scss';

interface Props {
    code: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = React.useState(false)
    const code = (<SyntaxHighlighter language="javascript">
        {props.code}
    </SyntaxHighlighter>)
    return (
        <div className={'demo'}>
            {props.children}
            <Button onClick={() => setCodeVisible(!codeVisible)} className={'detail-button'}>{codeVisible ? '收起代码' : '显示代码'}</Button>
            {codeVisible && code}
        </div>
    )
}

const DemoFooter = () => {
    return (
        <div className={'footer'}>
            CREATED BY Keyu.Wang
        </div>
    )
}

export default Demo;
export {DemoFooter};
