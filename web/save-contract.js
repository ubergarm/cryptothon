const Artifactor = require('truffle-artifactor');
const path = require('path');
const solc = require('solc');
const fs = require('fs');
const requireNoCache = require('require-nocache')(module);

// Compile first
const result = solc.compile(fs.readFileSync('../contracts/Money.sol', { encoding: 'utf8' }), 1);

// Clean up after solidity. Only remove solidity's listener,
// which happens to be the first.
process.removeListener('uncaughtException', process.listeners('uncaughtException')[0]);

const compiled = result.contracts[':Money']; // not sure why this is getting prepended with :
const abi = JSON.parse(compiled.interface);
const binary = compiled.bytecode;

// Setup
const dirPath = path.resolve('./src');
const expected_filepath = path.join(dirPath, 'Money.json');

const artifactor = new Artifactor(dirPath);

artifactor.save({
  contract_name: 'Money',
  abi,
  binary,
  network_id: 3, // Ropsten
})
  .then(function(result) {
    const json = requireNoCache(expected_filepath);
  })
  .catch((error) => {
    console.log('catch error:',error);
  });
