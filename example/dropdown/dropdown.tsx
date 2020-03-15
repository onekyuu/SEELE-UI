import React, {useState} from 'react';
import Dropdown from "../../lib/dropdown/dropdown";
import './dropdown.scss';

const DropdownExample: React.FunctionComponent = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const dropdownButton1 = <div>hover me</div>;
    const dropdownButton2 = <div>click me</div>;
    return (
        <div className={'dropDownExample'}>
            <div className={'wrapper'}>
                <Dropdown button={dropdownButton1} trigger="hover"
                          position="bottomLeft"
                          visible={visible1}
                          onShow={() => setVisible1(true)}
                          onHide={() => setVisible1(false)}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li onClick={() => setVisible1(false)}>5</li>
                    </ul>
                </Dropdown>
            </div>
            <div className={'wrapper'}>
                <Dropdown button={dropdownButton2} trigger="click"
                          position="bottomCenter"
                          visible={visible2}
                          onClick={() => setVisible2(!visible2)}
                          onClickClose={() => setVisible2(false)}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li onClick={() => setVisible2(false)}>5</li>
                    </ul>
                </Dropdown>
            </div>
        </div>
    );
};

export default DropdownExample;
