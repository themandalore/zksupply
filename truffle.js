var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "nick lucian brenda kevin sam fiscal patch fly damp ocean produce wish";

//ganache-cli -l 200000000

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 100000000,
      websockets: true
    },
    dev2: {
      host: "localhost",
      port: 8546,
      network_id: "*" // Match any network id
    },
    poa:  {
      provider: new HDWalletProvider(mnemonic, "http://40.117.249.181:8545"),
      network_id:"*",
      gas: 4612388,
      gasPrice: 17e9
    },
    test:  {
      provider: new HDWalletProvider(mnemonic, "http://localhost:8545"),
      network_id:"*",
      gas: 10000000,
      gasPrice: 17e9
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io"),
      network_id: 3,
      gas: 4612388
    },
      rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/zkGX3Vf8njIXiHEGRueB"),
      network_id: 4,
      gas: 4700000,
      gasPrice: 17e9
    }
  }
};