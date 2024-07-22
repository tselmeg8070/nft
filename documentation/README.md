# TSELME42: An ERC721 Token Contract

This whitepaper describes the TSELME42 smart contract, a non-fungible token (NFT) contract built on the Ethereum blockchain. The contract adheres to the ERC721 standard, enabling the creation and management of unique digital assets.

### Key Features

- **ERC721 Compliance:** TSELME42 implements the ERC721 standard, ensuring compatibility with existing NFT wallets, marketplaces, and tools.
- **Minting Functionality:** The contract includes a `mintNFT` function that allows the owner (defined by the `Ownable` modifier) to create new NFTs.
- **Metadata Support:** The contract leverages ERC721URIStorage, allowing each NFT to hold a reference to a JSON document containing its metadata (e.g., name, description, image).
- **Security:** The `onlyOwner` modifier restricts the `mintNFT` function to the contract owner, preventing unauthorized minting.

### Contract Breakdown

The TSELME42 contract utilizes several functionalities from OpenZeppelin libraries:

- **ERC721:** Provides the core functionalities for creating and managing NFTs.
- **ERC721URIStorage:** Extends ERC721 to allow storing token metadata URIs.
- **Counters:** Provides an efficient counter for tracking minted token IDs.
- **Ownable:** Defines an `onlyOwner` modifier that restricts function access to the contract owner.

**Constructor:**

Solidity:

```jsx
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TSELME42 is ERC721URIStorage, Ownable {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;

	// To be a valid NFT, your smart contract must implement all the methods of the ERC721 standard
   constructor() ERC721("Tselmeg42", "TSELME42") {}

	/*
	mintNFT() that allows us to mint an NFT! You'll notice this function takes in two variables:
		- address recipient specifies the address that will receive your freshly minted NFT
		- string memory tokenURI is a string that should resolve to a JSON document that describes the NFT's metadata. An NFT's metadata is really what brings it to life, allowing it to have additional properties, such as a name, description, image, and other attributes. In part 2 of this tutorial, we will describe how to configure this metadata.
	*/
   function mintNFT(address recipient, string memory tokenURI)
       public
       onlyOwner
       returns (uint256)
   {
       _tokenIds.increment();

       uint256 newItemId = _tokenIds.current();
       _mint(recipient, newItemId);
       _setTokenURI(newItemId, tokenURI);

       return newItemId;
   }
}

```

- Takes two arguments:
    - `recipient`: Address of the recipient who will receive the minted NFT.
    - `tokenURI`: URI pointing to the JSON document containing the NFT's metadata.
- Increments the internal token ID counter.
- Mints a new NFT with the generated ID and assigns it to the provided recipient.
- Sets the token URI for the newly minted NFT.
- Returns the ID of the minted NFT.

**`onlyOwner` Modifier:**

This modifier restricts the `mintNFT` function to be called only by the contract owner. This ensures controlled minting of NFTs.

### Deployment and Usage

The TSELME42 contract can be deployed to the Ethereum blockchain using tools like Remix or truffle. Once deployed, the owner can interact with the contract using web3 libraries or tools to call the `mintNFT` function and create new NFTs. Users will require a compatible wallet and sufficient funds to cover transaction fees.

### Conclusion

The TSELME42 contract provides a basic framework for creating and managing NFTs on the Ethereum blockchain. Its adherence to the ERC721 standard ensures interoperability and simplifies integration with existing NFT ecosystems.
