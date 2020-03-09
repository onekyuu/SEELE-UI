import React, {useState} from 'react';
import Drawer from "../../lib/drawer/drawer";
import Button from '../../lib/button/button';
import './drawer.scss';
import {useTranslation} from "react-i18next";

const BasicDrawerExample = () => {
    const {t} = useTranslation();
    const [visible, setVisible] = useState(false);

    return (
        <div className={"drawerExample"}>
            <h4>{t('drawer_basic')}</h4>
            <Button className={'drawer-button'}
                    onClick={() => setVisible(true)}>{t('open_drawer')}</Button>
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
                <Button className={'drawer-button'}
                        onClick={() => setVisible(false)}>{t('close_drawer')}</Button>
            </Drawer>
        </div>
    );
};

export default BasicDrawerExample;
