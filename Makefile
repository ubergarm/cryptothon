all    :; docker run --rm -it -v "$$PWD":/src dapp dapp build
clean  :; docker run --rm -it -v "$$PWD":/src dapp dapp clean
test   :; docker run --rm -it -v "$$PWD":/src dapp dapp test
deploy :; docker run --rm -it -v "$$PWD":/src dapp dapp create Src
