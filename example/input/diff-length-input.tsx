import React from 'react';
import Input from "../../lib/input/input";
import './input.scss';
import { useTranslation } from 'react-i18next';


const DiffLengthInputExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'inputExample'}>
            <div>
                <div>{t('input_with_different_length')}</div>
                <div>
                    <Input labelText={t('8_characters')} length={8}/>
                    <Input labelText={t('16_characters')} length={16}/>
                    <Input labelText={t('24_characters')} length={24}/>
                </div>
            </div>
        </div>
    )
}

export default DiffLengthInputExample;
