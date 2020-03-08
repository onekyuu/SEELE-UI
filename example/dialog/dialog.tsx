import React, { useState } from 'react';
import Dialog, {alert, confirm, modal} from '../../lib/dialog/dialog';
import Button from '../../lib/button/button';
import './dialog.scss';
import { useTranslation } from 'react-i18next';

const DialogExample:React.FunctionComponent = () => {
    const { t } = useTranslation();
    const [x, setX] = useState(false);
    const openModal = () => {
        const close = modal(<div>
                <h1>{t('h1_and_button')}</h1>
                <Button theme={'default'} onClick={e => close()}>{t('close')}</Button>
            </div>)
    }

    return (
        <div>
            <div>
                <Button className={'dialog-button'} onClick={e => setX(!x)}>{t('dialog_dialog')}</Button>
                <Dialog visible={x} buttons={
                    [
                        <Button onClick={e => {setX(false)}}>{t('cancel')}</Button>,
                        <Button onClick={e => {setX(false)}}>{t('ok')}</Button>
                    ]
                } onClose={() => {setX(false)}} closeOnClickBg={false}>
                    <div>{t('hi')}</div>
                </Dialog>
            </div>
            <div>
                <Button className={'dialog-button'} onClick={e => alert('hi')}>{t('alert')}</Button>
                <Button className={'dialog-button'} onClick={e => confirm('please confirm', () => {console.log('OK')}, () => {console.log('Cancel')})}>{t('confirm')}</Button>
                <Button className={'dialog-button'} onClick={openModal}>{t('modal')}</Button>
            </div>
        </div>
    );
}

export default DialogExample;
