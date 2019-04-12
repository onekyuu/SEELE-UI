import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './icon';
import ButtonExample from './button';

ReactDom.render((
    <Router>
        <div>
            <header>
                WUI
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                </main>
            </div>
        </div>
    </Router>
), document.querySelector('#root'))