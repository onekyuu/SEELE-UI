import React from 'react';
import Demo, {DemoFooter} from '../demo';
import InputExample from './input';
import {useTranslation} from "react-i18next";
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import DiffSizeInputExample from "./diff-size-input";
import DiffLengthInputExample from "./diff-length-input";
import PositionInputExample from "./position-input";
import WithPlaceholderInputExample from "./with-placeholder-input";
import TypeInputExample from "./type-input";

const InputDemo = () => {
    const { t } = useTranslation();
    const data = [
        {
            property: 'labelText',
            description: t('input_labelText'),
            type: 'string',
            default: '-',
        },
        {
            property: 'labelPosition',
            description: t('input_labelPosition'),
            type: '\'right\' | \'left\'',
            default: '\'left\'',
        },
        {
            property: 'placeholder',
            description: t('input_placeholder'),
            type: 'string',
            default: '-',
        },
        {
            property: 'size',
            description: t('input_size'),
            type: '\'large\' | \'normal\' | \'small\'',
            default: '\'normal\'',
        },
        {
            property: 'inputType',
            description: t('input_inputType'),
            type: '\'text\' | \'number\' | \'password\' | \'email\' | \'date\' | \'datetime-local\' | \'search\' | \'tel\' | \'time\' | \'url\'',
            default: '-',
        },
        {
            property: 'before',
            description: t('input_before'),
            type: 'ReactChild',
            default: '-',
        },
        {
            property: 'after',
            description: t('input_after'),
            type: 'ReactChild',
            default: '-',
        },
        {
            property: 'length',
            description: t('input_length'),
            type: 'number',
            default: '-',
        },
        {
            property: 'disabled',
            description: t('input_disabled'),
            type: 'boolean',
            default: '-',
        },
        {
            property: 'required',
            description: t('input_required'),
            type: 'boolean',
            default: '-',
        },
        {
            property: 'onEnter',
            description: t('input_onEnter'),
            type: '() => void',
            default: '-',
        },
    ];
    return (
        <div className={'demo-container'}>
            <div className={'input-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('input_component')}</h2>
                    <div className={'component-description'}>{t('input_description')}</div>
                </div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./input.tsx').default}>
                    <InputExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./with-placeholder-input.tsx').default}>
                    <WithPlaceholderInputExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./diff-size-input.tsx').default}>
                    <DiffSizeInputExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./diff-length-input.tsx').default}>
                    <DiffLengthInputExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./position-input.tsx').default}>
                    <PositionInputExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./type-input.tsx').default}>
                    <TypeInputExample/>
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

export default InputDemo;
