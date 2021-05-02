const AuthContract = artifacts.require("AuthContract.sol");

module.exports = function (deployer) {
  deployer.deploy(AuthContract);
};
