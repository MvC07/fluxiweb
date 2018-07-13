import React, { Component } from 'react';

import Mission from './mission';
import Team from './team';
import History from './history';
import Jobs from './jobs';
import Contact from './contact';

class About extends Component {
  render() {
      return(
          <div>
          <div>
           <Mission/>
          </div>
          <div>
           <Team/>
          </div>
          <div>
           <History/>
          </div>
          <div>
           <Jobs/>
          </div>
          <div>
           <Contact/>
          </div>
          </div>
      )
  }
}

export default About;