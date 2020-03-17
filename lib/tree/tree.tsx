import React, {ReactElement} from 'react';
import './tree.scss';
import classes, {classMaker} from "../helpers/classMaker";

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
}
type singleType = {
    selected: string,
    multiple?: false,
}

type IProps = {
    sourceData: SourceItem[],
    icon?: ReactElement,
    onChange: (item: SourceItem, isChecked: boolean) => void,
} & (multiType | singleType)

const Tree: SFC<IProps> = (props) => {
    const {sourceData, icon, selected, onChange, multiple} = props;
    const renderItem = (item: SourceItem, level = 0) => {
        const classList = {
            [`level-${level}`]: true,
            ['item']: true,
        };
        const checked = multiple ? selected.indexOf(item.value) >= 0 :
            selected === item.value;
        return <div className={sc(classList)} key={item.value}>
            <div className={sc('text')}>
                {icon}
                <input className={sc('checkbox')}
                       type="checkbox"
                       onChange={(e) => onChange(item, e.target.checked)}
                       checked={checked}/>
                {item.key}
            </div>
            {item.children?.map((subItem: SourceItem) => {
                return renderItem(subItem, level + 1);
            })}
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
