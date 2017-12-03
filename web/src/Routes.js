import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Money from "./MoneyMoneyMoneyMoney";
import ToC from "./ToC";
import Tontine from "./Tontine";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/tontine" component={Tontine}/>
          <Route path="/money" component={Money}/>
          <Route path="*" component={ToC}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;

