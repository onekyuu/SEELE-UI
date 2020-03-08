import React from 'react';
import Icon from '../../lib/icon/icon';
import './icon.scss';
import { useTranslation } from 'react-i18next';

const IconExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    const iconLists = ['alipay', 'line', 'qq', 'qzone', 'skype',
        'wechat-friend', 'wechat', 'weibo', 'loading', 'arrow-up',
        'arrow-down', 'arrow-left', 'arrow-right', 'rising', 'falling',
        'close', 'code', 'category', 'add', 'sami', 'link', 'warning',
        'not-visible', 'viewlist'];

    return (
        <div className={'iconExample'}>
            <h4>{t('basic_usage')}</h4>
            <div className={'example-container'}>
                {iconLists.map(icon => (
                    <div className={'icon-wrapper'} key={icon}>
                        <Icon name={icon}/>
                        <span className={'icon-name'}>{icon}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IconExample;
