cryptothon
===
Cryptocurrency hack-a-thon-o-rama weekend project.

## Overview
Make an Ethereum `Dapp` written in `Solidity`.

## Quickstart
#### Install Dependencies
Assumes docker is installed already.
```bash
# build the Docker image
docker build -t dapp .
# manually run dapp command test
docker run --rm -it -v "$PWD":/src dapp dapp test
```

#### Developing
```bash
# TODO
make        # build src
make clean  # clean out/*
make test   # test
make deploy # deploy
```

## References
* [dapphub/dapp](https://github.com/dapphub/dapp)
* [ethereum/solidity](https://github.com/ethereum/solidity)
* [list of decentralized apps](https://www.stateofthedapps.com/)

