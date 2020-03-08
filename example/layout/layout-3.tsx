import React from 'react';
import Layout from '../../lib/layout/layout';
import Header from '../../lib/layout/header';
import Panel from '../../lib/layout/panel';
import Aside from '../../lib/layout/aside';
import Footer from '../../lib/layout/footer';
import './layout.scss';
import {useTranslation} from 'react-i18next';

const Layout3Example: React.FunctionComponent = () => {
    const {t} = useTranslation();
    return (
        <div className={"layoutExample"}>
            <h4>{t('layout_example_3')}</h4>
            <div className={"container"}>
                <Layout style={{height: '300px'}}>
                    <Header>{t('header')}</Header>
                    <Layout>
                        <Panel>{t('main')}</Panel>
                        <Aside>{t('aside')}</Aside>
                    </Layout>
                    <Footer>{t('footer')}</Footer>
                </Layout>
            </div>
        </div>
    );
};

export default Layout3Example;
