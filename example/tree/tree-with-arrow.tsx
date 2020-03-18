import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import './tree.scss';
import Tree from "../../lib/tree/tree";

const TreeWithArrowExample = () => {
    const {t} = useTranslation();
    const [treeData] = useState([
        {
            key: 'item 1',
            value: '1',
            children: [
                {
                    key: 'item 1.1',
                    value: '1.1',
                    children: [
                        {
                            key: 'item 1.1.1',
                            value: '1.1.1',
                        },
                    ]
                },
            ]
        },
        {
            key: 'item 2',
            value: '2',
            children: [
                {
                    key: 'item 2.1',
                    value: '2.1',
                },
            ]
        }
    ]);
    const [selectedData, setSelectedData] = useState(['1.1', '2.1',
        '1.1.1']);
    return (
        <div className="treeExample">
            <div className={"example"}>
                <h4 className={"tree-title"}>
                    {t('arrow_tree')}
                </h4>
                <div style={{width: '200px'}}>
                    <Tree sourceData={treeData}
                          onChange={(checkedData: string[]) => setSelectedData(checkedData)}
                          selected={selectedData}
                          multiple={true}
                          arrow={true}/>
                </div>
            </div>
        </div>
    );
};

export default TreeWithArrowExample;
