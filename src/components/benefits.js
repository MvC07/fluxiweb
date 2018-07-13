import React, { Component } from 'react';
import { Tag, Row, Col } from 'antd';
import './benefits.css';

class Benefits extends Component {
    render() {
        return(
            <div className="wrapper-grey">
            <div className="heading">
            <h3><a id="benefits">Benefits</a></h3>
            </div>
            <Row type="flex" justify="center">
            <Col className="text-left" xxl={8} xl={8} lg={8} md={8} sm={6.5} xs={6.5}>
            <h4><Tag color="magenta">Transparent</Tag></h4>
            <h4><Tag color="red">Easy</Tag></h4>
            <h4><Tag color="orange">Automatic</Tag></h4>
            <h4><Tag color="gold">Control</Tag></h4>
            <h4><Tag color="green">Real-Time</Tag></h4>
            <h4><Tag color="blue">Fun</Tag></h4>
            <h4><Tag color="purple">Enhance</Tag></h4>
            </Col>
            <Col className="text-right" xxl={11} xl={11} lg={13} md={13} sm={17.5} xs={17.5}>
            <h4> - See how much you are using and cost</h4>
            <h4> - Quick to setup and easy to use</h4>
            <h4> - AI that saves you time and money</h4>
            <h4> - You have the power to pause anytime</h4>
            <h4> - The right information at right time</h4>
            <h4> - Engaging and insighful for everyone</h4>
            <h4> - Improve tech at home and enjoy life more</h4>
            </Col>
            </Row>
            </div>
        )
    }
}

export default Benefits;