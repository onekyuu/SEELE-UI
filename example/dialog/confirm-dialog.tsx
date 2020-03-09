import React from 'react';
import {confirm} from '../../lib/dialog/dialog';
import Button from '../../lib/button/button';
import './dialog.scss';
import {useTranslation} from 'react-i18next';

const ConfirmDialogExample: React.FunctionComponent = () => {
    const {t} = useTranslation();

    return (
        <div className={"dialogExample"}>
            <h4>{t('confirm_dialog')}</h4>
            <div>
                <Button className={'dialog-button'}
                        onClick={e => confirm('please confirm', () => {
                            console.log('OK');
                        }, () => {
                            console.log('Cancel');
                        })}>{t('confirm')}</Button>
            </div>
        </div>
    );
};

export default ConfirmDialogExample;
