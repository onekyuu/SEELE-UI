import React from 'react';
import Button from '../../lib/button/button';
import './button.scss';
import { useTranslation } from 'react-i18next';

const EventButtonExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    const ClickHandler= () => {
        alert(t('clicked'))
    }
    return (
        <div className={'buttonExample'}>
            <h4>{t('event_button')}</h4>
            <div>
                <Button onClick={ClickHandler}>{t('click_me')}</Button>
            </div>
        </div>
    );
}

export default EventButtonExample;
