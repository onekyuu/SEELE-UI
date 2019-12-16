import React from 'react';
import Input from "../../lib/input/input";
import Icon from "../../lib/icon/icon";
import './input.scss';
import { useTranslation } from 'react-i18next';


const InputExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <div>{t('input_with_label')}</div>
                <div>
                    <Input labelText={t('input_input')}/>
                    <Input labelText={t('input_input')} labelPosition={'right'}/>
                </div>
            </div>
            <div>
                <div>{t('input_with_placeholder')}</div>
                <div>
                    <Input labelText={''} placeholder={t('input_placeholder')}/>
                    <Input labelText={false} placeholder={t('input_placeholder_is_false')}/>
                </div>
            </div>
            <div>
                <div>{t('input_with_different_size')}</div>
                <div>
                    <Input labelText={t('normal_size')} size={'normal'}/>
                    <Input labelText={t('large_size')} size={'large'}/>
                    <Input labelText={t('small_size')} size={'small'}/>
                </div>
            </div>
            <div>
                <div>{t('input_with_different_length')}</div>
                <div>
                    <Input labelText={t('8_characters')} length={8}/>
                    <Input labelText={t('16_characters')} length={16}/>
                    <Input labelText={t('24_characters')} length={24}/>
                </div>
            </div>
            <div>
                <div>{t('before_and_after')}</div>
                <div>
                    <Input labelText={t('before')} before={<Icon name={'alipay'} className={'input-icon'}/>} after={'元'}/>
                    <Input labelText={t('after')} after={<Icon name={'alipay'}/>}/>
                </div>
            </div>
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

export default InputExample;
