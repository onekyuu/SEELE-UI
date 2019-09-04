import React from 'react';
import Affix from '../../lib/affix/affix';
import './affix.scss';

const AffixExample: React.FunctionComponent = () => {
    return (
        <div>
            <Affix offsetTop={10}/>
            <Affix offsetBottom={10}/>
        </div>
    )
}

export default AffixExample;
