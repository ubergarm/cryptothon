import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
// const Contract = require("truffle-contract");

const getWeb3 = () => {
  // if (typeof web3 !== 'undefined') {
  //   return new Web3(window.web3.currentProvider);
  // } else {
    // set the provider you want from Web3.providers
    return new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // something like these next ones to connect this to Geth
    // return new Web3(new Web3.providers.HttpProvider("127.0.0.1:8080"));
    // return new Web3(new Web3.providers.HttpProvider("127.0.0.1:8545"));
  // }
}

const web3 = getWeb3();

const contract = web3.eth.contract({
  "contractName": "Money",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "amountOfFuckingMoney",
          "type": "uint256"
        }
      ],
      "name": "put",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initialFuckingMoney",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6040516020806100f683398101604052808051600055505060c1806100356000396000f30060606040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633f81a2c08114604d5780636d4ce63c146062575b600080fd5b3415605757600080fd5b60606004356084565b005b3415606c57600080fd5b6072608f565b60405190815260200160405180910390f35b600080549091019055565b600054905600a165627a7a72305820c76aa416ad9c33fc4b563bce9e4c16878b11c1163c2bb2e5a924efac21de45c40029",
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2017-12-02T20:25:53.210Z"
}.abi);

console.log('boom');
// list out all the accounts

const contractId = "0x751236c2a1a9bbc56c5024dd6087430490f4b540";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      values: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    console.log('values', this.state.values);
    try {
      web3.personal.unlockAccount(web3.personal.listAccounts[0], this.state.values.password, 1000);

      console.log('try and put money:');
      contract.at(contractId).put("1", { from: web3.personal.listAccounts[0], gas: 400000 });

      console.log(contract.at(contractId).get());
    } catch(err) {
      console.log('err', err);
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      values: {
        ["password"]: e.target.value,
      },
    });
  }
  componentDidMount() {
    web3.eth.getAccounts((error, accounts) => {

      console.log(web3.eth.accounts);
      this.setState({
        accounts: web3.eth.accounts,
      });

      // web3.eth.defaultAccount = accounts[0];

      // this works
      console.log(contract.at(contractId).get());

      // this does not
      // https://ethereum.stackexchange.com/questions/2086/cannot-perform-write-functions-in-smart-contract-invalid-address
      // contract.at(contractId).put("1", { from: accounts[0], gas: 400000 });

      // console.log(contract.at(contractId).get());

    });
  }
  render() {
    return (
      <div className="App">
        ShitCoin
        <div>
          Accounts: {this.state.accounts.join(", ")}
          <br />

          <form onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit();
          }}>
            <label>Password:</label>
            <input onChange={this.handleChange} type="password" name="password" />
            <input type="submit" />
          </form>
          
        </div>
      </div>
    );
  }
}

export default App;
