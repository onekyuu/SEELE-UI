import React from 'react';
import './tree.scss';
import classes, {classMaker} from "../helpers/classMaker";
import {TreeProps} from "./SourceItem";
import TreeItem from "./tree-item";

const componentName = 'Tree';
const sc = classMaker('seele-tree');

const Tree: SFC<TreeProps> = (props) => {
    const {sourceData} = props;
    return (
        <div className={classes(sc(''))}>
            {sourceData.map(item => <TreeItem item={item} level={0} treeProps={props} key={item.value}/>)}
        </div>
    );
};

Tree.displayName = componentName;
Tree.defaultProps = {};
export default Tree;
