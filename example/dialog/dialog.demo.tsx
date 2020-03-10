import React from 'react';
import Demo, {DemoFooter} from '../demo';
import BasicDialogExample from './basic-dialog';
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import {useTranslation} from 'react-i18next';
import AlertDialogExample from "./alert-dialog";
import ConfirmDialogExample from "./confirm-dialog";
import ModalDialogExample from "./modal-dialog";

const DialogDemo: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const data = [
        {
            property: 'visible',
            description: t('dialog_visible'),
            type: 'boolean',
            default: '-',
        },
        {
            property: 'buttons',
            description: t('dialog_buttons'),
            type: 'Array',
            default: '-',
        },
        {
            property: 'onClose',
            description: t('dialog_onClose'),
            type: 'React.MouseEventHandler',
            default: '-',
        },
        {
            property: 'closeOnClickBg',
            description: t('dialog_closeOnClickBg'),
            type: 'boolean',
            default: 'false',
        },
        {
            property: 'showTitle',
            description: t('dialog_showTitle'),
            type: 'boolean',
            default: 'true',
        },
        {
            property: 'title',
            description: t('dialog_title'),
            type: 'string',
            default: '\'Tips\'',
        },
    ];
    return (
        <div className={'demo-container'}>
            <div className={'dialog-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('dialog_component')}</h2>
                    <div
                        className={'component-description'}>{t('dialog_description')}</div>
                </div>
                <h3 className={'component-overview'}>
                    {t('overview_title')}
                </h3>
                <p className={"dialog-overview"}>{t('dialog_overview')}</p>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./basic-dialog.tsx').default}>
                    <BasicDialogExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./alert-dialog.tsx').default}>
                    <AlertDialogExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./confirm-dialog.tsx').default}>
                    <ConfirmDialogExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./modal-dialog.tsx').default}>
                    <ModalDialogExample/>
                </Demo>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('api')}</h3>
                    <Table data={data} columns={getAPIColumns()}
                           autoHeight={true} width={1000}/>
                </div>
            </div>
            <DemoFooter/>
        </div>
    );
};

export default DialogDemo;
