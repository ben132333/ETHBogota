//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./fractionalization/Fractionalizer.sol";

contract Song is IERC721, ERC721URIStorage {
    event Minted(uint256 tokenId, address fractions);

    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    Fractionalizer fractionalizer;
    uint256 constant TOTAL_FRACTIONS = 1000;

    constructor(address fractionalizerAddress) ERC721("Song", "SNG") {
        fractionalizer = Fractionalizer(fractionalizerAddress);
    }

    function mint(string calldata metadata, uint256 cost) public {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        _safeMint(_msgSender(), tokenId);
        _setTokenURI(tokenId, metadata);

        address fractions = fractionalizer.fractionalize(
            msg.sender,
            address(this),
            tokenId,
            "SONG",
            "SNG",
            TOTAL_FRACTIONS,
            cost / TOTAL_FRACTIONS
        );

        emit Minted(tokenId, fractions);
    }
}
