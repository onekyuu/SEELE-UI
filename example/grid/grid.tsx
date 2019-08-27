import React from 'react';
import {Row, Col} from '../../lib/grid/grid';
import './grid.scss';

const GridExample = () => {
    return (
        <div>
            <div className={'row-container noGutter'}>
                <div className={'title'}>无间隙</div>
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
            <div className={'row-container'}>
                <div className={'title'}>有间隙</div>
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
            <div className={'row-container align'}>
                <div className={'title'}>Flex水平布局</div>
                <div className={'sub-title'}>flex align right</div>
                <Row align={'right'} className={'row noGutter'}>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                </Row>
                <div className={'sub-title'}>flex align center</div>
                <Row align={'center'} className={'row noGutter'}>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                </Row>
                <div className={'sub-title'}>flex align spaceAround</div>
                <Row align={'spaceAround'} className={'row'}>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                </Row>
                <div className={'sub-title'}>flex align spaceBetween</div>
                <Row align={'spaceBetween'} className={'row'}>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                    <Col className={'item'} xs={8} sm={6} md={4} lg={3} xl={3}>Col</Col>
                </Row>
            </div>
            <div className={'row-container'}>
                <div className={'title'}>Flex垂直布局</div>
                <div className={'sub-title'}>flex vertical top</div>
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
                <div className={'sub-title'}>flex vertical middle</div>
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
                <div className={'sub-title'}>flex vertical bottom</div>
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
            <div className={'row-container noGutter'}>
                <div className={'title'}>左右偏移</div>
                <div>
                    <div className={'sub-title'}>左侧偏移</div>
                    <Row>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} offset={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} offset={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    </Row>
                </div>
                <div>
                    <div className={'sub-title'}>右侧偏移</div>
                    <Row align={'right'}>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} offset={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} offset={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                        <Col className={'item'} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>Col</Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default GridExample;
