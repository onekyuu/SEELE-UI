import React from 'react';
import Button from '../../lib/button/button';
import './button.scss';
import { useTranslation } from 'react-i18next';

const EventButtonExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    const ClickHandler= () => {
        alert(t('clicked'))
    };
    const href = 'https://github.com/wky0615/SEELE-UI';
    return (
        <div className={'buttonExample'}>
            <h4>{t('event_button')}</h4>
            <div>
                <Button onClick={ClickHandler}>{t('click_me')}</Button>
                <Button type={'link'} href={href}>{t('link')}</Button>
            </div>
        </div>
    );
}

export default EventButtonExample;
