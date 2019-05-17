import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import './example.scss';
// import ButtonDemo from './button.demo';
import DialogDemo from './dialog.demo';
import IconDemo from './icon.demo';
import LayoutDemo from './layout.demo';
import Layout, {Header, Aside, Panel} from '../lib/layout/layout';
import {Icon} from '../lib';
import ButtonExample from './button';

ReactDom.render((
    <Router>
        <Layout className={'page'}>
            <Header className={'page-header'}>
                <div className={'page-logo-container'}>
                    <Icon className={'page-logo'} name='wui-logo'/>
                    <span className={'page-title'}>WUI</span>
                </div>
                <div className={'page-links'}>
                    <div className={'page-item'}>
                        <NavLink to="/doc">Doc</NavLink>
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
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Panel className={'page-main'}>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogDemo}></Route>
                    {/* <Route path="/form" component={FormDemo}></Route> */}
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/layout" component={LayoutDemo}></Route>
                </Panel>
            </Layout>
        </Layout>
    </Router>
), document.querySelector('#root'))