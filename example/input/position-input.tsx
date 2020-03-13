import React from 'react';
import Input from "../../lib/input/input";
import Icon from "../../lib/icon/icon";
import './input.scss';
import { useTranslation } from 'react-i18next';


const PositionInputExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'inputExample'}>
            <div>
                <div>{t('before_and_after')}</div>
                <div>
                    <Input labelText={t('before')} before={<Icon name={'alipay'} className={'input-icon'}/>} after={'元'}/>
                    <Input labelText={t('after')} after={<Icon name={'alipay'}/>}/>
                </div>
            </div>
        </div>
    )
}

export default PositionInputExample;
