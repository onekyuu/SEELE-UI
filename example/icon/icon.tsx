import React from 'react';
import Icon from '../../lib/icon/icon';
import './icon.scss';

const IconExample: React.FunctionComponent = () => {
    const iconLists = ['alipay', 'line', 'qq', 'qzone', 'skype',
        'wechat-friend', 'wechat', 'weibo', 'loading', 'arrow-up',
        'arrow-down', 'arrow-left', 'arrow-right', 'rising', 'falling',
        'close', 'code', 'category', 'add', 'sami', 'link', 'warning',
        'not-visible', 'viewlist'];

    return (
        <div className={'iconExample'}>

            {iconLists.map(icon => (
                <div className={'icon-wrapper'} key={icon}>
                    <Icon name={icon}/>
                    <span className={'icon-name'}>{icon}</span>
                </div>
            ))}
        </div>
    );
}

export default IconExample;
