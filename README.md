# Tokenizer
Sepolia ETH test network
TSELME42 address: `0xd3E644Ce6576e99AE4dCDb5B50C03bAc219F6c5c`

The TSELME42 smart contract is a Solidity-based contract designed to manage and update messages on the Ethereum blockchain. It is a simple yet illustrative example of how smart contracts can be used to store and update data transparently and securely. This white paper provides a comprehensive overview of the TSELME42 smart contract, its structure, and its functionality.

NFTs (Non-Fungible Tokens) are minted on blockchains using smart contracts. These contracts automate the process of creating a unique digital token representing ownership of a digital asset.

Here's a breakdown of how NFT minting works with smart contracts:

1. Smart Contract Deployment:

    The owner develops a smart contract following the ERC-721 standard for NFTs on Ethereum or similar standards on other blockchains.
    This contract defines functions for minting NFTs, assigning ownership, and potentially transferring ownership.
    The contract might also include functionalities like storing token metadata (descriptions, images) or setting limitations on minting quantities.
    The owner deploys the contract to the blockchain network, making it publicly accessible and immutable.

2. Minting Process:

    Minting refers to creating a new NFT on the blockchain. This is typically initiated by the contract owner or through a function call authorized by the owner.
    When minting an NFT, the smart contract performs several actions:
    Increments a counter: The contract keeps track of the total number of minted NFTs. It increases this counter to generate a unique ID for the new NFT.
    Creates a new token: The contract creates a new token record on the blockchain with the unique ID and assigns ownership details (usually the address of the recipient).
    Sets Metadata (Optional): The contract might store a reference (URI) to a JSON file containing the NFT's metadata (name, description, image) on a decentralized storage solution like IPFS.

3. Transaction Confirmation:

    The minting process is a transaction on the blockchain network. It requires a transaction fee to miners or validators who verify and add the transaction to the blockchain.
    The user initiating the mint (often the owner) pays this fee.
    Once the transaction is confirmed on the blockchain, the new NFT is officially minted, and ownership is assigned to the recipient address.

4. Additional Considerations:

    Minting Functionality: The onlyOwner modifier can be used to restrict minting to the contract owner, or the contract might allow for public minting with limitations (e.g., maximum mints per user, minting price).
    Security: Smart contracts are code, and vulnerabilities can exist. It's crucial to thoroughly audit the contract before deployment to ensure its security and proper functionality.


Overall, smart contracts provide a secure and transparent way to mint and manage NFTs on blockchains. They automate the process, ensure uniqueness, and immutably record ownership on a distributed ledger.


## Used technologies
- Ethers.js - Ethers.js is a library that makes it easier to interact and make requests to Ethereum by wrapping standard JSON-RPC methods with more user friendly methods.
- hardhad - Makes it super easy to integrate Plugins for additional tooling and extended functionality. We’ll be taking advantage of the Ethers plugin for contract deployment (Ethers.js has some super clean contract deployment methods).
- Alchemy - API that allows us to communicate with the Ethereum chain without having to run our own nodes

## Network
Sepholia ETH testnest. Warning: It requires you to have 0.0001 ETH on mainnet in order to prevent abuse.

## Deployment
```
npm install
npx hardhat compile
npx hardhat run deployment/deploy.js --network sepolia
```

## Run
```
 node deployment/mint.js {CONTRACT_ADDRESS} {RECEIVER_ADDRESS}
```
