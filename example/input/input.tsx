import React from 'react';
import Input from "../../lib/input/input";
import './input.scss';
import { useTranslation } from 'react-i18next';


const InputExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'inputExample'}>
            <div>
                <div>{t('input_basic')}</div>
                <div>
                    <Input labelText={t('input_input')}/>
                    <Input labelText={t('input_input')} labelPosition="right"/>
                </div>
            </div>
        </div>
    )
}

export default InputExample;
