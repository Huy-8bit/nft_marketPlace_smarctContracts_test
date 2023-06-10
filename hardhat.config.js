require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
require("dotenv").config();

task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

const ALCHEMY_API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY;

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 1337,
        },
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/GvfKl-59XILFI69MqsMRTjCrCm0_cBWF`,
            accounts: [process.env.REAL_ACCOUNTS],
        },
    },
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};