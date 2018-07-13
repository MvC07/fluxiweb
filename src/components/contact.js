import React, { Component } from 'react';
import { Icon } from 'antd';
import './contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="wrapper-white">
            <div className="heading">
            <h3><a id="contact">Contact</a></h3>
            </div>
            <div className="content-not-italic">
            <h4><font color="grey">Email: contact@fluxpower.io</font></h4>
            <h4><font color="grey">Address: Level 25, 71 Eagle St, Brisbane QLD 4000</font></h4>
            <div>
            <a className="contact-icons" href="https://twitter.com/fluxpowerIO" target="_blank" rel="noopener noreferrer">      
            <Icon className="contact-icons" type="twitter" />
            </a>
            <a className="contact-icons" href="https://www.linkedin.com/company/fluxpower-io/" target="_blank" rel="noopener noreferrer">      
            <Icon className="contact-icons" type="linkedin" />
            </a>
            </div>
            </div>
            </div>
        )
    }
}

export default Contact;