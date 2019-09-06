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

export {getLanguage};
