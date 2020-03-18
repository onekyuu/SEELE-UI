import React from 'react';
import Demo, {DemoFooter} from '../demo';
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import {useTranslation} from "react-i18next";
import TreeExample from "./tree";
import TreeWithArrowExample from "./tree-with-arrow";
import TreeWithCheckboxExample from "./tree-with-checkbox";

const TreeDemo = () => {
    const {t} = useTranslation();
    const data = [
        {
            property: 'sourceData',
            description: t('tree_sourceData'),
            type: 'SourceItem[]',
            default: '-',
        },
        {
            property: 'icon',
            description: t('tree_icon'),
            type: 'ReactElement',
            default: '-',
        },
        {
            property: 'arrow',
            description: t('tree_arrow'),
            type: 'boolean',
            default: 'false',
        },
        {
            property: 'isShowCheckbox',
            description: t('tree_isShowCheckbox'),
            type: 'boolean',
            default: 'false',
        },
        {
            property: 'selected',
            description: t('tree_selected'),
            type: 'string | string[]',
            default: '-',
        },
        {
            property: 'multiple',
            description: t('tree_multiple'),
            type: 'boolean',
            default: 'false',
        },
        {
            property: 'onChange',
            description: t('tree_onChange'),
            type: '(checkedData: string | string[]) => void',
            default: '-',
        },
    ];
    const interfaceData = [
        {
            property: 'key',
            description: t('tree_key'),
            type: 'string',
            default: '-',
        },
        {
            property: 'value',
            description: t('tree_value'),
            type: 'string',
            default: '-',
        },
        {
            property: 'children',
            description: t('tree_children'),
            type: 'SourceItem',
            default: '-',
        },
    ]
    return (
        <div className={'demo-container'}>
            <div className={'tree-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('tree_component')}</h2>
                    <div
                        className={'component-description'}>{t('tree_description')}</div>
                </div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./tree.tsx').default}>
                    <TreeExample/>
                </Demo>
                <Demo
                    code={require('!!raw-loader!./tree-with-arrow.tsx').default}>
                    <TreeWithArrowExample/>
                </Demo>
                <Demo
                    code={require('!!raw-loader!./tree-with-checkbox.tsx').default}>
                    <TreeWithCheckboxExample/>
                </Demo>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('api')}</h3>
                    <Table data={data} columns={getAPIColumns()}
                           autoHeight={true} width={1000}/>
                </div>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('interface')}</h3>
                    <p>{t('interface_sourceItem')}</p>
                    <Table data={interfaceData} columns={getAPIColumns()}
                           autoHeight={true} width={1000}/>
                </div>
            </div>
            <DemoFooter/>
        </div>
    );
};

export default TreeDemo;
