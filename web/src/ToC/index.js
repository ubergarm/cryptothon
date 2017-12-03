import React, { Component } from 'react';

import {
  Link,
} from 'react-router-dom';

class ToC extends Component {
  render() {
    return (
      <div>
        <h1>WUSSUP welcome to Shitcoins:</h1>
        <ul>
          <li><Link to="/money">MoneyMoneyMoneyMoney</Link></li>
          <li><Link to="/tontine">Tontine</Link></li>
        </ul>
      </div>
    );
  }
}

export default ToC;

