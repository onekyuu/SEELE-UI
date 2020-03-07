import React from 'react';
import Button from '../../lib/button/button';
import './button.scss';
import { useTranslation } from 'react-i18next';

const DashedButtonExample: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={'buttonExample'}>
            <h4>{t('dashed_button')}</h4>
            <div>
                <Button theme={'dashed'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                <Button theme={'dashed'} size={'normal'} disabled={true} type={'button'}>Disabled</Button>
                <Button theme={'dashed'} size={'small'} disabled={false} type={'button'}>Small</Button>
                <Button theme={'dashed'} size={'large'} disabled={false} type={'button'}>Large</Button>
            </div>
        </div>
    );
}

export default DashedButtonExample;
