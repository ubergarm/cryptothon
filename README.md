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
git submodule init
git submodule update
# build the Docker image
docker build -t dapp .
# manually run dapp command build
docker run --rm -it -v "$PWD":/src dapp dapp build
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
Test server network
```bash
# TODO
```

Client:
```bash
# 8545 TCP, used by the HTTP based JSON RPC API
# 8546 TCP, used by the WebSocket based JSON RPC API
# 30303 TCP and UDP, used by the P2P protocol running the network
# 30304 UDP, used by the P2P protocol's new peer discovery overlay
docker run --rm -it \
           -p 0.0.0.0:8545:8545 \
           -p 0.0.0.0:8546:8546 \
           -p 0.0.0.0:30303:30303 \
           -p 0.0.0.0:30304:30304 \
           ethereum/client-go:stable
```

## References
* [dapphub/dapp](https://github.com/dapphub/dapp)
* [ethereum/solidity](https://github.com/ethereum/solidity)
* [list of decentralized apps](https://www.stateofthedapps.com/)

