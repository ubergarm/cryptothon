var Money = artifacts.require("Money");

module.exports = function(deployer) {
  deployer.deploy(Money, 500);
};
