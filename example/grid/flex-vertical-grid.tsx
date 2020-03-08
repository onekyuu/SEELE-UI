import React from 'react';
import {Row, Col} from '../../lib/grid/grid';
import './grid.scss';
import { useTranslation } from 'react-i18next';

const FlexVerticalGridExample = () => {
    const { t } = useTranslation();
    return (
        <div className={'gridExample'}>
            <h4>{t('grid_flex_vertical')}</h4>
            <div className={'row-container'}>
                <div className={'sub-title'}>{t('flex_vertical_top')}</div>
                <div className={'vertical-container'}>
                    <Row gutter={30} className={'vertical'}>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    </Row>
                </div>
                <div className={'sub-title'}>{t('flex_vertical_middle')}</div>
                <div className={'vertical-container'}>
                    <Row gutter={30} vertical={'middle'} className={'vertical'}>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    </Row>
                </div>
                <div className={'sub-title'}>{t('flex_vertical_bottom')}</div>
                <div className={'vertical-container'}>
                    <Row gutter={30} vertical={'bottom'} className={'vertical'}>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                        <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default FlexVerticalGridExample;
