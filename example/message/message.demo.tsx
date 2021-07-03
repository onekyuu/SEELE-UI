import React from 'react';
import Demo, {DemoFooter} from '../demo';
import IconExample from './icon';
import { useTranslation } from 'react-i18next';
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import './icon.scss';
import IconStyleExample from "./icon-style";

const IconDemo = () => {
    const { t } = useTranslation();
    const data = [
        {
            property: 'name',
            description: t('icon_name'),
            type: 'string',
            default: '-',
        },
        {
            property: 'size',
            description: t('icon_size'),
            type: 'string',
            default: '-',
        },
        {
            property: 'className',
            description: t('icon_className'),
            type: 'string',
            default: '-',
        },
        {
            property: 'width',
            description: t('icon_width'),
            type: 'string',
            default: '-',
        },
        {
            property: 'height',
            description: t('icon_height'),
            type: 'string',
            default: '-',
        },
        {
            property: 'style',
            description: t('icon_style'),
            type: 'object',
            default: '-',
        },
    ];
    return (
        <div className={'demo-container'}>
            <div className={'message-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('icon_component')}</h2>
                    <div className={'component-description'}>{t('icon_description')}</div>
                    <div className={'component-suggest'}>{t('icon_suggest')}</div>
                </div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./icon.tsx').default}>
                    <IconExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./icon-style.tsx').default}>
                    <IconStyleExample/>
                </Demo>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('api')}</h3>
                    <Table data={data} columns={getAPIColumns()} autoHeight={true} width={1000}/>
                </div>
            </div>
            <DemoFooter/>
        </div>
    )
}

export default IconDemo
