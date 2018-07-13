import React, { Component } from 'react';
import { Button } from 'antd';
import './jobs.css';

class Jobs extends Component {
    render() {
        return(
            <div className="wrapper-grey">
            <div className="heading">
            <h3><a id="jobs">Jobs</a></h3>
            </div>
            <div className="content-not-italic">
            <h4><font color="grey">As a growing Start-Up, we are constantly keeping an eye out for talent and exceptional skills.</font></h4>
            <h4><font color="grey">Have a look at our Job Descriptions (currently seeking: Intern Software Developer m/f, Brisbane City-based)</font></h4>
            <div className="text-wrapper-jobs">
            <Button href="https://s3-ap-southeast-2.amazonaws.com/fluxpower.io/Intern+Software+Developer+-+Job+Description.docx.pdf" target="_blank" rel="noopener noreferrer" type="primary">Show Jobs</Button>
            </div>
            <div className="text-wrapper-jobs">
            <h4><font color="grey">And submit your application now: <strong>contact@fluxpower.io</strong></font></h4>
            </div>
            </div>
            </div>
        )
    }
}

export default Jobs;