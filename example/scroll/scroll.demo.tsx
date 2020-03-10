import React from 'react';
import Demo, {DemoFooter} from '../demo';
import ScrollExample from "./basic-scroll";
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import {useTranslation} from "react-i18next";
import AutoHideScrollExample from "./autoHide-scroll";

const ScrollDemo = () => {
    const {t} = useTranslation();
    const data = [
        {
            property: 'autoHide',
            description: t('scroll_autoHide'),
            type: 'boolean',
            default: 'false',
        },
        {
            property: 'color',
            description: t('scroll_color'),
            type: 'string',
            default: '\'#b7b7b7\'',
        },
        {
            property: 'onPull',
            description: t('scroll_onPull'),
            type: '() => void',
            default: '-',
        },
        {
            property: 'pullDownText',
            description: t('scroll_pullDownText'),
            type: 'string',
            default: '-',
        },
    ]
    return (
        <div className={'demo-container'}>
            <div className={'scroll-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('scroll_component')}</h2>
                    <div
                        className={'component-description'}>{t('scroll_description')}</div>
                </div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./basic-scroll.tsx').default}>
                    <ScrollExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./autoHide-scroll.tsx').default}>
                    <AutoHideScrollExample/>
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

export default ScrollDemo;
