const Migrations = artifacts.require("Migrations");
const ZkSensors = artifacts.require("ZkSensors");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ZkSensors);
};
