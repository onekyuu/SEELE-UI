import React from 'react';
import {classMaker} from "../../lib/helpers/classMaker";
import './doc.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useTranslation } from 'react-i18next';

const sc = classMaker('seele');

const DocExample = () => {
    const { t } = useTranslation();
    return (<div className={sc('doc')}>
        <div className={'page-title'}>{t('page_title')}</div>
        <div className={'page-description'}>{t('page_description')}</div>
        <div className={'installation'}>
            <div className={'title'}>{t('installation_title')}</div>
            <div className={'description'}>
                {t('installed_text')}<a className={'link'} target={'_blank'} href={'https://www.npmjs.com/package/seele-ui'}>{t('npm')}</a>:
            </div>
            <SyntaxHighlighter language="javascript">
                {t('npm_code')}
            </SyntaxHighlighter>
        </div>
        <div className={'preparation'}>
            <div className={'title'}>{t('prerequisites')}</div>
            <div className={'description'}>{t('pre_description_one')}</div>
            <div className={'description'}>{t('pre_description_two')}</div>
            <div className={'description'}>{t('pre_description_three')}</div>
        </div>
        <div className={'usage'}>
            <div className={'title'}>{t('basic')}</div>
            <div className={'description'}>{t('basic_description')}</div>
            <SyntaxHighlighter language="javascript">
                {t('usage')}
            </SyntaxHighlighter>
        </div>
    </div>)
};

export default DocExample;
