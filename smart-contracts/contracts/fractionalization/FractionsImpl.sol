// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import {SafeERC721} from "./SafeERC721.sol";

contract FractionsImpl is IERC721Receiver, ERC20, ReentrancyGuard {
    using SafeMath for uint;
    using SafeERC721 for IERC721;
    using SafeERC721 for IERC721Metadata;
    using Strings for uint256;

    address public target;
    uint256 public tokenId;
    uint256 public fractionsCount;
    uint256 public fractionPrice;
    address public paymentToken;

    string private name_;
    string private symbol_;

    address payable treasury;

    uint totalSupplyFractions;

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
    }


    function vaultBalance() external view returns (uint256 _vaultBalance) {
        uint256 _fractionsCount = totalSupply();
        return _fractionsCount * fractionPrice;
    }

    function vaultBalanceOf(address _from)
        public
        view
        returns (uint256 _vaultBalanceOf)
    {
        uint256 _fractionsCount = balanceOf(_from);
        return _fractionsCount * fractionPrice;
    }

    function _mint(address account, uint256 amount) internal override {
        uint256 _fractionsCount = totalSupply();
        require(_fractionsCount + amount <= fractionsCount, "fractions reched max supply");
        IERC20(paymentToken).transferFrom(account, treasury, amount);
        super._mint(account, amount);
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
