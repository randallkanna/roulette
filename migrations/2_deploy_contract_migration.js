var Donate = artifacts.require("./Donate.sol");

module.exports = function(deployer) {
  deployer.deploy(Donate);
  // deployer.deploy(web3.toWei(0.2, 'ether'), 50, {gas: 3000000});
};
