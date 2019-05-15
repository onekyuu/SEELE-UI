import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import './example.scss';
import IconDemo from './icon.demo';
import ButtonExample from './button';
import DialogExample from './dialog';
import LayoutExample from './layout';
import Layout, {Header, Aside, Panel} from '../lib/layout/layout';
import Icon from '../lib';

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
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Panel className={'page-main'}>
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </Panel>
            </Layout>
        </Layout>
    </Router>
), document.querySelector('#root'))