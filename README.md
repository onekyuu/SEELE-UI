# SEELE-UI 
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/keyuTech/SEELE-UI/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/keyuTech/SEELE-UI/tree/master)
[![Latest Stable Version](https://img.shields.io/npm/v/seele-ui.svg)](https://www.npmjs.com/package/seele-ui)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

### SEELE-UI是一套基于React和TypeScript、使用React Hooks和函数式编程的开源UI库

#### 安装
SEELE-UI可以通过npm安装[npm package](https://www.npmjs.com/package/seele-ui):

npm:


```$ npm install --save seele-ui```

yarn: 

```$ yarn add seele-ui```

#### 介绍
SEELE-UI是一组React组件。 它由CSS模块驱动，用TypeScript编写，具有完整定义的类型，并与您的webpack工作流程协调地集成。 您可以浏览我们的文档网站并立即试用这些组件！

#### 常用命令和参数
-  `yarn start` 以watch模式启动
-  `yarn test` 执行jest测试
-  `yarn build` 使用Webpack构建项目
-  `yarn doc` 构建文档页面

#### 使用

Here is an example of a basic app using SEELE-UI's Button component:

```
import * as React from 'react';
import Button from '@seele-ui/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}
```
