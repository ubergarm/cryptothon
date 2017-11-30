cryptothon
===
Cryptocurrency hack-a-thon-o-rama weekend project.

## Overview
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

## References
* [dapphub/dapp](https://github.com/dapphub/dapp)
* [ethereum/solidity](https://github.com/ethereum/solidity)
* [list of decentralized apps](https://www.stateofthedapps.com/)

