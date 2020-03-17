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

interface IProps extends IStyledProps {
    sourceData: SourceItem[],
    icon?: ReactElement,
    selected: string[],
    onChange: (item: SourceItem, isChecked: boolean) => void,
}

const Tree: SFC<IProps> = (props) => {
    const {sourceData, icon, selected, onChange} = props;
    const renderItem = (item: SourceItem,
                        selected: string[],
                        onChange: (item: SourceItem, isChecked: boolean) => void,
                        level = 0) => {
        const classList = {
            [`level-${level}`]: true,
            ['item']: true,
        };
        return <div className={sc(classList)} key={item.value}>
            <div className={sc('text')}>
                {icon}
                <input className={sc('checkbox')}
                       type="checkbox"
                       onChange={(e) => onChange(item, e.target.checked)}
                       checked={selected.indexOf(item.value) >= 0}/>
                {item.key}
            </div>
            {item.children?.map((subItem: SourceItem) => {
                return renderItem(subItem, selected, onChange, level + 1);
            })}
        </div>;
    };
    return (
        <div className={classes(sc(''))}>
            {sourceData.map(item => {
                return renderItem(item, selected, onChange);
            })}
        </div>
    );
};

Tree.displayName = componentName;
Tree.defaultProps = {};
export default Tree;
