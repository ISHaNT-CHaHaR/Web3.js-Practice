const Migrations = artifacts.require('Ether');

module.exports = function (deployer) {
   deployer.deploy(Migrations);
};
