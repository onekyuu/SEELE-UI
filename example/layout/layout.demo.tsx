import React from 'react';
import Demo, {DemoFooter} from '../demo';
import LayoutExample from './layout';
import {useTranslation} from 'react-i18next';
import Layout2Example from "./layout-2";
import Layout3Example from "./layout-3";
import Layout4Example from "./layout-4";

const LayoutDemo = () => {
    const {t} = useTranslation();
    return (
        <div className={'demo-container'}>
            <div className={'layout-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>
                        {t('layout_component')}
                    </h2>
                    <div className={'component-description'}>
                        {t('layout_description')}
                    </div>
                </div>
                <h3 className={'component-overview'}>
                    {t('overview_title')}
                </h3>
                <ul className={"overview-list"}>
                    <li>
                        <code>{t("overview_layout")}</code>
                        {t("overview_layout_detail")}
                    </li>
                    <li>
                        <code>{t("overview_header")}</code>
                        {t("overview_header_detail")}
                    </li>
                    <li>
                        <code>{t("overview_panel")}</code>
                        {t("overview_panel_detail")}
                    </li>
                    <li>
                        <code>{t("overview_aside")}</code>
                        {t("overview_aside_detail")}
                    </li>
                    <li>
                        <code>{t("overview_footer")}</code>
                        {t("overview_footer_detail")}
                    </li>
                </ul>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./layout.tsx').default}>
                    <LayoutExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./layout-2.tsx').default}>
                    <Layout2Example/>
                </Demo>
                <Demo code={require('!!raw-loader!./layout-3.tsx').default}>
                    <Layout3Example/>
                </Demo>
                <Demo code={require('!!raw-loader!./layout-4.tsx').default}>
                    <Layout4Example/>
                </Demo>
            </div>
            <DemoFooter/>
        </div>
    )
}

export default LayoutDemo;
