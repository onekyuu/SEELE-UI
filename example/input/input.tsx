import React from 'react';
import Input from "../../lib/input/input";


const InputExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <div>带标签文本的输入框</div>
                <div>
                    <Input labelText={'输入框'}/>
                </div>
                <div>
                    <Input labelText={'输入框'} labelPosition={'right'}/>
                </div>
            </div>
            <div>
                <div>带有占位符的输入框（Tips：此用法需保证 labelText 为空字符串或 false）</div>
                <div>
                    <Input labelText={''} placeholder={'labelText为空字符串'}/>
                </div>
                <div>
                    <Input labelText={false} placeholder={'labelText为 false'}/>
                </div>
            </div>
            <div>
                <div>不同尺寸的输入框</div>
                <div>
                    <Input labelText={'normal size input'} size={'normal'}/>
                </div>
                <div>
                    <Input labelText={'large size input'} size={'large'}/>
                </div>
                <div>
                    <Input labelText={'small size input'} size={'small'}/>
                </div>
            </div>
        </div>
    )
}

export default InputExample;