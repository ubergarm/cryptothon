import {
  login as _login,
  Contract,
  getAccount,
} from "../utils/contract";

const contract = Contract([
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
]);
const contractId = "0x751236c2a1a9bbc56c5024dd6087430490f4b540";
export const login = _login;

export const rollCall = (wallet) => getAccount().then(account => {
  return contract.at(contractId).rollCall(wallet);
}).catch(err => {
  console.error('fuck me', err);
  throw err;
});


export const invest = (wallet) => getAccount().then(account => {
  return contract.at(contractId).invest(wallet);
}).catch(err => {
  console.error('fuck me', err);
  throw err;
});

export const entryCapital = (wallet) => getAccount().then(account => {
  return contract.at(contractId).entryCapital();
}).catch(err => {
  console.error('fuck me', err);
  throw err;
});
