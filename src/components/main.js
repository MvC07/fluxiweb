import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Team from './team';
import Banner from './banner';
import History from './history';
import Mission from './mission';
import Jobs from './jobs';
import Contact from './contact';
import Supporter from './supporter';
import Description from './description';
import Benefits from './benefits';
import LegalAgreements from './legalagreements';
import Terms from './terms';


import './main.css';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/banner" component={Banner} />
        <Route path="/history" component={History} />
        <Route path="/mission" component={Mission} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/contact" component={Contact} />
        <Route path="/supporter" component={Supporter} />
        <Route path="/description" component={Description} />
        <Route path="/benefits" component={Benefits} />
        <Route path="/legalagreements" component={LegalAgreements} />
        <Route path="/terms" component={Terms} />
       
    </Switch>
)

export default Main;