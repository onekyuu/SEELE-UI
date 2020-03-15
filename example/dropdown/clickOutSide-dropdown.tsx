import React, {useState} from 'react';
import Dropdown from "../../lib/dropdown/dropdown";
import './dropdown.scss';
import {useTranslation} from "react-i18next";

const ClickOutSideDropdownExample: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const [clickVisible, setClickVisible] = useState(false);
    const clickButton = <div>click me</div>;
    return (
        <div className={'dropDownExample'}>
            <h4>{t('click-outside-dropdown')}</h4>
            <div className={'wrapper'}>
                <Dropdown button={clickButton} trigger="click"
                          position="bottomLeft"
                          visible={clickVisible}
                          onClick={() => setClickVisible(!clickVisible)}
                          onClickOutSide={() => setClickVisible(false)}>
                    <ul className={'dropdown-content'}>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setClickVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
        </div>
    );
};

export default ClickOutSideDropdownExample;
