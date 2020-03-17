import React from 'react';
import { useTranslation } from 'react-i18next';
import './tree.scss';
import Tree from "../../lib/tree/tree";

const TreeExample = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={"example"}>
                <h4 className={"tree-title"}>
                    {t('basic_tree')}
                </h4>
                <Tree/>
            </div>
        </div>
    )
}

export default TreeExample
