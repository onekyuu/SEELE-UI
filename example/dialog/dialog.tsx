import React, { useState } from 'react';
import Dialog, {alert, confirm, modal} from '../../lib/dialog/dialog';
import Button from '../../lib/button/button';
import './dialog.scss';

const DialogExample:React.FunctionComponent = () => {
    const [x, setX] = useState(false);
    const openModal = () => {
        const close = modal(<div>
                <h1>Hi, there are a h1 and a Button</h1>
                <Button theme={'default'} onClick={e => close()}>close</Button>
            </div>)
    }

    return (
        <div>
            <div>
                <Button  className={'dialog-button'} onClick={e => setX(!x)}>Dialog</Button>
                <Dialog visible={x} buttons={
                    [
                        <Button onClick={e => {setX(false)}}>Cancel</Button>,
                        <Button onClick={e => {setX(false)}}>Ok</Button>
                    ]
                } onClose={() => {setX(false)}} closeOnClickBg={false}>
                    <div>Hi</div>
                </Dialog>
            </div>
            <div>
                <Button className={'dialog-button'} onClick={e => alert('hi')}>Alert</Button>
                <Button className={'dialog-button'} onClick={e => confirm('please confirm', () => {console.log('OK')}, () => {console.log('Cancel')})}>Confirm</Button>
                <Button className={'dialog-button'} onClick={openModal}>Modal</Button>
            </div>
        </div>
    );
}

export default DialogExample;
