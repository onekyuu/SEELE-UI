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

ReactDom.render((
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
                        <a href="https://github.com/wky0615/Wheels" target='_blank'>GitHub</a>
                    </div>
                </div>
            </Header>
            <Layout>
                <Aside className={'page-aside'}>
                    <ul>
                        <li>
                            <NavLink to="/button">Button/按钮</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">Dialog/对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">Form/表单</NavLink>
                        </li>
                        <li>
                            <NavLink to="/icon">Icon/图标</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout/布局</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Panel className={'page-main'}>
                    <Route path="/" component={DocExample} exact={true}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogDemo}/>
                    <Route path="/form" component={FormDemo}/>
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/layout" component={LayoutDemo}/>
                </Panel>
            </Layout>
        </Layout>
    </Router>
), document.querySelector('#root'))