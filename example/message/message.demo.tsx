import Demo, {DemoFooter} from '../demo';
import { useTranslation } from 'react-i18next';
import MessageExample from './message';
import * as React from 'react';

const IconDemo = () => {
    const { t } = useTranslation();
    return (
        <div className={'demo-container'}>
            <div className={'message-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('message_component')}</h2>
                    <div className={'component-description'}>{t('message_description')}</div>
                    <div className={'component-suggest'}>{t('message_suggest')}</div>
                </div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./message.tsx').default}>
                    <MessageExample/>
                </Demo>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('api')}</h3>
                    {/*<Table data={data} columns={getAPIColumns()} autoHeight={true} width={1000}/>*/}
                </div>
            </div>
            <DemoFooter/>
        </div>
    )
}

export default IconDemo
