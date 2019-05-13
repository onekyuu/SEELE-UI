import React, { Fragment, ReactElement } from 'react';
import './dialog.scss';
import Icon from '../index';
import classMaker from '../utils/classMaker';
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickBg?: boolean;
}

const sc = classMaker('wui-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    }

    const closeOnClickBg: React.MouseEventHandler = (e) => {
        if (props.closeOnClickBg) {
            props.onClose(e);
        }
    }

    const DialogNode = props.visible ?
        <Fragment>
            <div className={sc('bg')} onClick={closeOnClickBg}/>
            <div className={sc()}>   
                <div className={sc('close')} onClick={onClose}>
                    <Icon name={'close'}/>
                </div> 
                <header className={sc('header')}>
                    提示
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                <footer className={sc('footer')}>
                    {props.buttons && props.buttons.map((button, index) => 
                        React.cloneElement(button, {key: index})
                    )}
                </footer>
            </div>
        </Fragment> :
        null

    return (
        ReactDOM.createPortal(DialogNode, document.body)
    );
}

Dialog.defaultProps = {
    closeOnClickBg: false,
}

const alert = (content: string) => {
    const component = <Dialog visible={true} onClose={() => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }}>{content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}

export {alert}

export default Dialog;