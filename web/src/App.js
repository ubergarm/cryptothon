import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
const Contract = require("truffle-contract");

const getWeb3 = () => {
  // if (typeof web3 !== 'undefined') {
  //   return new Web3(window.web3.currentProvider);
  // } else {
    // set the provider you want from Web3.providers
    return new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
  // }
}

const provider = getWeb3();

// const source = ' pragma solidity ^0.4.17; contract Money { uint private myFuckingMoney; function Money(uint initialFuckingMoney) public { myFuckingMoney = initialFuckingMoney; } function put (uint amountOfFuckingMoney) public { myFuckingMoney = myFuckingMoney + amountOfFuckingMoney; } function get () public constant returns (uint) { return myFuckingMoney; } } ';

const contract = Contract(

{
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
});
contract.setProvider(provider);// console.log(solc.compile(tokenSource));

const contract_address = "0x345ca3e014aaf5dca488057592ee47305d9b3e10";
contract.at(contract_address).then(instance => {
  console.log(instance);
});

// web3.eth.getBlock(1, function(error, result){
//   if(!error) {
//     console.log('result', result)
//   } else {
//     console.error('error', error);
//   }
// })

class App extends Component {
  render() {
    return (
      <div className="App">
        Shit
      </div>
    );
  }
}

export default App;
