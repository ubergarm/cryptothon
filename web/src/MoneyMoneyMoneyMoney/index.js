import React, { Component } from 'react';
// import Web3 from 'web3';

import {
  getWeb3,
  Contract,
} from "../utils/contract";

const web3 = getWeb3();

const json = require("../contracts/Money.json");
const contract = Contract(json.abi)

console.log('boom', contract);
// list out all the accounts

const contractId = "0x751236c2a1a9bbc56c5024dd6087430490f4b540";

class Money extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      accounts: [],
      values: {},
      balance: null,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setBalance = this.setBalance.bind(this);
    this.pay = this.pay.bind(this);
  }
  setBalance() {
    console.log(contract.at(contractId).get());
    this.setState({
      balance: contract.at(contractId).get().plus(21).toString(10),
    });
    setTimeout(() => {
      this.setBalance();
    }, 1000);
  }
  pay(amount) {
    contract.at(contractId).put(`${this.state.values.amount}`, { from: web3.personal.listAccounts[0], gas: 400000 });
  }

  login() {
    try {
      web3.personal.unlockAccount(web3.personal.listAccounts[0], this.state.values.password, 1000);
      this.setState({
        loggedIn: true,
      });
      this.setBalance();
    } catch(err) {
      console.log('err', err);
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      values: {
        [e.target.name]: e.target.value,
      },
    });
  }

  componentDidMount() {
    web3.eth.getAccounts((error, accounts) => {
      this.setState({
        accounts,
      });

      web3.eth.defaultAccount = accounts[0];
      console.log(contract.at(contractId).get());
    });
  }
  render() {
    return (
      <div className="Money">
        ShitCoin
        <br />
        Accounts: {this.state.accounts.join(", ")}
        {this.state.loggedIn ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            this.pay();
          }}>
            <p>The balance: {this.state.balance}</p>
            <label>Amount to Pay:</label>
            <input onChange={this.handleChange} name="amount" />
            <input type="submit" />
          </form>
        ): (
          <form onSubmit={(e) => {
            e.preventDefault();
            this.login();
          }}>
            <label>Password:</label>
            <input onChange={this.handleChange} type="password" name="password" />
            <input type="submit" />
          </form>
        )}
      </div>
    );
  }
}
export default Money;
