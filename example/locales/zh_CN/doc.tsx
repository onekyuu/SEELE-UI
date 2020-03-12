const zh_CNDoc = {
    page_title: '安装，使用和定制',
    page_description: 'SEELE-UI是一组React组件。 它由CSS模块驱动，用TypeScript编写，具有完整定义的类型，并与您的webpack工作流程协调地集成。 您可以浏览我们的文档网站并立即试用这些组件！',
    installation_title: '安装',
    installed_text: 'SEELE-UI可以通过npm安装',
    npm: 'npm package',
    npm_code: '$ npm install --save seele-ui',
    prerequisites: '先决条件',
    pre_description_one: 'SEELE-UI默认使用CSS模块导入用SASS编写的样式表。 如果您要导入已与CSS捆绑在一起的组件，您的模块捆绑器应该能够要求这些SASS模块。',
    pre_description_two: '虽然我们建议使用webpack，但只要它可以编译并且需要位于node_modules中的SASS文件，您就可以自由使用所需的任何模块捆绑器。 如果您遇到引入错误，请确保您的配置满足此要求。',
    pre_description_three: '当然，这是一组React和TypeScript组件，因此您应该熟悉React和TypeScript。',
    basic: '基本用法',
    basic_description: '在这个最基础的例子中，我们导入一个已捆绑样式的Button：',
    usage: `import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'seele-ui';

ReactDOM.render(
  <Button>Hello SEELE!</Button>,
  document.getElementById('app')
);`,
    seele_description: 'SEELE - 一套基于React和TypeScript、使用React Hooks和函数式编程的开源UI库',
};

export default zh_CNDoc;
