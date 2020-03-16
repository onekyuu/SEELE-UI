import React, {useState} from 'react';
import Dropdown from "../../lib/dropdown/dropdown";
import './dropdown.scss';
import {useTranslation} from "react-i18next";

const EventDropdownExample: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const [eventVisible, setEventVisible] = useState(false);
    const clickButton = <div className={'dropdown-button'}>click me</div>;
    return (
        <div className={'dropDownExample'}>
            <h4>{t('event_dropdown')}</h4>
            <p>{t('event_dropdown_desc')}</p>
            <div className={'wrapper'}>
                <Dropdown button={clickButton} trigger="click"
                          position="bottomLeft"
                          visible={eventVisible}
                          onClick={() => setEventVisible(!eventVisible)}>
                    <ul className={'dropdown-content'}>
                        <li onClick={() => alert('item clicked')}>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setEventVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
        </div>
    );
};

export default EventDropdownExample;
