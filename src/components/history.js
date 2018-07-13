import React, { Component } from 'react';
import './history.css';
import { Timeline, Row, Col } from 'antd';



class History extends Component {
  state = {
    reverse: true,
  }
    render() {
        return(
          <div className="wrapper-grey-history" >
          <Row>
          <Col lg={24} sm={24} xs={24}>
          <div className="heading">
          <h3><a id="history">History</a></h3>
          </div>
          </Col>
          <Col className="history-wrapper" lg={24} sm={24} xs={0}>
          <Timeline pending="Disrupting the status quo..." reverse={this.state.reverse}>
            <Timeline.Item>Secured Intelectual Property</Timeline.Item>
            <Timeline.Item>Won Wattwatchers Hackathon</Timeline.Item>
            <Timeline.Item>Incorporated as an Australian company</Timeline.Item>
            <Timeline.Item>Commenced EnergyLab Accelorator</Timeline.Item>
            <Timeline.Item>Raised Pre-seed investment</Timeline.Item>
          </Timeline>
          </Col>
          <Col className="history-wrapper-small" lg={0} sm={0} xs={24}>
          <Timeline pending="Continuing to grow..." reverse={this.state.reverse}>
            <Timeline.Item >Won Wattwatchers Hackathon</Timeline.Item>
            <Timeline.Item>Incorporated as an Australian company</Timeline.Item>
            <Timeline.Item>Commenced EnergyLab Accelorator</Timeline.Item>
            <Timeline.Item>Raised Pre-seed investment</Timeline.Item>
          </Timeline>
          </Col>
          </Row>
          </div>
        )
    }
}

export default History;