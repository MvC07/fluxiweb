import React, { Component } from 'react';
import { Menu, Icon, Col, Button } from 'antd';

import { HashLink as Link } from 'react-router-hash-link';

import './navbar.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

    render() {
        return(    
        
        <div className="navbar">
          <Col xxl={0} xl={0} lg={0} md={0} sm={5} xs={5}>
          </Col>
          <div className="verticalmenu">
          <Col xxl={0} xl={0} lg={0} md={0} sm={5} xs={5}>
          <Menu
            style={{ width: 50 }}
            mode="horizontal"
          >
            <SubMenu className="verticalmenu" title={<img src='https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/Hamburger_icon.png' height="12" alt="bar" />}>
              <Menu.Item><Link to={'/'}>Home</Link></Menu.Item>
              <Menu.Item><Link to={'./About'}>About</Link></Menu.Item>
              <Menu.Item><Link to={''}>Product</Link></Menu.Item>
              <Menu.Item><Link to={''}>Sign-Up</Link></Menu.Item>
              <Menu.Item><Link to={''}>Login</Link></Menu.Item>
            </SubMenu>
          </Menu>
          </Col>
          </div>

          <Col xxl={10} xl={10} lg={10} md={10} sm={0} xs={0}>
          <div className="logo">
          <Link to={'/'}>
            <img src='https://s3-ap-southeast-2.amazonaws.com/fluxpower/box.svg' height="58px" alt="logo" />
          </Link>
          </div>
          <div>
            <Link to={'/'}>
            <h3 className="name"> FLUXPOWER </h3>
            </Link>
          </div>
          </Col>

          <Col xxl={0} xl={0} lg={0} md={0} sm={12} xs={12}>
          <div className="logo1">
          <Link to={'/'}>
            <img src='https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/home+banner.png' height="45" alt="logo" />
          </Link>
          </div>
          <div>
            <Link to={'/'}>
            <h3 className="name1"> FLUXPOWER </h3>
            </Link>
          </div>
          </Col>

          <Col xxl={12} xl={12} lg={11} md={11} sm={0} xs={0}>
          <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className="navbar1"
          >

          <SubMenu title={<span><Link to={'./About'}><font color="black"><Icon type="heart-o" />About</font></Link></span>}>
            <MenuItemGroup>
              <Menu.Item key="setting:1"><Link to="/About#mission">Mission</Link></Menu.Item>
              <Menu.Item key="setting:2"><Link to="/About#team">Team</Link></Menu.Item>
              <Menu.Item key="setting:3"><Link to="/About#history">History</Link></Menu.Item>
              <Menu.Item key="setting:4"><Link to="/About#jobs">Jobs</Link></Menu.Item>
              <Menu.Item key="setting:5"><Link to="/About#contact">Contact</Link></Menu.Item>
            </MenuItemGroup>
          </SubMenu>

          <SubMenu title={<span><Link to={''}><font color="black"><Icon type="profile" />Solutions</font></Link></span>}>
            <MenuItemGroup>
              <Menu.Item key="setting:1">Description</Menu.Item>
              <Menu.Item key="setting:2">Benefits</Menu.Item>
              <Menu.Item key="setting:3">Use-Cases</Menu.Item>
              <Menu.Item key="setting:4">Pricing</Menu.Item>
              <Menu.Item key="setting:5">Finance&Plans</Menu.Item>
              <Menu.Item key="setting:6">FAQ</Menu.Item>
              <Menu.Item key="setting:7">Need Help?</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          </Menu>
          </Col>

          <Col xxl={2} xl={2} lg={3} md={3} sm={0} xs={0}>
          
          <div>
          <Button className="button1-navbar" type="primary" target="_blank" rel="noopener noreferrer"><Icon type="user" />Login</Button>
          </div> 
          
          </Col>

        </div>
        )
    }
}

export default Navbar;