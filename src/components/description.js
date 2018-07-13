import React, { Component } from 'react';
import './description.css';
import { Row, Col } from 'antd';

class Description extends Component {
    render() {
        return(
          <Row className="wrapper-white-description">
          <div className="heading">
          <h3><a id="description">What is Fluxpower?</a></h3>
          </div>
          <div className="content-description">
          <h4>Fluxpower is a new electricity payments network.</h4>
          </div>
          <img width="100%" alt="logo" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/grid_nobackground.png" />
          <Col className="description-box" lg={24} sm={24} xs={24}>
          <h4>We provide accounts to Consumers, Retailers, and Generators:</h4>
          <img className="image-oldlady" width="320px" alt="logo" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/oldlady_etc.png" />
          </Col>
          <Col className="description-box" lg={24} sm={24} xs={24}>
          <h4>Fluxpower connects your <b>smart meter</b> to a <b>smart contract</b>:</h4>
          <img width="320px" alt="logo" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/sm%26sc.png" />
          </Col>
          <Col className="description-box" lg={24} sm={24} xs={24}>
          <h4>Fluxpower <b>synchronises</b> payment to electricity consumption:</h4>
          <img width="320px" alt="logo" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/money%26bulb.png" />
          </Col>
        </Row>
        )
    }
}

export default Description;