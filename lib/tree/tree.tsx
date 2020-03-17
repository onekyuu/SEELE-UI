import React from 'react';
import './tree.scss';
import classes, {classMaker} from "../helpers/classMaker";
import Button from "../button/button";

const componentName = 'Tree';
const sc = classMaker('seele-message');

interface IProps extends IStyledProps {
}

const Tree: SFC<IProps> = () => {
    return (
        <div className={classes(sc(''))}>
            <Button>tree</Button>
        </div>
    )
};

Tree.displayName = componentName;
Tree.defaultProps = {
};
export default Tree;
