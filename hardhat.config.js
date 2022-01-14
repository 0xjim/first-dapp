require("@nomiclabs/hardhat-waffle");
// require('dotenv').config();
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/40d6bdd8c45f48c0bddbd51f0e4e9b0f",
      accounts: [privateKey]
    }
  }
};