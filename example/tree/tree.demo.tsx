import React from 'react';
import Demo, {DemoFooter} from '../demo';
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import {useTranslation} from "react-i18next";
import TreeExample from "./tree";

const TreeDemo = () => {
    const {t} = useTranslation();
    const data = [
        {
            property: 'autoHide',
            description: t('tree_autoHide'),
            type: 'boolean',
            default: 'false',
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

export default TreeDemo;
