import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import './example.scss';
import './i18n';
import { useTranslation } from 'react-i18next';
import FormDemo from './form/form.demo';
import DialogDemo from './dialog/dialog.demo';
import IconDemo from './icon/icon.demo';
import LayoutDemo from './layout/layout.demo';
import Layout, {Header, Aside, Panel} from '../lib/layout/layout';
import ButtonExample from './button/button';
import DocExample from './doc/doc';
import {Icon} from '../lib';
import InputDemo from "./input/input.demo";
import GridDemo from "./grid/grid.demo";
import DrawerDemo from "./drawer/drawer.demo";
import AffixDemo from "./affix/affix.demo";
import Drawer from "../lib/drawer/drawer";
import Button from "../lib/button/button";

const isDevice = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

const RenderDeviceAside: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)
    const { t } = useTranslation();
    return (
        <div className={'drawer-container'}>
            <Button level={'primary'} className={'affix'} onClick={() => setVisible(true)}>{t('menu')}</Button>
            <Drawer onClose={() => setVisible(false)} visible={visible}>
                <Aside className={'page-aside device'}>
                    <div className={'list-container'}>
                        <div className={'list-title'}>{t('general')}</div>
                        <ul>
                            <li>
                                <NavLink to="/button">{t('button')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/icon">{t('icon')}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={'list-container'}>
                        <div className={'list-title'}>{t('layout')}</div>
                        <ul>
                            <li>
                                <NavLink to="/grid">{t('grid')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/layout">{t('layout_component')}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={'list-container'}>
                        <div className={'list-title'}>{t('interaction')}</div>
                        <ul>
                            <li>
                                <NavLink to="/affix">{t('affix')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialog">{t('dialog')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/drawer">{t('drawer')}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={'list-container'}>
                        <div className={'list-title'}>{t('data')}</div>
                        <ul>
                            <li>
                                <NavLink to="/form">{t('form')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/input">{t('input')}</NavLink>
                            </li>
                        </ul>
                    </div>
                </Aside>
            </Drawer>
        </div>
    )
}

const RenderNode: React.FunctionComponent = () =>{
    const { t } = useTranslation();
    useEffect(()=> {
        localStorage.setItem('language', 'en');
    }, [])
    const language = localStorage.getItem('language');
    const switchLanguage = (lang: string) => {
        localStorage.setItem('language', lang);
        window.location.reload();
    }
    return (
        <Router>
            <Layout className={'page'}>
                <Header className={`page-header ${isDevice === true ? 'device' : ''}`}>
                    <div className={'page-logo-container'}>
                        <Icon className={'page-logo'} name='seele-logo'/>
                        <span className={'page-title'}>SEELE</span>
                    </div>
                    <div className={'page-links'}>
                        <div className={'page-item'}>
                            <NavLink to="/">{t('doc')}</NavLink>
                        </div>
                        <div className={'page-item'}>
                            <a href="https://github.com/wky0615/SEELE-UI" target='_blank'>GitHub</a>
                        </div>
                        <div className={'page-item'}>
                            <div className={`language ${language === 'en' && 'show'}`} onClick={() => switchLanguage('zh')}>{t('chinese')}</div>
                            <div className={`language ${language === 'zh' && 'show'}`} onClick={() => switchLanguage('en')}>{t('english')}</div>
                        </div>
                    </div>
                </Header>
                <Layout>
                    {isDevice
                        ? <RenderDeviceAside/>
                        : <Aside className={'page-aside'}>
                            <div className={'list-container'}>
                                <div className={'list-title'}>{t('general')}</div>
                                <ul>
                                    <li>
                                        <NavLink to="/button">{t('button')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/icon">{t('icon')}</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={'list-container'}>
                                <div className={'list-title'}>{t('layout')}</div>
                                <ul>
                                    <li>
                                        <NavLink to="/grid">{t('grid')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/layout">{t('layout_component')}</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={'list-container'}>
                                <div className={'list-title'}>{t('interaction')}</div>
                                <ul>
                                    <li>
                                        <NavLink to="/affix">{t('affix')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dialog">{t('dialog')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/drawer">{t('drawer')}</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={'list-container'}>
                                <div className={'list-title'}>{t('data')}</div>
                                <ul>
                                    <li>
                                        <NavLink to="/form">{t('form')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/input">{t('input')}</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Aside>}
                    <Panel className={`page-main ${isDevice === true ? 'device' : ''}`}>
                        <Route path="/" component={DocExample} exact={true}/>
                        <Route path="/button" component={ButtonExample}/>
                        <Route path="/dialog" component={DialogDemo}/>
                        <Route path="/form" component={FormDemo}/>
                        <Route path="/grid" component={GridDemo}/>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/layout" component={LayoutDemo}/>
                        <Route path="/input" component={InputDemo}/>
                        <Route path="/drawer" component={DrawerDemo}/>
                        <Route path="/affix" component={AffixDemo}/>
                    </Panel>
                </Layout>
            </Layout>
        </Router>
    )
}

ReactDom.render(
    <RenderNode/>
    , document.querySelector('#root'))