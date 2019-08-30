import React from 'react';
import './drawer.scss';

const componentName = 'Drawer';

interface IProps extends IStyledProps{

}

const Drawer: SFC<IProps> = (props) => {
    console.log(props)
    return(
        <div>drawer</div>
    )
}
Drawer.displayName = componentName;
export default Drawer;
