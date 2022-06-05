const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "because harbor connect between before mutual ankle grunt spice hour blood approve"

module.exports = {
  networks: {

    //local block chain
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },

    //server test net bmlocn chain
      ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/236c5349844d40e1a1e9ea20eb6d7186`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers:{
  solc: {
    // Turns on the Solidity optimizer. For development the optimizer's
    // quite helpful, just remember to be careful, and potentially turn it
    // off, for live deployment and/or audit time. For more information,
    // see the Truffle 4.0.0 release notes.
    //
    // https://github.com/trufflesuite/truffle/releases/tag/v4.0.0
    version: "0.8.0", 
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
}
