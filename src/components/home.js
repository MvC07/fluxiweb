import React, { Component } from 'react';

import Banner from './banner';
import Supporter from './supporter';
import Description from './description';
import Benefits from './benefits';

class Home extends Component {
  render() {
      return(
          <div>
           <Banner/>
           <Description/>
           <Benefits/>
           <Supporter/>
          </div>
      )
  }
}

export default Home;