cryptothon
===
Cryptocurrency hack-a-thon-o-rama weekend project.

## Goal
Make an Ethereum `Dapp` written in `Solidity`.

## Quickstart
#### Install Dependencies
Assumes docker is installed already.
```bash
# clone repo and update lib deps
# build the Docker image
docker build -t truffle .
# manually run truffle cli
docker run --rm -it -v "$PWD":/src truffle
# see Makefile for more
```

#### Developing
```bash
make        # build src
make clean  # clean out/*
make test   # test
make deploy # deploy
```

## Ethereum Network
Local Testing:
```bash
# stand alone local test client
docker run --rm -it -p 8545:8545 trufflesuite/ganache-cli
```

Testing:
```bash
# This will persist your configuration in ~/.ethereum (might need to set permissions properly)
# https://github.com/ethereum/go-ethereum#full-node-on-the-ethereum-test-network
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
           console
# <cntrl-d> to exit
# some commands:
> net.listening
> net.peerCount
> admin.peers
> admin.nodeInfo
```

Actual Ethereum Network:
```bash
# just remove --testnet from previous command
```

## References
* [trufflesuite/ganache-cli](https://github.com/trufflesuite/ganache-cli)
* [ethereum/solidity](https://github.com/ethereum/solidity)
* [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum)
* [list of decentralized apps](https://www.stateofthedapps.com/)
