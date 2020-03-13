import React from 'react';
import Input from "../../lib/input/input";
import './input.scss';
import { useTranslation } from 'react-i18next';


const DiffSizeInputExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'inputExample'}>
            <div>
                <div>{t('input_with_different_size')}</div>
                <div>
                    <Input labelText={t('normal_size')} size={'normal'}/>
                    <Input labelText={t('large_size')} size={'large'}/>
                    <Input labelText={t('small_size')} size={'small'}/>
                </div>
            </div>
        </div>
    )
}

export default DiffSizeInputExample;
