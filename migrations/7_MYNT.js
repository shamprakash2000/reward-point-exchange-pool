const MYNT = artifacts.require('./MYNT.sol')

module.exports = function (deployer) {
  deployer.deploy(MYNT,"MYN","MYNT",0,10000)
}