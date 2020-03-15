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

const DropdownDemo = () => {
    const {t} = useTranslation();
    const data = [
        {
            property: 'visible',
            description: t('dropdown_visible'),
            type: 'boolean',
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
