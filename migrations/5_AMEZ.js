const AMEZ = artifacts.require('./AMEZ.sol')

module.exports = function (deployer) {
  deployer.deploy(AMEZ,"AMZ","AMEZ",0,10000)
}