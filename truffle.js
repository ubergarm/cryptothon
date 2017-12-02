module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: "./build",
    networks: {
        development: {
            host: "localhost",
            port: 9545,
            network_id: "*",
        },
        ropsten: {
            network_id: 3,
            host: "localhost",
            port: 8545,
            gas: 2900000
        }   
    },
    rpc: {
        host: "localhost",
        port: 8080
    }
    
};

