import React, {useState} from 'react';
import Drawer from "../../lib/drawer/drawer";
import Button from '../../lib/button/button';
import './drawer.scss';
import {useTranslation} from "react-i18next";

const PositionDrawerExample = () => {
    const {t} = useTranslation();
    const [bottomVisible, setBottomVisible] = useState(false);
    const [rightVisible, setRightVisible] = useState(false);
    const [topVisible, setTopVisible] = useState(false);
    const [leftVisible, setLeftVisible] = useState(false);

    return (
        <div className={"drawerExample"}>
            <h4>{t('drawer_position')}</h4>
            <div className={'examples'}>
                <div className={'drawer'}>
                    <p>{t('top_drawer')}</p>
                    <Button className={'drawer-button'}
                            onClick={() => setTopVisible(true)}>{t('open_drawer')}</Button>
                    <Drawer
                        title={'Drawer Component'}
                        visible={topVisible}
                        className={'aside-drawer'}
                        position={'top'}
                        width={'100%'}
                        height={'30%'}
                        style={{padding: '0 20px'}}
                        onClose={() => setTopVisible(false)}>
                        <div className={'right-text'}>drawer</div>
                        <div>drawer</div>
                        <div>drawer</div>
                        <div>drawer</div>
                        <div>d111111</div>
                    </Drawer>
                </div>
                <div className={'drawer'}>
                    <p>{t('bottom_drawer')}</p>
                    <Button className={'drawer-button'}
                            onClick={() => setBottomVisible(true)}>{t('open_drawer')}</Button>
                    <Drawer
                        title={'Drawer Component'}
                        visible={bottomVisible}
                        className={'aside-drawer'}
                        position={'bottom'}
                        width={'100%'}
                        height={'20%'}
                        onClose={() => setBottomVisible(false)}>
                        <div className={'right-text'}>drawer</div>
                        <div>drawer</div>
                        <div>drawer</div>
                        <div>drawer</div>
                        <div>d111111</div>
                    </Drawer>
                </div>
                <div className={'drawer'}>
                    <p>{t('left_drawer')}</p>
                    <Button className={'drawer-button'}
                            onClick={() => setLeftVisible(true)}>{t('open_drawer')}</Button>
                    <Drawer
                        title={'Drawer Component'}
                        visible={leftVisible}
                        className={'aside-drawer'}
                        position={'left'}
                        onClose={() => setLeftVisible(false)}>
                        <div style={{
                            margin: '20px',
                            padding: '12px',
                            backgroundColor: 'rgba(49, 65, 153, .8)',
                            color: '#ffffff'
                        }}>
                            <div className={'right-text'}>drawer</div>
                            <div>drawer</div>
                            <div>drawer</div>
                            <div>drawer</div>
                            <div>d111111</div>
                        </div>
                    </Drawer>
                </div>
                <div className={'drawer'}>
                    <p>{t('right_drawer')}</p>
                    <Button className={'drawer-button'}
                            onClick={() => setRightVisible(true)}>{t('open_drawer')}</Button>
                    <Drawer
                        title={'Drawer Component'}
                        visible={rightVisible}
                        className={'aside-drawer'}
                        position={'right'}
                        onClose={() => setRightVisible(false)}>
                        <div className={'right-text'}>drawer</div>
                        <div>drawer</div>
                        <div>drawer</div>
                        <div>drawer</div>
                        <div>d111111</div>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default PositionDrawerExample;
