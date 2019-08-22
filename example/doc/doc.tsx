import React from 'react';
import {classMaker} from "../../lib/helpers/classMaker";
import './doc.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';

const sc = classMaker('seele');
const usage = `import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'seele-ui/lib/button';

ReactDOM.render(
  <Button>Hello SEELE!</Button>,
  document.getElementById('app')
);`;

const DocExample = () => {
    return (<div className={sc('doc')}>
        <div className={'page-title'}>Installation, usage and customization</div>
        <div className={'page-description'}>SEELE-UI is a set of React components. It's powered by CSS Modules and written in TypeScript with complete defined types, and harmoniously integrates with your webpack workflow. You can take a tour through our documentation website and try the components live!</div>
        <div className={'installation'}>
            <div className={'title'}>Installation</div>
            <div className={'description'}>
                SEELE-UI can be installed as an <a className={'link'} target={'_blank'} href={'https://www.npmjs.com/package/seele-ui'}>npm package</a>:
            </div>
            <SyntaxHighlighter language="javascript">
                $ npm install --save seele-ui
            </SyntaxHighlighter>
        </div>
        <div className={'preparation'}>
            <div className={'title'}>Prerequisites</div>
            <div className={'description'}>SEELE-UI uses CSS Modules by default to import stylesheets written in SASS. In case you want to import the components already bundled with CSS, your module bundler should be able to require these SASS modules.</div>
            <div className={'description'}>Although we recommend webpack, you are free to use whatever module bundler you want as long as it can compile and require SASS files located in your node_modules. If you are experiencing require errors, make sure your configuration satisfies this requirement.</div>
            <div className={'description'}>Of course this is a set of React and TypeScript components so you should be familiar with React and TypeScript.</div>
        </div>
        <div className={'usage'}>
            <div className={'title'}>Basic usage</div>
            <div className={'description'}>In this minimal example, we import a Button with styles already bundled:</div>
            <SyntaxHighlighter language="javascript">
                {usage}
            </SyntaxHighlighter>
        </div>
    </div>)
};

export default DocExample;