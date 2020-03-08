import React from 'react';
import Layout from '../../lib/layout/layout';
import Header from '../../lib/layout/header';
import Panel from '../../lib/layout/panel';
import Aside from '../../lib/layout/aside';
import Footer from '../../lib/layout/footer';
import './layout.scss';
import { useTranslation } from 'react-i18next';

const Layout4Example: React.FunctionComponent = () => {
    const {t} = useTranslation()
    return (
        <div className={"layoutExample"}>
            <h4>{t('layout_example_4')}</h4>
            <div className={"container"}>
                <Layout style={{height: '300px'}}>
                    <Aside>{t('aside')}</Aside>
                    <Layout>
                        <Header>{t('header')}</Header>
                        <Panel>{t('main')}</Panel>
                        <Footer>{t('footer')}</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
};

export default Layout4Example;
