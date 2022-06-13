const RELI = artifacts.require('./RELI.sol')

module.exports = function (deployer) {
  deployer.deploy(RELI,"REL","RELI",0,10000)
}