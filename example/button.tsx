import React from 'react';
import Button from '../lib/button/button';
import './button.scss';

const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <div className={'buttonExample'}>
                <Button theme={'default'} size={'normal'} disabled={false} type={'button'}>Default</Button>
                <Button theme={'ghost'} size={'normal'} disabled={false} type={'button'}>Ghost</Button>
                <Button theme={'default'} size={'small'} disabled={false} type={'button'}>Small</Button>
                <Button theme={'default'} size={'large'} disabled={false} type={'button'}>Large</Button>
                <Button theme={'default'} size={'normal'} disabled={true} type={'button'}>Disabled</Button>
            </div>
        </div>
    );
}

export default ButtonExample;