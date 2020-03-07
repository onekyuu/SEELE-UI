import React from 'react';
import Button from '../../lib/button/button';
import './button.scss';
import { useTranslation } from 'react-i18next';

const DefaultButtonExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'buttonExample'}>
            <h4>{t('default_button')}</h4>
            <div>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                <Button theme={'default'} size={'normal'} disabled={true} type={'button'}>Disabled</Button>
                <Button theme={'default'} size={'small'} disabled={false} type={'button'}>Small</Button>
                <Button theme={'default'} size={'large'} disabled={false} type={'button'}>Large</Button>
            </div>
        </div>
    );
}

export default DefaultButtonExample;
