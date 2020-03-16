import React from 'react';
import Demo, {DemoFooter} from '../demo';
import DropdownExample from './dropdown';
import {useTranslation} from "react-i18next";
import Table from "../../lib/table/table";
import {getAPIColumns} from "../utils";
import ClickDropdownExample from "./click-dropdown";
import PositionDropdownExample from "./position-dropdown";
import SizeDropdownExample from "./size-dropdown";
import ClickOutSideDropdownExample from "./clickOutSide-dropdown";
import EventDropdownExample from "./event-dropdown";

const DropdownDemo = () => {
    const {t} = useTranslation();
    const data = [
        {
            property: 'visible',
            description: t('dropdown_visible'),
            type: 'boolean',
            default: '-',
        },
        {
            property: 'button',
            description: t('dropdown_button'),
            type: 'ReactElement',
            default: '-',
        },
        {
            property: 'trigger',
            description: t('dropdown_trigger'),
            type: '\'click\' | \'hover\'',
            default: '\'hover\'',
        },
        {
            property: 'position',
            description: t('dropdown_position'),
            type: '\'topLeft\' | \'topCenter\' | \'topRight\' | \'bottomLeft\' | \'bottomCenter\' | \'bottomRight\'',
            default: '\'bottomLeft\'',
        },
        {
            property: 'onClick',
            description: t('dropdown_onClick'),
            type: '() => void',
            default: '-',
        },
        {
            property: 'onHoverShow',
            description: t('dropdown_onHoverShow'),
            type: '() => void',
            default: '-',
        },
        {
            property: 'onHoverHide',
            description: t('dropdown_onHoverHide'),
            type: '() => void',
            default: '-',
        },
        {
            property: 'onClickOutSide',
            description: t('dropdown_onClickOutSide'),
            type: '() => void',
            default: '-',
        },
        {
            property: 'size',
            description: t('dropdown_size'),
            type: '\'large\' | \'normal\' | \'small\'',
            default: '\'normal\'',
        },
        {
            property: 'className',
            description: t('dropdown_className'),
            type: 'string',
            default: '-',
        },
    ];
    return (
        <div className={'demo-container'}>
            <div className={'dropdown-container'}>
                <div className={'component-detail'}>
                    <h2 className={'component-name'}>{t('dropdown_component')}</h2>
                    <div
                        className={'component-description'}>{t('dropdown_description')}</div>
                </div>
                <h3 className={'title'}>{t('examples')}</h3>
                <Demo code={require('!!raw-loader!./dropdown.tsx').default}>
                    <DropdownExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./click-dropdown.tsx').default}>
                    <ClickDropdownExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./clickOutSide-dropdown.tsx').default}>
                    <ClickOutSideDropdownExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./position-dropdown.tsx').default}>
                    <PositionDropdownExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./size-dropdown.tsx').default}>
                    <SizeDropdownExample/>
                </Demo>
                <Demo code={require('!!raw-loader!./event-dropdown.tsx').default}>
                    <EventDropdownExample/>
                </Demo>
                <div className={'table-container'}>
                    <h3 className={'title'}>{t('api')}</h3>
                    <Table data={data} columns={getAPIColumns()}
                           autoHeight={true} width={1000}/>
                </div>
            </div>
            <DemoFooter/>
        </div>
    );
}

export default DropdownDemo;
