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
