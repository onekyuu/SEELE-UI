import React from 'react';
import Demo, {DemoFooter} from '../demo';
import DefaultButtonExample from './default-button';
import GhostButtonExample from "./ghost-button";
import DashedButtonExample from "./dashed-button";
import TypeButtonExample from "./type-button";
import IconButtonExample from "./icon-button";
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import { useTranslation } from 'react-i18next';
import './button.scss';

const ButtonDemo: React.FunctionComponent = () => {
    const { t } = useTranslation();
    const data = [
        {
            property: 'theme',
            description: t('theme_description'),
            type: '\'default\' | \'ghost\' | \'dashed\'',
            default: '\'default\'',
        },
        {
            property: 'size',
            description: t('size_description'),
            type: '\'small\' | \'normal\' | \'large\'',
            default: '\'normal\'',
        },
        {
            property: 'icon',
            description: t('icon_description'),
            type: 'string',
            default: '-',
        },
        {
            property: 'iconPosition',
            description: t('iconPosition_description'),
            type: '\'left\' | \'right\'',
            default: '\'left\'',
        },
        {
            property: 'iconColor',
            description: t('iconColor_description'),
            type: 'string',
            default: '-',
        },
        {
            property: 'shape',
            description: t('shape_description'),
            type: '\'round\' | \'circle\'',
            default: '\'round\'',
        },
        {
            property: 'href',
            description: t('href_description'),
            type: 'string',
            default: '-',
        },
        {
            property: 'target',
            description: t('target_description'),
            type: 'string',
            default: '-',
        },
        {
            property: 'type',
            description: t('type_description'),
            type: '\'button\' | \'submit\' | \'cancel\' | \'reset\' | \'link\' | \'string\'',
            default: '\'button\'',
        },
        {
            property: 'level',
            description: t('level_description'),
            type: '\'primary\' | \'danger\'',
            default: '-',
        },
        {
            property: 'disabled',
            description: t('disabled_description'),
            type: 'boolean',
            default: 'false',
        },
        {
            property: 'badge',
            description: t('badge_description'),
            type: 'number | string',
            default: '-',
        },
        {
            property: 'loading',
            description: t('loading_description'),
            type: 'boolean',
            default: 'false',
        },
        {
            property: 'onClick',
            description: t('onClick_description'),
            type: '() => void',
            default: '-',
        },
    ];
    return(
        <div className={'demo-container'}>
            <h2 className={'component-name'}>{t('button_component')}</h2>
            <div className={'component-description'}>{t('button_description')}</div>
            <h3 className={'title'}>{t('examples')}</h3>
            <Demo code={require('!!raw-loader!./default-button.tsx').default}>
                <DefaultButtonExample/>
            </Demo>
            <Demo code={require('!!raw-loader!./ghost-button.tsx').default}>
                <GhostButtonExample/>
            </Demo>
            <Demo code={require('!!raw-loader!./dashed-button.tsx').default}>
                <DashedButtonExample/>
            </Demo>
            <Demo code={require('!!raw-loader!./type-button.tsx').default}>
                <TypeButtonExample/>
            </Demo>
            <Demo code={require('!!raw-loader!./icon-button.tsx').default}>
                <IconButtonExample/>
            </Demo>
            <div className={'table-container'}>
                <h3 className={'title'}>{t('api')}</h3>
                <Table data={data} columns={getAPIColumns()} autoHeight={true} width={1000}/>
            </div>
            <DemoFooter/>
        </div>
    )
}

export default ButtonDemo;
