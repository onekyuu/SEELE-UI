import * as React from 'react';
import Button from '../lib/button/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface Props {
    code: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = React.useState(false)
    const code = (<SyntaxHighlighter language="javascript">
        {props.code}
    </SyntaxHighlighter>)
    return (
        <div>
            {props.children}
            <Button onClick={() => setCodeVisible(!codeVisible)}>{codeVisible ? '收起代码' : '显示代码'}</Button>
            {codeVisible && code}
        </div>
    )
}

export default Demo;