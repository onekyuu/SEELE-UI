import React from 'react';
import Input from "../../lib/input/input";
import Icon from "../../lib/icon/icon";
import './input.scss';


const InputExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <div>带标签文本的输入框</div>
                <div>
                    <Input labelText={'输入框'}/>
                    <Input labelText={'输入框'} labelPosition={'right'}/>
                </div>
            </div>
            <div>
                <div>带有占位符的输入框（Tips：此用法需保证 labelText 为空字符串或 false）</div>
                <div>
                    <Input labelText={''} placeholder={'labelText为空字符串'}/>
                    <Input labelText={false} placeholder={'labelText为 false'}/>
                </div>
            </div>
            <div>
                <div>不同尺寸的输入框</div>
                <div>
                    <Input labelText={'normal size input'} size={'normal'}/>
                    <Input labelText={'large size input'} size={'large'}/>
                    <Input labelText={'small size input'} size={'small'}/>
                </div>
            </div>
            <div>
                <div>不同长度的输入框</div>
                <div>
                    <Input labelText={'8 characters length'} length={8}/>
                    <Input labelText={'16 characters length'} length={16}/>
                    <Input labelText={'24 characters length'} length={24}/>
                </div>
            </div>
            <div>
                <div>before & after</div>
                <div>
                    <Input labelText={'before'} before={<Icon name={'alipay'} className={'input-icon'}/>} after={'元'}/>
                    <Input labelText={'after'} after={<Icon name={'alipay'}/>}/>
                </div>
            </div>
            <div>
                <div>各种type</div>
                <div>
                    <Input labelText={'text'} inputType={'text'}/>
                    <Input labelText={'password'} inputType={'password'}/>
                    <Input labelText={'number'} inputType={'number'}/>
                    <Input labelText={'email'} inputType={'email'}/>
                    <Input labelText={'date'} inputType={'date'}/>
                    <Input labelText={'datetime'} inputType={'datetime'}/>
                    <Input labelText={'tel'} inputType={'tel'}/>
                    <Input labelText={'search'} inputType={'search'}/>
                    <Input labelText={'time'} inputType={'time'}/>
                    <Input labelText={'url'} inputType={'url'}/>
                </div>
            </div>
        </div>
    )
}

export default InputExample;