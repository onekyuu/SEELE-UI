import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button/button';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
}

ReactDOM.render(
  <div>
    <Button/>
    <Icon name="alipay" onClick={fn}/>
    <Icon name="line"/>
    <Icon name="qq"/>
    <Icon name="qzone"/>
    <Icon name="skype"/>
    <Icon name="wechat-friend"/>
    <Icon name="wechat"/>
    <Icon name="weibo"/>
  </div>,
  document.querySelector('#root')
);