import React, { Component } from 'react';

import {
  Link,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>WUSSUP welcome to Shitcoins:</h1>
        <Link to="/money">MoneyMoneyMoneyMoney</Link>
      </div>
    );
  }
}

export default App;

