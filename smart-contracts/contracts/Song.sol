//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./nftfy/Fractionalizer.sol";

contract Song is IERC721, ERC721URIStorage {

    event Minted(uint tokenId, address fractions);

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(uint => uint) songToCost;
    Fractionalizer fractionalizer;

    address daiAddress;
    constructor(address fractionalizerAddress) ERC721("Song", "SNG") {
        fractionalizer = Fractionalizer(fractionalizerAddress);
    }

    function mint(string calldata metadata, uint256 cost) public {
        
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        _safeMint(_msgSender(), tokenId);
        _setTokenURI(tokenId, metadata);

        address fractions = fractionalizer.fractionalize(
            address(this),
            tokenId,
            "SONG",
            "SNG",
            1000,
            cost / 1000,
            daiAddress
        );

        emit Minted(tokenId, fractions);
    }
}
