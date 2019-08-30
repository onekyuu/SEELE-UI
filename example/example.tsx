import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import './example.scss';
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
import Drawer from "../lib/drawer/drawer";
import Button from "../lib/button/button";

const isDevice = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

const RenderDeviceAside: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={'drawer-container'}>
            <Button level={'primary'} className={'affix'} onClick={() => setVisible(true)}>固钉</Button>
            <Drawer onClose={() => setVisible(false)} visible={visible}>
                <Aside className={'page-aside device'}>
                    <div className={'list-container'}>
                        <div className={'list-title'}>通用</div>
                        <ul>
                            <li>
                                <NavLink to="/button">Button/按钮</NavLink>
                            </li>
                            <li>
                                <NavLink to="/icon">Icon/图标</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={'list-container'}>
                        <div className={'list-title'}>布局</div>
                        <ul>
                            <li>
                                <NavLink to="/grid">Grid/栅格</NavLink>
                            </li>
                            <li>
                                <NavLink to="/layout">Layout/布局</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={'list-container'}>
                        <div className={'list-title'}>交互</div>
                        <ul>
                            <li>
                                <NavLink to="/dialog">Dialog/对话框</NavLink>
                            </li>
                            <li>
                                <NavLink to="/drawer">Drawer/抽屉</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={'list-container'}>
                        <div className={'list-title'}>数据</div>
                        <ul>
                            <li>
                                <NavLink to="/form">Form/表单</NavLink>
                            </li>
                            <li>
                                <NavLink to="/input">Input/输入框</NavLink>
                            </li>
                        </ul>
                    </div>
                </Aside>
            </Drawer>
        </div>
    )
}

const renderNode = () =>{
    return (
        <Router>
            <Layout className={'page'}>
                <Header className={`page-header ${isDevice && 'device'}`}>
                    <div className={'page-logo-container'}>
                        <Icon className={'page-logo'} name='seele-logo'/>
                        <span className={'page-title'}>SEELE</span>
                    </div>
                    <div className={'page-links'}>
                        <div className={'page-item'}>
                            <NavLink to="/">Doc</NavLink>
                        </div>
                        <div className={'page-item'}>
                            <a href="https://github.com/wky0615/SEELE-UI" target='_blank'>GitHub</a>
                        </div>
                        <div className={'page-item'}>
                            <div className={'language'}>简体中文</div>
                        </div>
                    </div>
                </Header>
                <Layout>
                    {isDevice
                        ? <RenderDeviceAside/>
                        : <Aside className={'page-aside'}>
                            <div className={'list-container'}>
                                <div className={'list-title'}>通用</div>
                                <ul>
                                    <li>
                                        <NavLink to="/button">Button/按钮</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/icon">Icon/图标</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={'list-container'}>
                                <div className={'list-title'}>布局</div>
                                <ul>
                                    <li>
                                        <NavLink to="/grid">Grid/栅格</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/layout">Layout/布局</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={'list-container'}>
                                <div className={'list-title'}>交互</div>
                                <ul>
                                    <li>
                                        <NavLink to="/dialog">Dialog/对话框</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/drawer">Drawer/抽屉</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={'list-container'}>
                                <div className={'list-title'}>数据</div>
                                <ul>
                                    <li>
                                        <NavLink to="/form">Form/表单</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/input">Input/输入框</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Aside>}
                    <Panel className={`page-main ${isDevice && 'device'}`}>
                        <Route path="/" component={DocExample} exact={true}/>
                        <Route path="/button" component={ButtonExample}/>
                        <Route path="/dialog" component={DialogDemo}/>
                        <Route path="/form" component={FormDemo}/>
                        <Route path="/grid" component={GridDemo}/>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/layout" component={LayoutDemo}/>
                        <Route path="/input" component={InputDemo}/>
                        <Route path="/drawer" component={DrawerDemo}/>
                    </Panel>
                </Layout>
            </Layout>
        </Router>
    )
}

ReactDom.render(
    renderNode()
    , document.querySelector('#root'))
