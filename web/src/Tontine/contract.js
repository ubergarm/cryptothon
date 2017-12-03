import {
  login as _login,
  Contract,
  getAccount,
} from "../utils/contract";

const json = require("../contracts/Money.json");

const contract = Contract(json.abi);

const contractId = "0x3f2d0cf249ec3cb5743f19ce8761a429e9194aaf";
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
