import React from 'react';
import Input from "../../lib/input/input";
import './input.scss';
import { useTranslation } from 'react-i18next';


const WithPlaceholderInputExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'inputExample'}>
            <div>
                <div>{t('input_with_placeholder')}</div>
                <div>
                    <Input labelText={''} placeholder={t('input_placeholder_example')}/>
                    <Input labelText={false} placeholder={t('input_placeholder_is_false')}/>
                </div>
            </div>
        </div>
    )
}

export default WithPlaceholderInputExample;
