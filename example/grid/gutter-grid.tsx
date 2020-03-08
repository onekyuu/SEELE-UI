import React from 'react';
import {Row, Col} from '../../lib/grid/grid';
import './grid.scss';
import { useTranslation } from 'react-i18next';

const GutterGridExample = () => {
    const { t } = useTranslation();
    return (
        <div className={'gridExample'}>
            <h4>{t('grid_gutter')}</h4>
            <div className={'row-container'}>
                <div className={'title'}>{t('gutter')}</div>
                <Row gutter={20}>
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
    )
}

export default GutterGridExample;
