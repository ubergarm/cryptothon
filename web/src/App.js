import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Money from "./MoneyMoneyMoneyMoney";
import ToC from "./ToC";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/money" component={Money}/>
          <Route path="*" component={ToC}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
