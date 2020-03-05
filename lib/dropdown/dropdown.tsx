import React from 'react';
import {classMaker} from "../helpers/classMaker";

const componentName = 'Dropdown'
const sc = classMaker('seele-dropdown');
interface IProps extends IStyledProps{

}
const Dropdown: SFC<IProps> = (props) => {

    return (
        <div className={sc('')}>dropdown</div>
    )
}

Dropdown.displayName = componentName;
export default Dropdown;
