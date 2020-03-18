import React, {ChangeEventHandler, useState} from "react";
import Icon from "../icon/icon";
import {classMaker} from "../helpers/classMaker";
import {SourceItem, TreeProps} from "./SourceItem";

const sc = classMaker('seele-tree');
interface Props {
    item: SourceItem;
    level: number;
    treeProps: TreeProps;
}

const TreeItem: React.FC<Props> = (props) => {
    const {item, level, treeProps} = props;
    const classList = {
        [`level-${level}`]: true,
        ['item']: true,
    };
    const checked = treeProps.multiple ? treeProps.selected.indexOf(item.value) >= 0 :
        treeProps.selected === item.value;
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (treeProps.multiple) {
            if (e.target.checked) {
                treeProps.onChange([...treeProps.selected, item.value]);
            } else {
                treeProps.onChange(treeProps.selected.filter(v => v !==
                    item.value));
            }
        } else {
            treeProps.onChange(item.value);
        }
    };
    const [collapse, setCollapse] = useState(false);
    return <div className={sc(classList)} key={item.value}>
        <div className={sc('text')}>
            {item.children && <span>
                    {collapse ? <Icon onClick={() => setCollapse(!collapse)}
                                      name="arrow-right"/> :
                        <Icon onClick={() => setCollapse(!collapse)}
                              name="arrow-down"/>
                    }
                </span>}
            {treeProps.icon}
            <input className={sc('checkbox')}
                   type="checkbox"
                   onChange={onChangeHandler}
                   checked={checked}/>
            {item.key}
        </div>
        <div className={sc({subItem: true, collapsed: collapse})}>
            {item.children?.map((subItem: SourceItem) => {
                return <TreeItem item={subItem} level={level + 1} treeProps={treeProps}/>;
            })}
        </div>
    </div>;
};

export default TreeItem;
