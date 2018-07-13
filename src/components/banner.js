import React, { Component } from 'react';
import { Col, Row, Button, Icon } from 'antd';
import './banner.css';

class Banner extends Component {
    render() {
        return(
            <Row className="banner-padding" type="flex" justify="center" align="middle">
            <Col xxl={0} xl={0} lg={0} md={0} sm={24} xs={24}>
            <img width="100%" alt="logo" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/home+banner.png" />
            </Col>
            <Col className="header-banner" xxl={8} xl={10} lg={10} md={12} sm={0} xs={0}>
            <div className="heading-banner">
            <h1> Welcome to Fluxpower!</h1>
            </div>
            <div>
            <h4 className="content-banner">The best way to pay and be paid for electricity.</h4>
            </div>
            <div>
            <h4 className="content-banner">We connect your smart meter to a smart contract, and money flows perfectly in sync with electricity.</h4>
            </div>
            <div>
            <Button className="button1-banner-big" type="normal" size="large" target="_blank" rel="noopener noreferrer"><Icon type="message" />Use Concierge</Button>
            <Button className="button2-banner-big" type="primary" size="large" target="_blank" rel="noopener noreferrer"><Icon type="edit" />Create Account</Button>
            </div> 
            </Col>
            <Col className="header-banner-small" xxl={0} xl={0} lg={0} md={0} sm={24} xs={24}>
            <div className="heading-banner">
            <h1> Welcome to Fluxpower!</h1>
            </div>
            <div>
            <h4>The best way to pay and be paid for electricity.</h4>
            </div>
            <div className="content-banner">
            <h4>We connect your smart meter to a smart contract, and money flows perfectly in sync with electricity.</h4>
            </div>
            <div>
            <Button className="button1-banner" type="normal" size="large" target="_blank" rel="noopener noreferrer"><Icon type="message" />Use Concierge</Button>
            <Button className="button2-banner" type="primary" size="large" target="_blank" rel="noopener noreferrer"><Icon type="edit" />Create Account</Button>
            </div> 
            </Col>
            <Col xxl={16} xl={14} lg={14} md={12} sm={0} xs={0}>
            <img width="100%" alt="logo" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/home+banner.png" />
            </Col>
            </Row>
        )
    }
}

export default Banner;