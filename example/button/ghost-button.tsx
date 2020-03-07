import React from 'react';
import Button from '../../lib/button/button';
import './button.scss';
import { useTranslation } from 'react-i18next';

const GhostButtonExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'buttonExample'}>
            <h4>{t('ghost_button')}</h4>
            <div style={{backgroundColor: 'rgb(190, 200, 200)'}}>
                <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                <Button theme={'ghost'} size={'normal'} disabled={true} type={'button'}>Disabled</Button>
                <Button theme={'ghost'} size={'small'} disabled={false} type={'button'}>Small</Button>
                <Button theme={'ghost'} size={'large'} disabled={false} type={'button'}>Large</Button>
            </div>
        </div>
    );
}

export default GhostButtonExample;
