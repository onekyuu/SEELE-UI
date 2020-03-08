import React from 'react';
import Demo, {DemoFooter} from '../demo';
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import { useTranslation } from 'react-i18next';
import BasicGridExample from "./basic-grid";
import GutterGridExample from "./gutter-grid";
import FlexAlignGridExample from "./flex-align-grid";
import FlexVerticalGridExample from "./flex-vertical-grid";
import OffsetGridExample from "./offset-grid";


const GridDemo = () => {
    const { t } = useTranslation();
    const rowData = [
        {
            property: 'gutter',
            description: t('desc_grid_gutter'),
            type: 'number',
            default: '0',
        },
        {
            property: 'align',
            description: t('desc_grid_align'),
            type: 'string',
            default: '\'left\'',
        },
        {
            property: 'vertical',
            description: t('desc_grid_vertical'),
            type: 'string',
            default: '\'top\'',
        },
    ];
    const colData = [
        {
            property: 'xs',
            description: t('desc_grid_xs'),
            type: 'number',
            default: '0',
        },
        {
            property: 'sm',
            description: t('desc_grid_sm'),
            type: 'number',
            default: '0',
        },
        {
            property: 'md',
            description: t('desc_grid_md'),
            type: 'number',
            default: '0',
        },
        {
            property: 'lg',
            description: t('desc_grid_lg'),
            type: 'number',
            default: '0',
        },
        {
            property: 'xl',
            description: t('desc_grid_xl'),
            type: 'number',
            default: '0',
        },
        {
            property: 'xxl',
            description: t('desc_grid_xxl'),
            type: 'number',
            default: '0',
        },
        {
            property: 'offset',
            description: t('desc_grid_offset'),
            type: 'number',
            default: '0',
        },
    ];
    return(
        <div className={'demo-container'}>
            <div className={'grid-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('grid_component')}</h2>
                    <div className={'component-description'}>{t('grid_description')}</div>
                </div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./basic-grid.tsx').default}>
                    <BasicGridExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./gutter-grid.tsx').default}>
                    <GutterGridExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./flex-align-grid.tsx').default}>
                    <FlexAlignGridExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./flex-vertical-grid.tsx').default}>
                    <FlexVerticalGridExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./offset-grid.tsx').default}>
                    <OffsetGridExample/>
                </Demo>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('api')}</h3>
                    <div className={'api-wrapper'}>
                        <h4 className={'api-title'}>{t('row_api')}</h4>
                        <Table data={rowData} columns={getAPIColumns()} autoHeight={true} width={1000}/>
                    </div>
                    <div className={'api-wrapper'}>
                        <h4 className={'api-title'}>{t('col_api')}</h4>
                        <Table data={colData} columns={getAPIColumns()} autoHeight={true} width={1000}/>
                    </div>
                </div>
            </div>
            <DemoFooter/>
        </div>
    )
}

export default GridDemo;
