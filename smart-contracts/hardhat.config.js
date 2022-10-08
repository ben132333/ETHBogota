require("dotenv").config();


require("@nomicfoundation/hardhat-toolbox");
require('@nomicfoundation/hardhat-network-helpers');
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com/",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
