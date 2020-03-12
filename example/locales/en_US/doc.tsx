const en_USDoc = {
    page_title: 'Installation, usage and customization',
    page_description: 'SEELE-UI is a set of React components. It\'s powered' +
        ' by CSS Modules and written in TypeScript with complete defined types, and harmoniously integrates with your webpack workflow. You can take a tour through our documentation website and try the components live!',
    installation_title: 'Installation',
    installed_text: 'SEELE-UI can be installed as an ',
    npm: 'npm package',
    npm_code: '$ npm install --save seele-ui',
    prerequisites: 'Prerequisites',
    pre_description_one: 'SEELE-UI uses CSS Modules by default to import' +
        ' stylesheets written in SASS. In case you want to import the components already bundled with CSS, your module bundler should be able to require these SASS modules.',
    pre_description_two: 'Although we recommend webpack, you are free to use' +
        ' whatever module bundler you want as long as it can compile and require SASS files located in your node_modules. If you are experiencing require errors, make sure your configuration satisfies this requirement.',
    pre_description_three: 'Of course this is a set of React and TypeScript' +
        ' components so you should be familiar with React and TypeScript.',
    basic: 'Basic usage',
    basic_description: 'In this minimal example, we import a Button with' +
        ' styles already bundled:',
    usage: `import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'seele-ui';

ReactDOM.render(
  <Button>Hello SEELE!</Button>,
  document.getElementById('app')
);`,
    seele_description: 'SEELE - A open source UI libraries based on React and TypeScript, using React Hooks and functional programming.',
};

export default en_USDoc;
