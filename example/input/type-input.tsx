import React from 'react';
import Input from "../../lib/input/input";
import './input.scss';
import { useTranslation } from 'react-i18next';


const TypeInputExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'inputExample'}>
            <div>
                <div>{t('input_type')}</div>
                <div>
                    <Input labelText={t('input_text')} inputType={'text'}/>
                    <Input labelText={t('input_password')} inputType={'password'}/>
                    <Input labelText={t('input_number')} inputType={'number'}/>
                    <Input labelText={t('input_email')} inputType={'email'}/>
                    <Input labelText={t('input_date')} inputType={'date'}/>
                    <Input labelText={t('input_datetime-local')} inputType={'datetime-local'}/>
                    <Input labelText={t('input_tel')} inputType={'tel'}/>
                    <Input labelText={t('input_search')} inputType={'search'}/>
                    <Input labelText={t('input_time')} inputType={'time'}/>
                    <Input labelText={t('input_url')} inputType={'url'}/>
                </div>
            </div>
        </div>
    )
}

export default TypeInputExample;
