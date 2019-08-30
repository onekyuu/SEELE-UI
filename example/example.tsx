import React from 'react';
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

const isDevice = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

const renderDevicePage = () => {
    if(isDevice) {
        return (
            <Router>
                <Layout className={'page'}>
                    <Header className={'page-header device'}>
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
                    <Panel className={'page-main-device'}>
                        <Route path="/" component={DocExample} exact={true}/>
                        <Route path="/button" component={ButtonExample}/>
                        <Route path="/dialog" component={DialogDemo}/>
                        <Route path="/form" component={FormDemo}/>
                        <Route path="/grid" component={GridDemo}/>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/layout" component={LayoutDemo}/>
                        <Route path="/drawer" component={DrawerDemo}/>
                    </Panel>
                </Layout>
            </Router>
        )
    }

    return (
        <Router>
            <Layout className={'page'}>
                <Header className={'page-header'}>
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
                    <Aside className={'page-aside'}>
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
                    <Panel className={'page-main'}>
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
    );
}

ReactDom.render((
    renderDevicePage()
), document.querySelector('#root'))
