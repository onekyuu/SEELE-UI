import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './drawer.scss';
import classes, {classMaker} from "../helpers/classMaker";

const componentName = 'Drawer';
const sc = classMaker('seele-drawer')

interface IProps extends IStyledProps{
    position?: 'left' | 'right' | 'top' | 'bottom',
    visible: boolean,
    onClose: React.MouseEventHandler,
    title?: string,
}

const Drawer: SFC<IProps> = (props) => {
    const {className, position, onClose, title, visible} = props;

    const DrawerNode = visible && <Fragment>
        <div className={sc('bg')} onClick={onClose}/>
        <div className={classes(sc('main',{extra: position}), className)}>
            {title && <div className={sc('title')}>{title}</div>}
            {props.children}
        </div>
    </Fragment>
    return(
        ReactDOM.createPortal(DrawerNode, document.body)
    );
}
Drawer.displayName = componentName;
Drawer.defaultProps = {
    position: "left",
}

export default Drawer;
