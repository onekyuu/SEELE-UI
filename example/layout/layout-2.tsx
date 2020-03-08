import React from 'react';
import Layout from '../../lib/layout/layout';
import Header from '../../lib/layout/header';
import Panel from '../../lib/layout/panel';
import Aside from '../../lib/layout/aside';
import Footer from '../../lib/layout/footer';
import './layout.scss';
import {useTranslation} from 'react-i18next';

const Layout2Example: React.FunctionComponent = () => {
    const {t} = useTranslation();
    return (
        <div className={"layoutExample"}>
            <h4>{t('layout_example_2')}</h4>
            <div className={"container"}>
                <Layout style={{height: '300px'}}>
                    <Header>{t('header')}</Header>
                    <Layout>
                        <Aside>{t('aside')}</Aside>
                        <Panel>{t('main')}</Panel>
                    </Layout>
                    <Footer>{t('footer')}</Footer>
                </Layout>
            </div>
        </div>
    );
};

export default Layout2Example;
