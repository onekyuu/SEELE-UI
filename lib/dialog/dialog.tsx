import React, {Fragment, ReactElement, ReactNode} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import ReactDOM from 'react-dom';
import {classMaker} from '../helpers/classMaker';
import Button from '../button/button';

const componentName = 'Dialog';

interface Props extends IStyledProps {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickBg?: boolean;
}

const sc = classMaker('seele-dialog');

const Dialog: SFC<Props> = (props) => {
    const onClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };

    const closeOnClickBg: React.MouseEventHandler = (e) => {
        if (props.closeOnClickBg) {
            props.onClose(e);
        }
    };

    const DialogNode = props.visible &&
        <Fragment>
            <div className={sc('bg')} onClick={closeOnClickBg}/>
            <div className={sc('')}>
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
        </Fragment>;

    return (
        ReactDOM.createPortal(DialogNode, document.body)
    );
};

Dialog.displayName = componentName;

Dialog.defaultProps = {
    closeOnClickBg: false,
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const onCloseHandler = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component =
        <Dialog
            visible={true}
            buttons={buttons}
            onClose={() => {
                onCloseHandler();
                afterClose && afterClose();
            }
            }>
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return onCloseHandler;
};

const alert = (content: string) => {
    const buttons = [<Button onClick={() => onClose()}>OK</Button>];
    const onClose = modal(content, buttons);
};

const confirm = (content: string, ok?: () => void, cancel?: () => void) => {
    const onCancelHandler = () => {
        onClose();
        cancel && cancel();
    };
    const onOkHandler = () => {
        onClose();
        ok && ok();
    };

    const buttons = [
        <Button onClick={onCancelHandler}>cancel</Button>,
        <Button onClick={onOkHandler}>ok</Button>
    ];
    const onClose = modal(content, buttons, cancel);
};

export {alert, confirm, modal};

export default Dialog;
