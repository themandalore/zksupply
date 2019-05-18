const Migrations = artifacts.require("Migrations");
const ZkSensors = artifacts.require("ZkSensors");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  console.log("migrations deployed")
  await deployer.deploy(ZkSensors);
  console.log("Zk sensors deployed",ZkSensors.address);
};
