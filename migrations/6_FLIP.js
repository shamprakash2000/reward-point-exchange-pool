const FLIP = artifacts.require('./FLIP.sol')

module.exports = function (deployer) {
  deployer.deploy(FLIP,"FLI","FLIP",0,10000)
}