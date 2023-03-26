const drug = artifacts.require("erp");

module.exports = function (deployer) {
  deployer.deploy(drug);
};
