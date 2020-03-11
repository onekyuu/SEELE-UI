import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import './example.scss';
import './i18n';
import {getLanguage} from './utils';
import {useTranslation} from 'react-i18next';
import FormDemo from './form/form.demo';
import DialogDemo from './dialog/dialog.demo';
import IconDemo from './icon/icon.demo';
import LayoutDemo from './layout/layout.demo';
import Layout, {Header, Aside, Panel} from '../lib/layout/layout';
import ButtonDemo from './button/button.demo';
import DocExample from './doc/doc';
import {Icon} from '../lib';
import InputDemo from "./input/input.demo";
import GridDemo from "./grid/grid.demo";
import DrawerDemo from "./drawer/drawer.demo";
import AffixDemo from "./affix/affix.demo";
import Drawer from "../lib/drawer/drawer";
import Button from "../lib/button/button";
import TableDemo from "./table/table.demo";
import ScrollDemo from "./scroll/scroll.demo";
import DropdownDemo from "./dropdown/dropdown.demo";

const isDevice = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

interface IProps extends IStyledProps {
    data: { [Key: string]: Array<string> },
    isDevice?: boolean,
}

const RenderAside: React.FunctionComponent<IProps> = (props) => {
    const {data, isDevice} = props;
    const {t} = useTranslation();
    return (
        <Aside className={`page-aside ${isDevice === true ? 'device' : ''}`}>
            <div className={'list-container'}>
                <div className={'list-title'}>{t('general')}</div>
                <ul>
                    {data.generalList.map((general, index) => {
                        const key = `general-${index}`;
                        return (
                            <li key={key}>
                                <NavLink
                                    to={general}>{t(`${general}_component`)}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'list-container'}>
                <div className={'list-title'}>{t('layout')}</div>
                <ul>
                    {data.layoutList.map((layout, index) => {
                        const key = `layout-${index}`;
                        return (
                            <li key={key}>
                                <NavLink
                                    to={layout}>{t(`${layout}_component`)}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'list-container'}>
                <div className={'list-title'}>{t('interaction')}</div>
                <ul>
                    {data.interactionList.map((interaction, index) => {
                        const key = `interaction-${index}`;
                        return (
                            <li key={key}>
                                <NavLink
                                    to={interaction}>{t(`${interaction}_component`)}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'list-container'}>
                <div className={'list-title'}>{t('data')}</div>
                <ul>
                    {data.dataList.map((data, index) => {
                        const key = `data-${index}`;
                        return (
                            <li key={key}>
                                <NavLink
                                    to={data}>{t(`${data}_component`)}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Aside>
    )
};

const RenderNode: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const language = getLanguage();
    const switchLanguage = (lang: string) => {
        localStorage.setItem('language', lang);
        window.location.reload();
    };
    const [visible, setVisible] = useState(false)
    const lists = {
        generalList: ['button', 'icon'],
        layoutList: ['grid', 'layout'],
        interactionList: ['dialog', 'drawer', 'scroll'],
        dataList: ['form', 'input', 'table'],
    };
    // interactionList: ['affix', 'dialog', 'drawer', 'dropdown', 'scroll'],
    return (
        <Router>
            <Layout className={'page'}>
                <Header className={`page-header ${isDevice === true ? 'device' :
                    ''}`}>
                    <div className={'page-logo-container'}>
                        <Icon className={'page-logo'} name="seele-logo"/>
                        <span className={'page-title'}>SEELE</span>
                    </div>
                    <div className={'page-links'}>
                        <div className={'page-item'}>
                            <NavLink to="/">{t('doc')}</NavLink>
                        </div>
                        <div className={'page-item'}>
                            <a href="https://github.com/wky0615/SEELE-UI"
                               target="_blank">GitHub</a>
                        </div>
                        <div className={'page-item'}>
                            <Icon className={'language-icon'} name="language"/>
                            <div className={`language ${language !== 'zh_CN' &&
                            'show'}`}
                                 onClick={() => switchLanguage('zh_cn')}>{t('chinese')}</div>
                            <div className={`language ${language === 'zh_CN' &&
                            'show'}`}
                                 onClick={() => switchLanguage('en_us')}>{t('english')}</div>
                        </div>
                    </div>
                </Header>
                <Layout>
                    {isDevice
                        ? <div className={'drawer-container'}>
                            <Button level={'primary'} className={'affix'}
                                    onClick={() => setVisible(true)}>{t('menu')}</Button>
                            <Drawer onClose={() => setVisible(false)}
                                    visible={visible}>
                                <RenderAside data={lists} isDevice={true}/>
                            </Drawer>
                        </div>
                        : <RenderAside data={lists}/>}
                    <Panel
                        className={`page-main ${isDevice === true ? 'device' :
                            ''}`}>
                        <Route path="/" component={DocExample} exact={true}/>
                        <Route path="/button" component={ButtonDemo}/>
                        <Route path="/dialog" component={DialogDemo}/>
                        <Route path="/form" component={FormDemo}/>
                        <Route path="/grid" component={GridDemo}/>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/layout" component={LayoutDemo}/>
                        <Route path="/input" component={InputDemo}/>
                        <Route path="/drawer" component={DrawerDemo}/>
                        <Route path="/affix" component={AffixDemo}/>
                        <Route path="/table" component={TableDemo}/>
                        <Route path="/scroll" component={ScrollDemo}/>
                        <Route path="/dropdown" component={DropdownDemo}/>
                    </Panel>
                </Layout>
            </Layout>
        </Router>
    )
}

ReactDom.render(
    <RenderNode/>
    , document.querySelector('#root'))
