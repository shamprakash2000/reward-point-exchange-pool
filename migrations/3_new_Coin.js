const NewCoin = artifacts.require('./NewCoin.sol')

module.exports = function (deployer) {
  deployer.deploy(NewCoin)
}
