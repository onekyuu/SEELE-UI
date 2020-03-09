import React, {useState} from 'react';
import Drawer from "../../lib/drawer/drawer";
import Button from '../../lib/button/button';
import './drawer.scss';
import {useTranslation} from "react-i18next";

const PositionDrawerExample = () => {
    const {t} = useTranslation();
    const [visible, setVisible] = useState(false);

    return (
        <div className={"drawerExample"}>
            <h4>{t('drawer_position')}</h4>
            <Button className={'drawer-button'}
                    onClick={() => setVisible(true)}>{t('open_drawer')}</Button>
            <Drawer
                title={'Drawer Component'}
                visible={visible}
                className={'aside-drawer'}
                position={'bottom'}
                onClose={() => setVisible(false)}>
                <div className={'right-text'}>drawer</div>
                <div>drawer</div>
                <div>drawer</div>
                <div>drawer</div>
                <div>d111111</div>
            </Drawer>
        </div>
    );
};

export default PositionDrawerExample;
