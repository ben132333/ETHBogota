//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Treasury.sol";

contract Presale is IERC721, ERC721URIStorage {
    event SharesBought(
        uint256 tokenId,
        address buyer,
        uint256 price,
        uint256 amount
    );

    event PreSaleMinted(uint256 tokenId);
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    IERC20 dai;
    Treasury treasury;
    mapping(uint256 => uint256) tokenToAvailableShares;
    mapping(uint256 => uint256) tokenToSharePrice;
    mapping(uint256 => mapping(address => uint256)) tokenToHolders;

    constructor() ERC721("PreSale", "PRS") {
        dai = IERC20(0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253);
        treasury = new Treasury(address(dai));
    }

    function mint(
        string calldata metadata,
        uint256 totalAmount,
        uint256 amountOfShares
    ) public {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        tokenToAvailableShares[tokenId] = amountOfShares;
        tokenToSharePrice[tokenId] = totalAmount / amountOfShares;

        _safeMint(_msgSender(), tokenId);
        _setTokenURI(tokenId, metadata);

        emit PreSaleMinted(tokenId);
    }

    function buyShares(uint256 presaleTokenId, uint256 amount) public {
        require(presaleTokenId < _tokenIds.current(), "invalid tokenId");
        require(
            tokenToAvailableShares[presaleTokenId] >= amount,
            "shares sold out"
        );

        uint256 price = amount * tokenToSharePrice[presaleTokenId];

        tokenToAvailableShares[presaleTokenId] -= amount;
        tokenToHolders[presaleTokenId][msg.sender] += amount;

        dai.transferFrom(msg.sender, address(treasury), price);

        emit SharesBought(presaleTokenId, msg.sender, price, amount);
    }
}
