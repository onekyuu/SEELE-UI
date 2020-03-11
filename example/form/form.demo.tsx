import React from 'react';
import Demo, {DemoFooter} from '../demo';
import {useTranslation} from 'react-i18next';
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import './form.scss';
import WithLabelFormExample from "./with-label-form";
import WithoutLabelFormExample from "./without-label-form";

const FormDemo = () => {
    const {t} = useTranslation();
    const data = [
        {
            property: 'value',
            description: t('form_value'),
            type: 'object',
            default: '-',
        },
        {
            property: 'fields',
            description: t('form_fields'),
            type: 'Type Fields',
            default: '-',
        },
        {
            property: 'buttons',
            description: t('form_buttons'),
            type: 'ReactFragment',
            default: '-',
        },
        {
            property: 'onSubmit',
            description: t('form_onSubmit'),
            type: '() => void',
            default: '-',
        },
        {
            property: 'onChange',
            description: t('form_onChange'),
            type: '() => void',
            default: '-',
        },
        {
            property: 'errors',
            description: t('form_errors'),
            type: 'object',
            default: '-',
        },
        {
            property: 'errorsDisplayMode',
            description: t('form_errorsDisplayMode'),
            type: '\'first\' | \'all\'',
            default: '\'first\'',
        },
        {
            property: 'hasFormLabel',
            description: t('form_hasFormLabel'),
            type: 'boolean',
            default: 'true',
        },
    ];

    const TypeColumns = [
        {
            label: t('name'),
            key: 'property',
            width: 150,
        },
        {
            label: t('description'),
            key: 'description',
            width: 400,
        },
        {
            label: t('type'),
            key: 'type',
            width: 200,
        },
        {
            label: t('addition'),
            key: 'addition',
            width: 250,
        },
    ];

    const FieldsData = [
        {
            property: 'name',
            description: t('form_fields_name'),
            type: 'string',
            addition: '-',
        },
        {
            property: 'label',
            description: t('form_fields_label'),
            type: 'string',
            addition: '-',
        },
        {
            property: 'input',
            description: t('form_fields_input'),
            type: '{type: string}',
            addition: t('form_fields_input_add'),
        },
    ];

    return (
        <div className={'demo-container'}>
            <div className={'form-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('form_component')}</h2>
                    <div
                        className={'component-description'}>{t('form_description')}</div>
                </div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo
                    code={require('!!raw-loader!./with-label-form.tsx').default}>
                    <WithLabelFormExample/>
                </Demo>
                <Demo
                    code={require('!!raw-loader!./without-label-form.tsx').default}>
                    <WithoutLabelFormExample/>
                </Demo>
                <div className={'method-container'}>
                    <h3 className={'title'}>{t('method')}</h3>
                    <h4>{t('method_validator')}</h4>
                    <p>{t('method_validator_desc')}</p>
                </div>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('api')}</h3>
                    <Table data={data} columns={getAPIColumns()}
                           autoHeight={true} width={1000}/>
                </div>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('type_title')}</h3>
                    <h4>{t('form_fields_title')}</h4>
                    <p>{t('fields_description')}</p>
                    <Table data={FieldsData} columns={TypeColumns}
                           autoHeight={true} width={1000}/>
                </div>
            </div>
            <DemoFooter/>
        </div>
    );
};

export default FormDemo;
