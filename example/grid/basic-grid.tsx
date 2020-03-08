import React from 'react';
import {Row, Col} from '../../lib/grid/grid';
import './grid.scss';
import { useTranslation } from 'react-i18next';

const BasicGridExample = () => {
    const { t } = useTranslation();
    return (
        <div className={'gridExample'}>
            <h4>{t('grid_basic')}</h4>
            <div className={'row-container noGutter'}>
                <Row>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                </Row>
                <Row>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                </Row>
            </div>
        </div>
    )
}

export default BasicGridExample;
