import React, { Component } from 'react';
import { Icon, Row, Col} from 'antd';
import './bottombar.css';
import { HashLink as Link } from 'react-router-hash-link';

class Bottombar extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="upperfooter">
          <Row>
            <Col lg={8} sm={8} xs={24}>
              <div>
                <h3><a href="/About"><font color="white">About</font></a></h3>
                <div>
                <h4><Link to="/About#mission">Mission</Link></h4>
                </div>
                <div>
                <h4><Link to="/About#team">Team <font color="red"><Icon type="heart" /></font></Link></h4>
                </div>
                <div>
                <h4><Link to="/About#history">History</Link></h4>
                </div>
                <div>
                <h4><Link to="/About#jobs">Jobs</Link></h4>
                </div>
                <div>
                <h4><Link to="/About#contact">Contact</Link></h4>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={8} xs={24}>
              <div>
              <h3><font color="white">Product</font></h3>
                <div>
                <h4><Link to={''}>Description</Link></h4>
                </div>
                <div>
                <h4><Link to={''}>Benefits</Link></h4>
                </div>
                <div>
                <h4><Link to={''}>Usecases</Link></h4>
                </div>
                <div>
                <h4><Link to={''}>Pricing</Link></h4>
                </div>
                <div>
                <h4><Link to={''}>Finance&Plans</Link></h4>
                </div>
                <div>
                <h4><Link to={''}>FAQ</Link></h4>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={8} xs={24}>
              <div>
              <h3><font color="white">Community</font></h3>
                <div>
                <h4><Link to={''}>Blog</Link></h4>
                </div>
                <div>
                <h4><Link to={''}>News</Link></h4>
                </div>
                <div>
                <h4><Link to={''}>Forum</Link></h4>
                </div>
                <div>
                <h4><Link to={''}>Trello Board</Link></h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Row>
        
          <Col className="copyright" lg={24} sm={96}>
          <div>
          <a className="iconpadding" href="https://twitter.com/fluxpowerIO" target="_blank" rel="noopener noreferrer">      
          <Icon type="twitter" />
          </a>
          <a className="iconpadding"href="https://www.linkedin.com/company/fluxpower-io/" target="_blank" rel="noopener noreferrer">      
          <Icon className="iconpadding" type="linkedin" />
          </a>
          </div>
          <h4><font color="white">Copyright 2018 © Fluxpower Pty Ltd ABN: 48625419249</font></h4>
          <h4><Link to={''}>Legal Agreements</Link></h4>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Bottombar;