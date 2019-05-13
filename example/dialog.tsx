import React, { useState } from 'react';
import Dialog, {alert} from '../lib/dialog/dialog';

const DialogExample:React.FunctionComponent = () => {
    const [x, setX] = useState(false);

    return (
        <div>
            <div>
                <button onClick={() => setX(!x)}>Dialog</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={() => {setX(false)}}>Cancel</button>,
                        <button onClick={() => {setX(false)}}>Ok</button>
                    ]
                } onClose={() => {setX(false)}} closeOnClickBg={false}>
                    <div>Hi</div>
                </Dialog>
            </div>
            <div>
                <button onClick={() => alert('hi')}>Alert</button>
            </div>
        </div>
    );
}

export default DialogExample;