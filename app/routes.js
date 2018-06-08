import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from 'app/containers/Homepage';
import Wallet from 'app/containers/Wallet';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/wallet" component={Wallet} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
