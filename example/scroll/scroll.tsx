import React from 'react';
import Scroll from "../../lib/scroll/scroll";
import { useTranslation } from 'react-i18next';

const ScrollExample = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('scroll_example')}
            <Scroll/>
        </div>
    )
}

export default ScrollExample
