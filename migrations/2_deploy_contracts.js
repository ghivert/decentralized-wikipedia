const Wikipedia = artifacts.require('Wikipedia')

module.exports = function (deployer) {
  deployer.deploy(Wikipedia)
}
