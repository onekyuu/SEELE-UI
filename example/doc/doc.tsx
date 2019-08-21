import React from 'react';
import {classMaker} from "../../lib/helpers/classMaker";
import './doc.scss';

const sc = classMaker('wui')

const DocExample = () => {
    return (<div className={sc('doc')}>
        <div className={'page-title'}>Installation, usage and customization</div>
        <div className={'page-description'}>WUI is a set of React components. It's powered by CSS Modules and written in TypeScript with complete defined types, and harmoniously integrates with your webpack workflow. You can take a tour through our documentation website and try the components live!</div>
        <div className={'installation'}>
            <div className={'install-title'}>Installation</div>
            <div className={'install-description'}>
                WUI can be installed as an <a className={'install-link'} target={'_blank'} href={'https://www.npmjs.com/package/wheels-keyu.wang'}>npm package</a>:
            </div>
            <div className={'quote'}>$ npm install --save wui</div>
        </div>
    </div>)
}

export default DocExample;