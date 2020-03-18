import React, {ChangeEventHandler, ReactElement, useState} from 'react';
import './tree.scss';
import classes, {classMaker} from "../helpers/classMaker";
import Icon from '../icon/icon';

const componentName = 'Tree';
const sc = classMaker('seele-tree');

export interface SourceItem {
    key: string,
    value: string,
    children?: SourceItem[],
}

type multiType = {
    selected: string[],
    multiple: true,
    onChange: (checkedData: string[]) => void,
}
type singleType = {
    selected: string,
    multiple?: false,
    onChange: (checkedData: string) => void,
}

type IProps = {
    sourceData: SourceItem[],
    icon?: ReactElement,
} & (multiType | singleType)

const Tree: SFC<IProps> = (props) => {
    const {sourceData, icon, selected, multiple} = props;
    const renderItem = (item: SourceItem, level = 0) => {
        const classList = {
            [`level-${level}`]: true,
            ['item']: true,
        };
        const checked = multiple ? selected.indexOf(item.value) >= 0 :
            selected === item.value;
        const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
            if (props.multiple) {
                if (e.target.checked) {
                    props.onChange([...props.selected, item.value]);
                } else {
                    props.onChange(props.selected.filter(v => v !==
                        item.value));
                }
            } else {
                props.onChange(item.value);
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
                {icon}
                <input className={sc('checkbox')}
                       type="checkbox"
                       onChange={onChangeHandler}
                       checked={checked}/>
                {item.key}
            </div>
            <div className={sc({subItem: true, collapsed: collapse})}>
                {item.children?.map((subItem: SourceItem) => {
                    return renderItem(subItem, level + 1);
                })}
            </div>
        </div>;
    };
    return (
        <div className={classes(sc(''))}>
            {sourceData.map(item => {
                return renderItem(item);
            })}
        </div>
    );
};

Tree.displayName = componentName;
Tree.defaultProps = {};
export default Tree;
