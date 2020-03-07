import { useTranslation } from 'react-i18next';

const getLanguage = () => {
    let language = localStorage.getItem('language') || 'en_us';
    const lang = navigator.language; // 常规浏览器语言和IE浏览器
    language = language || lang;
    language = language.replace(/-/, '_').toLowerCase();
    if (language === 'zh_cn' || language === 'zh') {
        language = 'zh_CN';
    } else {
        language = 'en_US';
    }
    return language;
}

const getAPIColumns = () => {
    const { t } = useTranslation();
    const apiColumns = [
        {
            label: t('property'),
            key: 'property',
        },
        {
            label: t('description'),
            key: 'description',
            width: 400,
        },
        {
            label: t('type'),
            key: 'type',
            width: 300,
        },
        {
            label: t('default'),
            key: 'default',
        },
    ];
    return apiColumns;
}


export {getLanguage, getAPIColumns};
