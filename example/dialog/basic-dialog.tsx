import React, {useState} from 'react';
import Dialog from '../../lib/dialog/dialog';
import Button from '../../lib/button/button';
import './dialog.scss';
import {useTranslation} from 'react-i18next';

const BasicDialogExample: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const [dialogVisible, setDialogVisible] = useState(false);

    return (
        <div className={"dialogExample"}>
            <h4>{t('basic_dialog')}</h4>
            <div>
                <Button className={'dialog-button'}
                        onClick={e => setDialogVisible(!dialogVisible)}>{t('dialog_dialog')}</Button>
                <Dialog visible={dialogVisible} buttons={
                    [
                        <Button onClick={e => {
                            setDialogVisible(false);
                        }}>{t('cancel')}</Button>,
                        <Button onClick={e => {
                            setDialogVisible(false);
                        }}>{t('ok')}</Button>
                    ]
                } onClose={() => {
                    setDialogVisible(false);
                }} closeOnClickBg={false}>
                    <div>{t('hi')}</div>
                </Dialog>
            </div>
        </div>
    );
};

export default BasicDialogExample;
