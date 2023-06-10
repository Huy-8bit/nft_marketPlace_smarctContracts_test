// const Marketplace = require("../src/Marketplace.json");

// let contract;
// let MyContract;
// let deployer;
// let balance;

// async function getNFts() {
//     beforeEach(async function() {
//         MyContract = await ethers.getContractFactory("NFTMarketplace");
//         contract = await MyContract.attach(Marketplace.address);

//         [deployer] = await ethers.getSigners();
//         balance = await deployer.getBalance();

//         console.log("Deployer address: ", deployer.address);
//         console.log("Deployer balance: ", balance.toString());

//         const data = {
//             address: contract.address,
//             abi: JSON.parse(contract.interface.format("json")),
//         };

//         const nfts = await contract.getNFTs();

//         console.log("NFTs: ", nfts);
//     });
// }

// getNFts();