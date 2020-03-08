import React from 'react';
import {Row, Col} from '../../lib/grid/grid';
import './grid.scss';
import { useTranslation } from 'react-i18next';

const OffsetGridExample = () => {
    const { t } = useTranslation();
    return (
        <div className={'gridExample'}>
            <h4>{t('grid_offset')}</h4>
            <div className={'row-container noGutter'}>
                <div>
                    <div className={'sub-title'}>{t('offset_left')}</div>
                    <Row>
                        <Col className={'item offset'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} offset={2}>Offset</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                        <Col className={'item offset'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} offset={2}>Offset</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    </Row>
                </div>
                <div>
                    <div className={'sub-title'}>{t('offset_right')}</div>
                    <Row align={'right'}>
                        <Col className={'item offset'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} offset={2}>Offset</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                        <Col className={'item offset'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} offset={2}>Offset</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default OffsetGridExample;
