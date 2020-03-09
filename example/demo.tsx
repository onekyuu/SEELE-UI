import * as React from 'react';
import Button from '../lib/button/button';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import './demo.scss';
import Icon from "../lib/icon/icon";
import {useTranslation} from 'react-i18next';

interface Props {
    code: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const {t} = useTranslation();
    const [codeVisible, setCodeVisible] = React.useState(false);
    const code = (<SyntaxHighlighter language="javascript">
        {props.code}
    </SyntaxHighlighter>);
    return (
        <div className={'demo'}>
            {props.children}
            <Button onClick={() => setCodeVisible(!codeVisible)}
                    className={'detail-button'}>
                {codeVisible ? t('hide_code') : t('show_code')}
                <Icon name={'code'}/>
            </Button>
            {codeVisible && code}
        </div>
    );
};

const DemoFooter = () => {
    return (
        <div className={'footer'}>
            CREATED BY Keyu.Wang
        </div>
    );
};

export default Demo;
export {DemoFooter};
