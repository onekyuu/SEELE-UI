import React, {useState} from 'react';
import Dropdown from "../../lib/dropdown/dropdown";
import './dropdown.scss';
import {useTranslation} from "react-i18next";

const PositionDropdownExample: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const [topLeftVisible, setTopLeftVisible] = useState(false);
    const [topCenterVisible, setTopCenterVisible] = useState(false);
    const [topRightVisible, setTopRightVisible] = useState(false);
    const [bottomLeftVisible, setBottomLeftVisible] = useState(false);
    const [bottomCenterVisible, setBottomCenterVisible] = useState(false);
    const [bottomRightVisible, setBottomRightVisible] = useState(false);
    const topLeftButton = <div>topLeft</div>;
    const topCenterButton = <div>topCenter</div>;
    const topRightButton = <div>topRight</div>;
    const bottomLeftButton = <div>bottomLeft</div>;
    const bottomCenterButton = <div>bottomCenter</div>;
    const bottomRightButton = <div>bottomRight</div>;
    return (
        <div className={'dropDownExample'}>
            <h4>{t('position-dropdown')}</h4>
            <div className={'wrapper'}>
                <Dropdown button={topLeftButton} trigger="click"
                          position="topLeft"
                          visible={topLeftVisible}
                          onClick={() => setTopLeftVisible(!topLeftVisible)}>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setTopLeftVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
            <div className={'wrapper'}>
                <Dropdown button={topCenterButton} trigger="click"
                          position="topCenter"
                          visible={topCenterVisible}
                          onClick={() => setTopCenterVisible(!topCenterVisible)}>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setTopCenterVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
            <div className={'wrapper'}>
                <Dropdown button={topRightButton} trigger="click"
                          position="topRight"
                          visible={topRightVisible}
                          onClick={() => setTopRightVisible(!topRightVisible)}>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setTopRightVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
            <div className={'wrapper'}>
                <Dropdown button={bottomLeftButton} trigger="click"
                          position="bottomLeft"
                          visible={bottomLeftVisible}
                          onClick={() => setBottomLeftVisible(!bottomLeftVisible)}>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setBottomLeftVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
            <div className={'wrapper'}>
                <Dropdown button={bottomCenterButton} trigger="click"
                          position="bottomCenter"
                          visible={bottomCenterVisible}
                          onClick={() => setBottomCenterVisible(!bottomCenterVisible)}>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setBottomCenterVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
            <div className={'wrapper'}>
                <Dropdown button={bottomRightButton} trigger="click"
                          position="bottomRight"
                          visible={bottomRightVisible}
                          onClick={() => setBottomRightVisible(!bottomRightVisible)}>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setBottomRightVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
        </div>
    );
};

export default PositionDropdownExample;
