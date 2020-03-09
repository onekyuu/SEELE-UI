import React from 'react';
import Demo, {DemoFooter} from '../demo';
import BasicDrawerExample from "./basic-drawer";
import {useTranslation} from "react-i18next";
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import PositionDrawerExample from "./position-drawer";


const DrawerDemo = () => {
    const {t} = useTranslation();
    const data = [
        {
            property: 'visible',
            description: t('drawer_visible'),
            type: 'boolean',
            default: '-',
        },
        {
            property: 'position',
            description: t('drawer_position'),
            type: '\'left\' | \'right\' | \'top\' | \'bottom\'',
            default: '\'left\'',
        },
        {
            property: 'onClose',
            description: t('drawer_onClose'),
            type: 'React.MouseEventHandler',
            default: '-',
        },
        {
            property: 'title',
            description: t('drawer_title'),
            type: 'string',
            default: '-',
        },
    ];
    return (
        <div className={'demo-container'}>
            <div className={'drawer-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('drawer_component')}</h2>
                    <div
                        className={'component-description'}>{t('drawer_description')}</div>
                </div>
                <h3 className={'component-overview'}>
                    {t('overview_title')}
                </h3>
                <div className={"drawer-overview"}>{t('drawer_overview')}</div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./basic-drawer.tsx').default}>
                    <BasicDrawerExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./position-drawer.tsx').default}>
                    <PositionDrawerExample/>
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

export default DrawerDemo;
