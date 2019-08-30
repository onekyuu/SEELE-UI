import React, {useState} from 'react';
import Drawer from "../../lib/drawer/drawer";
import Button from '../../lib/button/button';
import './drawer.scss';

const DrawerExample = () => {
    const [visible, setVisible] = useState(false)

    return(
        <div>
            <Button className={'drawer-button'} onClick={() => setVisible(true)}>Open</Button>
            <Drawer
                visible={visible}
                className={'aside-drawer'}
                position={'left'}
                onClose={() => setVisible(false)}>
                <div>drawer</div>
                <div>drawer</div>
                <div>drawer</div>
                <div>drawer</div>
                <div>d111111</div>
                <Button className={'drawer-button'} onClick={() => setVisible(false)}>关闭抽屉</Button>
            </Drawer>
        </div>
    )
}

const DrawerExample2 = () => {
    const [visible, setVisible] = useState(false)

    return(
        <div>
            <Button className={'drawer-button'} onClick={() => setVisible(true)}>Open</Button>
            <Drawer
                title={'Drawer Component'}
                visible={visible}
                className={'aside-drawer'}
                position={'right'}
                onClose={() => setVisible(false)}>
                <div className={'right-text'}>drawer</div>
                <div>drawer</div>
                <div>drawer</div>
                <div>drawer</div>
                <div>d111111</div>
            </Drawer>
        </div>
    )
}

export default DrawerExample;
export {DrawerExample2};
