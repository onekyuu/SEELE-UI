import React, {ChangeEventHandler, useRef, useState} from "react";
import Icon from "../icon/icon";
import {classMaker} from "../helpers/classMaker";
import {SourceItem, TreeProps} from "./SourceItem";
import useUpdate from "../hooks/useUpdate";
import './tree.scss';

const sc = classMaker('seele-tree');

interface Props {
    item: SourceItem;
    level: number;
    treeProps: TreeProps;
}

const TreeItem: React.FC<Props> = (props) => {
    const {item, level, treeProps} = props;
    const {arrow, isShowCheckbox} = treeProps;
    const classList = {
        [`level-${level}`]: true,
        ['item']: true,
    };
    const checked = treeProps.multiple ?
        treeProps.selected.indexOf(item.value) >= 0 :
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
    const itemRef = useRef<HTMLDivElement>(null);
    useUpdate(collapse, () => {
        if (!itemRef.current) return;
        if (collapse) {
            const {height} = itemRef.current.getBoundingClientRect();
            itemRef.current.style.height = height + 'px';
            itemRef.current.getBoundingClientRect();
            itemRef.current.style.height = '0px';
            const close = () => {
                if (itemRef.current) {
                    itemRef.current.style.height = '';
                    itemRef.current.classList.add('close');
                    itemRef.current.removeEventListener('transitionend', close);
                }
            };
            itemRef.current.addEventListener('transitionend', close);
        } else {
            itemRef.current.style.position = 'absolute';
            itemRef.current.style.opacity = '0';
            itemRef.current.style.height = 'auto';
            const {height} = itemRef.current.getBoundingClientRect();
            itemRef.current.style.position = '';
            itemRef.current.style.opacity = '';
            itemRef.current.style.height = '0px';
            itemRef.current.getBoundingClientRect();
            itemRef.current.style.height = height + 'px';
            const open = () => {
                if (itemRef.current) {
                    itemRef.current.style.height = '';
                    itemRef.current.classList.add('open');
                    itemRef.current.removeEventListener('transitionend', open);
                }
            };
            itemRef.current.addEventListener('transitionend', open);
        }
    });
    return <div className={sc(classList)} key={item.value}>
        <div className={sc('text')} onClick={() => setCollapse(!collapse)}>
            {item.children && arrow && <span className={sc('icon')}>
                    {collapse ? <Icon name="arrow-right" size={'14px'}/> :
                        <Icon name="arrow-down" size={'14px'}/>
                    }
                </span>}
            {treeProps.icon}
            {isShowCheckbox && <input className={sc('checkbox')}
                                      type="checkbox"
                                      onChange={onChangeHandler}
                                      checked={checked}
                                      onClick={(e) => e.stopPropagation()}/>}
            <span className={sc('content')}>{item.key}</span>
        </div>
        <div className={sc({subItem: true, collapsed: collapse})} ref={itemRef}>
            {item.children?.map((subItem: SourceItem) => {
                return <TreeItem item={subItem} level={level + 1}
                                 treeProps={treeProps} key={subItem.value}/>;
            })}
        </div>
    </div>;
};

export default TreeItem;
