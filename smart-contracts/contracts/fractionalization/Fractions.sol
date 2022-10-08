// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./IFractions.sol";

import {SafeERC721} from "./SafeERC721.sol";

contract Fractions is IFractionsView, IERC721Receiver, ERC20, ReentrancyGuard {
    event FractionsMinted();

    using SafeMath for uint256;
    using SafeERC721 for IERC721;
    using SafeERC721 for IERC721Metadata;
    using Strings for uint256;

    address public target;
    uint256 public tokenId;
    uint256 public override fractionsCount;
    uint256 public fractionPrice;
    address public paymentToken;

    string private name_;
    string private symbol_;

    address payable public treasury;

    address[] fractionHolders;

    constructor(address _treasury) ERC20("Fractions", "FRAC") {
        treasury = payable(_treasury);
        target = address(0); // prevents proxy code from misuse
    }

    function __name()
        public
        view
        returns (
            /*override*/
            string memory _name // rename to name() and change name() on ERC20 to virtual to be able to override on deploy
        )
    {
        if (bytes(name_).length != 0) return name_;
        return
            string(
                abi.encodePacked(
                    IERC721Metadata(target).safeName(),
                    " #",
                    tokenId.toString(),
                    " Fractions"
                )
            );
    }

    function __symbol()
        public
        view
        returns (
            /*override*/
            string memory _symbol // rename to name() and change name() on ERC20 to virtual to be able to override on deploy
        )
    {
        if (bytes(symbol_).length != 0) return symbol_;
        return
            string(
                abi.encodePacked(
                    IERC721Metadata(target).safeSymbol(),
                    tokenId.toString()
                )
            );
    }

    function initialize(
        address _creator,
        address _target,
        uint256 _tokenId,
        string memory _name,
        string memory _symbol,
        uint256 _fractionsCount,
        uint256 _fractionPrice,
        address _paymentToken
    ) external {
        require(target == address(0), "already initialized");
        // require(
        //     IERC721(_target).ownerOf(_tokenId) == address(this),
        //     "token not staked"
        // );
        require(_fractionsCount > 0, "invalid fraction count");
        require(
            (_fractionsCount * _fractionPrice) / _fractionsCount ==
                _fractionPrice,
            "invalid fraction price"
        );
        require(_paymentToken != address(this), "invalid token");
        target = _target;
        tokenId = _tokenId;
        fractionsCount = _fractionsCount;
        fractionPrice = _fractionPrice;
        paymentToken = _paymentToken;
        name_ = _name;
        symbol_ = _symbol;
        super._mint(_creator, _fractionsCount / 2);
    }

    function availableToBuy() public view returns (uint256) {
        return fractionsCount - totalSupply();
    }

    function mint(uint256 amount) external {
        uint256 _fractionsCount = totalSupply();
        require(
            _fractionsCount + amount <= fractionsCount,
            "fractions reched max supply"
        );
        require(
            IERC20(paymentToken).transferFrom(
                msg.sender,
                treasury,
                amount * fractionPrice
            )
        );

        super._mint(msg.sender, amount);

        fractionHolders.push(msg.sender);
        emit FractionsMinted();
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        super._transfer(from, to, amount);

        bool removeSenderFromHolders = balanceOf(from) == amount;
        bool addRecipientToHolders = balanceOf(to) == 0;
        for (uint256 i = 0; i < fractionHolders.length; i++) {
            if (removeSenderFromHolders && fractionHolders[i] == from)
                delete fractionHolders[i];

            if (addRecipientToHolders && fractionHolders[i] == to)
                addRecipientToHolders = false;
        }
        if (addRecipientToHolders) fractionHolders.push(from);
    }

    function getAllFractionHolders() public view returns(address[] memory) {
        return fractionHolders;
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external returns (bytes4) {
        return
            bytes4(
                keccak256("onERC721Received(address,address,uint256,bytes)")
            );
    }
}
