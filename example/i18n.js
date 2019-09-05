//i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { getLanguage } from './common/utils';
import zh_CNCommon from './locales/zh_CN/common';
import zh_CNButton from './locales/zh_CN/button';
import en_USCommon from './locales/en_US/common';
import en_USButton from './locales/en_US/button';

function getLanguage() {
    let language = localStorage.getItem('language');
    console.log(language);
    const lang = navigator.language || navigator.userLanguage; // 常规浏览器语言和IE浏览器
    language = language || lang;
    language = language.replace(/-/, '_').toLowerCase();
    if (language === 'zh_cn' || language === 'zh') {
        language = 'zh_CN';
    } else {
        language = 'en_US';
    }
    return language;
}

const resources = {
    zh_CN: {
        translation: {
            ...zh_CNCommon,
            ...zh_CNButton,
        }
    },
    en_US: {
        translation: {
            ...en_USCommon,
            ...en_USButton,
        },
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getLanguage(),

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
