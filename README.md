cryptothon
===
Cryptocurrency hack-a-thon-o-rama weekend project.

## Goal
Make an Ethereum `Dapp` written in `Solidity`.

## Quickstart
```bash
# 1. install truffle cli
npm install -g truffle
# 2. start truffle develop ethereum client
truffle develop
# 3. in a new console: compile Dapp
truffle compile
# 4. deploy migration
truffle migrate --reset --network development
```

## Ethereum Clients
In addition to `truffle develop` there are other options for Ethereum Clients both development and real:

Ganache
```bash
# stand alone local test client
docker run --rm -it -p 8545:8545 trufflesuite/ganache-cli
```

Ethereum Testnet:
```bash
# This will persist your configuration in ~/.ethereum (might need to set permissions properly)
# https://github.com/ethereum/go-ethereum#full-node-on-the-ethereum-test-network
# Setup a new account
docker run --rm -it geth -v "$HOME":/root --testnet account new
# Connect a console
docker run --rm -it \
           -v "$HOME":/root \
           -p 8545:8545 \
           -p 8546:8546 \
           -p 30303:30303 \
           -p 30304:30304 \
           ethereum/client-go:stable \
           --testnet \
           --fast \
           --cache=512 \
           --rpc \
           --rpcapi eth,net,web3,personal \
           console
# <cntrl-d> to exit
# some commands:
> net.listening
> net.peerCount
> admin.peers
> admin.nodeInfo
> eth.accounts # list accounts
> eth # all eth commands
> web3 # all web3 commands
> personal # all personal commands
> personal.unlockAccount(eth.accounts[0]) # unlock 1st account
> web3.personal.unlockAccount(web3.personal.listAccounts[0]) # unlock web3 account
```

Ethereum Real Network:
```bash
# just remove --testnet from previous command
```

## References
* [truffleframework](http://truffleframework.com/docs/getting_started/installation)
* [trufflesuite/ganache-cli](https://github.com/trufflesuite/ganache-cli)
* [ethereum/solidity](https://github.com/ethereum/solidity)
* [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum)
* [list of decentralized apps](https://www.stateofthedapps.com/)
