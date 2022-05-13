require("babel-register");
require("babel-polyfill");
require("dotenv").config(); // injects all environment variables into the project

const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraURL =
  "https://rinkeby.infura.io/v3/aa94729499e0460aa0946d090baeb63b";

module.exports = {
  // specifies a new network setting, a development network
  // these are the specifications idenitified by ganache-gui
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      //port: 8545,
      network_id: "*",
    },

    rinkeby: {
      provider: () =>
        new HDWalletProvider(process.env.METAMASK_MNEMONIC, infuraURL),
      network_id: 4,
      gas: 5500000,
    },
  },

  // places solidity files inside "./src/contracts/"
  // default places them in the root directory "./contracts/"
  contracts_directory: "./src/contracts/",
  // places abi files inside "./src/abis/"
  // default places them in the root directory "./build/"
  contracts_build_directory: "./src/abis",

  // Configure your compilers
  compilers: {
    // specifies the solidity compiler to be used
    // javasciprt version of a solidity compiler
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
