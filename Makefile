all    :; docker run --rm -it -v "$$PWD":/src truffle compile
clean  :; docker run --rm -it -v "$$PWD":/src truffle
test   :; docker run --rm -it -v "$$PWD":/src truffle test
deploy :; docker run --rm -it -v "$$PWD":/src truffle
