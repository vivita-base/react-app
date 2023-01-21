
import React from 'react';
import './css/styles/app.scss';
import './css/styles/common.scss';

import { Router, Route, Switch, } from 'react-router-dom';
import history from './store/history';

import packageJson from '../package.json';
import {Environment,} from './config/env';

import NormRoute from './components/common/routes/norm-route';
import ScrollToTop from './components/common/routes/scroll-to-top';

import Home from './components/views/home/home';
import NotFound from './components/views/not-found/not-found';
import Test from './components/views/test/test';

console.log("App Version: ",packageJson.version);
console.log("React Version: ",React.version);
console.log("Environment: ",Environment);

const App = () => {

  const subDirectory = "/";

  return (
    <Router basename={subDirectory} history={history}>
      <ScrollToTop />
      <div className={"app"}>
        <div id="content-container">
          <div id="content">
            <Switch>
              <NormRoute exact path="/" component={(props) => <Home history={props.history} />} />  
              <NormRoute path="/test" component={Test} />
              <Route component={NotFound} />  
            </Switch>
          </div>
        </div>

      </div>
    </Router> 
  );
}

export default App;
