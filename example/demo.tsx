import * as React from 'react';
import Button from '../lib/button/button';
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/vsDark";

interface Props {
    code: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = React.useState(false)
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx" theme={nightOwl}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                    ))}
                </div>
                ))}
            </pre>
            )}
        </Highlight>
    )
    return (
        <div>
            {props.children}
            <Button onClick={() => setCodeVisible(!codeVisible)}>{codeVisible ? '收起代码' : '显示代码'}</Button>
            {codeVisible && code}
        </div>
    )
}

export default Demo;