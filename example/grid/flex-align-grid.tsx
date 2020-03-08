import React from 'react';
import {Row, Col} from '../../lib/grid/grid';
import './grid.scss';
import { useTranslation } from 'react-i18next';

const FlexAlignGridExample = () => {
    const { t } = useTranslation();
    return (
        <div className={'gridExample'}>
            <h4>{t('grid_flex_align')}</h4>
            <div className={'row-container align'}>
                <div className={'sub-title'}>{t('flex_align_right')}</div>
                <Row align={'right'} className={'row noGutter'}>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                </Row>
                <div className={'sub-title'}>{t('flex_align_center')}</div>
                <Row align={'center'} className={'row noGutter'}>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                </Row>
                <div className={'sub-title'}>{t('flex_align_spaceAround')}</div>
                <Row align={'spaceAround'} className={'row'}>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                </Row>
                <div className={'sub-title'}>{t('flex_align_spaceBetween')}</div>
                <Row align={'spaceBetween'} className={'row'}>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                </Row>
            </div>
        </div>
    )
}

export default FlexAlignGridExample;
