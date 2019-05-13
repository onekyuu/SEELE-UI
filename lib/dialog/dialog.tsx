import React, { Fragment, ReactElement, ReactNode} from 'react';
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

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const onCloseHandler = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = 
        <Dialog
            visible={true}
            buttons={buttons}
            onClose={() => {
                onCloseHandler();
                afterClose && afterClose()}
            }>
            {content}
        </Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return onCloseHandler;
}

const alert = (content: string) => {
    const buttons = [<button onClick={() => onClose()}>OK</button>]
    const onClose = modal(content, buttons)
}

const confirm = (content: string, ok?: () => void, cancel?: () => void) => {
    const onCancelHandler = () => {
        onClose()
        cancel && cancel()
    }
    const onOkHandler = () => {
        onClose()
        ok && ok()
    }

    const buttons = [
        <button onClick={onCancelHandler}>cancel</button>,
        <button onClick={onOkHandler}>ok</button>
    ]
    const onClose = modal(content, buttons, cancel)
}

export {alert, confirm, modal}

export default Dialog;