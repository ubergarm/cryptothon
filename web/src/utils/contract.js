import Web3 from 'web3';

export const getWeb3 = () => {
  if (typeof web3 !== 'undefined') {
    console.warn("Using injected web3 detected from external source like Metamask")
    // Use Mist/MetaMask's injected provider
    return new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545 which is inherently insecure.");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    // infura.io offers a secure public RPC with authentication???
    return new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
}

const web3 = getWeb3();

export const Contract = web3.eth.contract;

export const login = (password, timeout = 60*60) => new Promise((resolve, reject) => {
  const account = web3.personal.listAccounts[0];
  try {
    web3.personal.unlockAccount(account, password, timeout);
    resolve(account);
  } catch(err) {
    reject(err);
  }
});

export const getAccount = () => new Promise((resolve, reject) => {
  web3.eth.getAccounts((error, accounts) => {
    if (error) {
      reject(error);
    }

    resolve(accounts[0]);
  });
});
