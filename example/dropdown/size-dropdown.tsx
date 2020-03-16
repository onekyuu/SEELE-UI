import React, {useState} from 'react';
import Dropdown from "../../lib/dropdown/dropdown";
import './dropdown.scss';
import {useTranslation} from "react-i18next";

const SizeDropdownExample: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const [smallVisible, setSmallVisible] = useState(false);
    const [normalVisible, setNormalVisible] = useState(false);
    const [largeVisible, setLargeVisible] = useState(false);
    const smallButton = <div className={'dropdown-button'}>small size</div>;
    const normalButton = <div className={'dropdown-button'}>normal size</div>;
    const largeButton = <div className={'dropdown-button'}>large size</div>;
    return (
        <div className={'dropDownExample'}>
            <h4>{t('size_dropdown')}</h4>
            <div className={'wrapper'}>
                <Dropdown button={smallButton} trigger="click"
                          position="bottomLeft"
                          visible={smallVisible}
                          onClick={() => setSmallVisible(!smallVisible)}
                          size="small">
                    <ul className={'dropdown-content'}>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setSmallVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
            <div className={'wrapper'}>
                <Dropdown button={normalButton} trigger="click"
                          position="bottomLeft"
                          visible={normalVisible}
                          onClick={() => setNormalVisible(!normalVisible)}
                          size="normal">
                    <ul className={'dropdown-content'}>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setNormalVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
            <div className={'wrapper'}>
                <Dropdown button={largeButton} trigger="click"
                          position="bottomLeft"
                          visible={largeVisible}
                          onClick={() => setLargeVisible(!largeVisible)}
                          size="large">
                    <ul className={'dropdown-content'}>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setLargeVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
        </div>
    );
};

export default SizeDropdownExample;
