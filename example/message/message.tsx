import { useTranslation } from 'react-i18next';
import Button from "../../lib/button/button";
import * as React from 'react';

const MessageExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'messageExample'}>
            <h4>{t('basic_usage')}</h4>
            <div className={'example-container'}>
                <Button>点击</Button>
            </div>
        </div>
    );
}

export default MessageExample;
