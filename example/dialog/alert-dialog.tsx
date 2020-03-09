import React from 'react';
import {alert} from '../../lib/dialog/dialog';
import Button from '../../lib/button/button';
import './dialog.scss';
import {useTranslation} from 'react-i18next';

const AlertDialogExample: React.FunctionComponent = () => {
    const {t} = useTranslation();

    return (
        <div className={"dialogExample"}>
            <h4>{t('alert_dialog')}</h4>
            <div>
                <Button className={'dialog-button'}
                        onClick={e => alert('hi')}>{t('alert')}</Button>
            </div>
        </div>
    );
};

export default AlertDialogExample;
