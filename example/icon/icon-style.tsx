import React from 'react';
import Icon from '../../lib/icon/icon';
import './icon.scss';
import { useTranslation } from 'react-i18next';

const IconStyleExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'iconExample'}>
            <h4>{t('icon_set_style')}</h4>
            <div className={'example-container'}>
                <Icon name={'arrow-up'} width={'40px'} height={'40px'}/>
                <Icon name={'arrow-down'} size={'40px'}/>
                <Icon name={'arrow-left'} style={{fill: '#999999'}}/>
                <Icon name={'arrow-right'} className={'icon-arrow-right'}/>
            </div>
        </div>
    );
}

export default IconStyleExample;
