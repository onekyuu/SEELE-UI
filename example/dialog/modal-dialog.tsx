import React from 'react';
import {modal} from '../../lib/dialog/dialog';
import Button from '../../lib/button/button';
import './dialog.scss';
import {useTranslation} from 'react-i18next';

const ModalDialogExample: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const openModal = () => {
        const close = modal(<div>
            <h1>{t('h1_and_button')}</h1>
            <Button theme={'default'}
                    onClick={e => close()}>{t('close')}</Button>
        </div>);
    };

    return (
        <div className={"dialogExample"}>
            <h4>{t('modal_dialog')}</h4>
            <div>
                <Button className={'dialog-button'}
                        onClick={openModal}>{t('modal')}</Button>
            </div>
        </div>
    );
};

export default ModalDialogExample;
