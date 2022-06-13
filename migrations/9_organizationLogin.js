const OrganizationLogin = artifacts.require('./OrganizationLogin.sol')

module.exports = function (deployer) {
  deployer.deploy(OrganizationLogin)
}