import React from 'react';
import Button from '../../lib/button/button';
import './button.scss';
import { useTranslation } from 'react-i18next';

const TypeButtonExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'buttonExample'}>
            <h4>{t('button_type')}</h4>
            <div>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'} level={'primary'}>Primary</Button>
                <Button theme={'default'} size={'normal'} disabled={true} type={'button'} level={'primary'}>Primary</Button>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'} level={'danger'}>Danger</Button>
                <Button theme={'default'} size={'normal'} disabled={true} type={'button'} level={'danger'}>Danger</Button>
            </div>
            <div style={{backgroundColor: 'rgb(190, 200, 200)'}}>
                <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'} level={'primary'}>Primary</Button>
                <Button theme={'ghost'} size={'normal'} disabled={true} type={'button'} level={'primary'}>Primary</Button>
                <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'} level={'danger'}>Danger</Button>
                <Button theme={'ghost'} size={'normal'} disabled={true} type={'button'} level={'danger'}>Danger</Button>
            </div>
        </div>
    );
}

export default TypeButtonExample;
