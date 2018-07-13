import React, { Component } from 'react';
import './team.css';
import { Card, Icon, Row, Col } from 'antd';


const { Meta } = Card;

class Team extends Component {
    render() {
        return(
            <div className="wrapper-grey">
            <div className="heading">
            <h3><a id="team">Team</a></h3>
            </div>
            <Row type="flex" justify="center">
            <Col lg={12} sm={12} xs={24}>
            <Card className="profile-cards"
              style={{ width: 300 }}
              cover={<img alt="example" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/received_10155149769127653.jpeg" />}
              actions={[<a href="https://twitter.com/supermanfred" target="_blank" rel="noopener noreferrer"><Icon type="twitter" /></a>, <a href="https://www.linkedin.com/in/manfredneustifter/" target="_blank" rel="noopener noreferrer"><Icon type="linkedin" /></a>]}
            >
              <Meta
                title="Manfred Neustifter"
                description="I'm CEO and Founder, and the inventor of Continuous Flow Payments. I spend most of my time thinking about the future, UX design and Product management. My aim is to make solutions that are awesome for our customers, available as soon as possible. So the most important thing I do is supporting our team, empowing them with our vision and values. I also love working on strategic partnerships, and listening to customers - tell us how to improve."
              />
            </Card>
            </Col>
            <Col lg={12} sm={12} xs={24}>
            <Card className="profile-cards"
              style={{ width: 300 }}
              cover={<img alt="example" src="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/bitmoji-20180703123443.png" />}
              actions={[<a href="https://twitter.com/Mona_MvC07" target="_blank" rel="noopener noreferrer"><Icon type="twitter" /></a>, <a href="https://www.linkedin.com/in/mvc07/" target="_blank" rel="noopener noreferrer"><Icon type="linkedin" /></a>]}
            >
              <Meta
                title="Mona von Contzen"
                description="I believe in a life full of mutual respect, joy and motivation, proactivity, creativity and innovation. I believe in people and their power to achieve something wonderful. This is why I joined Fluxpower as a Community Manager. As a main contact person on our journey to achieve something extraordinarily innovativ and competitive, concerning both: private individuals and businesses, please never hesitate to contact me. I am happy to get to know you soon!"
              />
            </Card>
            </Col>
            </Row>
            </div>
        )
    }
}

export default Team;