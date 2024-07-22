require('dotenv').config();
const { ethers } = require("ethers");

const { API_URL, PRIVATE_KEY } = process.env;

const provider = new ethers.providers.JsonRpcProvider(API_URL);

// Get the args
const contractAddress = process.argv[2];
const recipientAddress = process.argv[3];

if (!ethers.utils.isAddress(contractAddress)) {
    console.error("Invalid contract address");
    process.exit(1);
}

// Application Binary Interface to communicate with the smart contract
const abi = [
	"function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256)"
];

const contract = new ethers.Contract(contractAddress, abi, provider);

async function mint() {
    try {
		const signer = new ethers.Wallet(PRIVATE_KEY, provider);
		const tx = await contract.connect(signer).mintNFT(recipientAddress,
			"https://raw.githubusercontent.com/tselmeg8070/testToken/main/test.json");
		console.log("Transaction hash:", tx.hash);
		await tx.wait();
    	console.log("NFT minted successfully!");
    } catch (error) {
        console.error("Error:", error);
    }
}

mint();
