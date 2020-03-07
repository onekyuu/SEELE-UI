import React, { useState } from 'react';
import Button from '../../lib/button/button';
import './button.scss';
import { useTranslation } from 'react-i18next';

const IconButtonExample: React.FunctionComponent = () => {
    const [state, setState] = useState({loading: false});
    const {t} = useTranslation();
    return (
        <div className={'buttonExample'}>
            <h4>{t('icon_button')}</h4>
            <div>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'} icon={'qq'} iconPosition={'left'}>Default</Button>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'} icon={'qq'} iconPosition={'right'}>Default</Button>
                <Button theme={'default'} size={'small'} disabled={false} type={'button'} icon={'qq'} iconPosition={'left'}>Small</Button>
                <Button theme={'default'} size={'large'} disabled={false} type={'button'} icon={'qq'} iconPosition={'left'}>Large</Button>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'} icon={'qq'} iconPosition={'left'} loading={true}>Default</Button>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'} icon={'wechat'} iconPosition={'left'} onClick={() => setState({loading: !state.loading})} loading={state.loading}>Default</Button>
            </div>
        </div>
    )
}

export default IconButtonExample;
