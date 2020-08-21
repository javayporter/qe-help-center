import React from 'react';
import { Route, Switch} from 'react-router-dom';

import LandingPage from './LandingPage';
import Tools from './Tools';
import Automation from './Automation';
import Resources from './Resources';
import Procedures from './Procedures';
import Helpful from './Helpful';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/tools" component={Tools}/>
        <Route path="/automation" component={Automation}/>
        <Route path="/resources" component={Resources}/>
        <Route path="/procedures" component={Procedures}/>
        <Route path="/helpful" component={Helpful}/>
    </Switch>
)

export default Main;

