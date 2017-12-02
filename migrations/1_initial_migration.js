var Migrations = artifacts.require("./Migrations.sol");
var Money = artifacts.require("./Money.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Money);
};
