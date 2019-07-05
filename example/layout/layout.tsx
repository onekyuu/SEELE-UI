import React from 'react';
import Layout from '../../lib/layout/layout';
import Header from '../../lib/layout/header';
import Panel from '../../lib/layout/panel';
import Aside from '../../lib/layout/aside';
import Footer from '../../lib/layout/footer';
import './layout.scss';

export default function() {
    return (
        <div>
            <div className={'container'}>
                <div className={'title'}>
                    Layout example 1
                </div>
                <Layout style={{height: '300px'}}>
                    <Header>header</Header>
                    <Panel>header</Panel>
                    <Footer>header</Footer>
                </Layout>
            </div>
            <div className={'container'}>
                <div className={'title'}>
                    Layout example 2
                </div>
                <Layout style={{height: '300px'}}>
                    <Header>header</Header>
                    <Layout>
                        <Aside>aside</Aside>
                        <Panel>header</Panel>
                    </Layout>
                    <Footer>header</Footer>
                </Layout>
            </div>
            <div className={'container'}>
                <div className={'title'}>
                    Layout example 3
                </div>
                <Layout style={{height: '300px'}}>
                    <Header>header</Header>
                    <Layout>
                        <Aside>aside</Aside>
                        <Panel>header</Panel>
                    </Layout>
                    <Footer>header</Footer>
                </Layout>
            </div>
            <div className={'container'}>
                <div className={'title'}>
                    Layout example 4
                </div>
                <Layout style={{height: '300px'}}>
                    <Aside>aside</Aside>
                    <Layout>
                        <Header>header</Header>
                        <Panel>header</Panel>
                        <Footer>header</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
};