import React, { Component } from 'react';
import { Col, Row } from 'antd';
import './supporter.css';

class Supporter extends Component {
    render() {
        return(
            <Row className="wrapper-white">
            <div className="heading-supporter">
            <h3><a id="acknowledgements">Acknowledgements</a></h3>
            </div>
            <Col xxl={0} xl={0} lg={0} md={0} sm={8} xs={8}>
            <img alt="EnergyLab" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/energylab_logo.png" width="100%" />
            </Col>
            <Col xxl={0} xl={0} lg={0} md={0} sm={8} xs={8}>
            <img alt="CEFC" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/CEFC_logo.png" width="80%" />
            </Col>
            <Col xxl={0} xl={0} lg={0} md={0} sm={8} xs={8}>
            <img alt="Artesian" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/artesian_logo.jpeg" width="100%" />
            </Col>
            <Col xxl={8} xl={8} lg={8} md={8} sm={0} xs={0}>
            <img alt="EnergyLab" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/energylab_logo.png" width="70%" />
            </Col>
            <Col xxl={8} xl={8} lg={8} md={8} sm={0} xs={0}>
            <img alt="CEFC" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/CEFC_logo.png" width="50%" />
            </Col>
            <Col xxl={8} xl={8} lg={8} md={8} sm={0} xs={0}>
            <img alt="Artesian" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/artesian_logo.jpeg" width="70%" />
            </Col>
            </Row>
        )
    }
}

export default Supporter;