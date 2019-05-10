import React, { useState } from 'react';
import Dialog from '../lib/dialog/dialog';

const DialogExample:React.FunctionComponent = () => {
    const [x, setX] = useState(false);

    return (
        <div>
            <button onClick={() => setX(!x)}>Button</button>
            <Dialog visible={x} buttons={
                [
                    <button onClick={() => {setX(false)}}>Cancel</button>,
                    <button onClick={() => {setX(false)}}>Ok</button>
                ]
            } onClose={() => {setX(false)}} closeOnClickBg={false}>
                <div>Hi</div>
            </Dialog>
        </div>
    );
}

export default DialogExample;