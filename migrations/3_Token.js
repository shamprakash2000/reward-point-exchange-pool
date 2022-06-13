const Token = artifacts.require('./Token.sol')

module.exports = function (deployer) {
  deployer.deploy(Token,"WT","Water",18,10000)
}