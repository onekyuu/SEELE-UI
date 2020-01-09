import React from 'react';
import './TPagination.scss';
import {classMaker} from "../helpers/classMaker";

const componentName = 'TPagination';
const sc = classMaker('seele-table');
interface IProps extends IStyledProps{
}

const TPagination: SFC<IProps> = () => {
    return (
        <div className={sc('tPagination')}>
            tPagination
        </div>
    )
};

TPagination.displayName = componentName;
export default TPagination;
