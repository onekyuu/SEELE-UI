import React, { useState } from 'react';
import Button from '../../lib/button/button';
import '../button/button.scss';

const ButtonExample: React.FunctionComponent = () => {
    const [state, setState] = useState({loading: false});
    return (
        <div className={'buttonExample'}>
            <div>
                <h3>普通按钮</h3>
                <div>
                    <Button theme={'default'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                    <Button theme={'default'} size={'normal'} disabled={true} type={'button'}>Disabled</Button>
                    <Button theme={'default'} size={'small'} disabled={false} type={'button'}>Small</Button>
                    <Button theme={'default'} size={'large'} disabled={false} type={'button'}>Large</Button>
                </div>
            </div>
            <div>
                <h3>幽灵按钮</h3>
                <div style={{backgroundColor: 'rgb(190, 200, 200)'}}>
                    <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                    <Button theme={'ghost'} size={'normal'} disabled={true} type={'button'}>Disabled</Button>
                    <Button theme={'ghost'} size={'small'} disabled={false} type={'button'}>Small</Button>
                    <Button theme={'ghost'} size={'large'} disabled={false} type={'button'}>Large</Button>
                </div>
            </div>
            <div>
                <h3>虚线按钮</h3>
                <div>
                    <Button theme={'dashed'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                    <Button theme={'dashed'} size={'normal'} disabled={true} type={'button'}>Disabled</Button>
                    <Button theme={'dashed'} size={'small'} disabled={false} type={'button'}>Small</Button>
                    <Button theme={'dashed'} size={'large'} disabled={false} type={'button'}>Large</Button>
                </div>
            </div>
            <div>
                <h3>按钮类型</h3>
                <div>
                    <Button theme={'default'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                    <Button theme={'default'} size={'normal'} disabled={false} type={'button'} level={'primary'}>Primary</Button>
                    <Button theme={'default'} size={'normal'} disabled={true} type={'button'} level={'primary'}>Primary</Button>
                    <Button theme={'default'} size={'normal'} disabled={false} type={'button'} level={'danger'}>Danger</Button>
                    <Button theme={'default'} size={'normal'} disabled={true} type={'button'} level={'danger'}>Danger</Button>
                </div>
                <div style={{backgroundColor: 'rgb(190, 200, 200)'}}>
                    <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                    <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'} level={'primary'}>Primary</Button>
                    <Button theme={'ghost'} size={'normal'} disabled={true} type={'button'} level={'primary'}>Primary</Button>
                    <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'} level={'danger'}>Danger</Button>
                    <Button theme={'ghost'} size={'normal'} disabled={true} type={'button'} level={'danger'}>Danger</Button>
                </div>
            </div>
            <div>
                <h3>图标按钮</h3>
                <div>
                    <Button theme={'default'} size={'normal'} disabled={false} type={'button'} icon={'qq'} iconPosition={'left'}>Default</Button>
                    <Button theme={'default'} size={'normal'} disabled={false} type={'button'} icon={'qq'} iconPosition={'right'}>Default</Button>
                    <Button theme={'default'} size={'small'} disabled={false} type={'button'} icon={'qq'} iconPosition={'left'}>Small</Button>
                    <Button theme={'default'} size={'large'} disabled={false} type={'button'} icon={'qq'} iconPosition={'left'}>Small</Button>
                    <Button theme={'default'} size={'normal'} disabled={false} type={'button'} icon={'qq'} iconPosition={'left'} loading={true}>Default</Button>
                    <Button theme={'default'} size={'normal'} disabled={false} type={'button'} icon={'wechat'} iconPosition={'left'} onClick={() => setState({loading: !state.loading})} loading={state.loading}>Default</Button>
                </div>
            </div>
        </div>
    );
}

export default ButtonExample;