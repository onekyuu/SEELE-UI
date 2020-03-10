import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './drawer.scss';
import classes, {classMaker} from "../helpers/classMaker";
// import stopBodyScroll from "../helpers/stopBodyScroll";

const componentName = 'Drawer';
const sc = classMaker('seele-drawer');

interface IProps extends IStyledProps {
    width?: string,
    height?: string,
    position?: 'left' | 'right' | 'top' | 'bottom',
    visible: boolean,
    onClose: React.MouseEventHandler,
    title?: string,
}

const Drawer: SFC<IProps> = (props) => {
    const {className, position, onClose, title, visible, width, height, ...rest} = props;

    const DrawerNode = visible && <Fragment>
        <div className={sc('bg')} onClick={onClose}/>
        <div className={classes(sc('main', {extra: position}), className)}
             style={{width: width, height: height}} {...rest}>
            {title && <div className={sc('title')}>{title}</div>}
            {props.children}
        </div>
    </Fragment>;
    return (
        ReactDOM.createPortal(DrawerNode, document.body)
    );
};
Drawer.displayName = componentName;
Drawer.defaultProps = {
    position: "left",
    width: '20%',
};

export default Drawer;
