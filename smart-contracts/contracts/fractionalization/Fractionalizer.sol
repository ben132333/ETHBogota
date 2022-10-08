// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { ReentrancyGuard } from "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import { Fractions } from "./Fractions.sol";
import "../Treasury.sol";

contract Fractionalizer is ReentrancyGuard
{
	address public paymentToken;
	
	constructor (address _paymentToken) {
		require(_paymentToken != address(0), "payment token zero address");
		paymentToken = _paymentToken;
	}

	function fractionalize(address _creator, address _target, uint256 _tokenId, string memory _name, string memory _symbol, uint256 _fractionsCount, uint256 _fractionPrice) external nonReentrant returns (address _fractions)
	{
		address treasury = address(new Treasury(paymentToken));
		address _from = msg.sender;
		_fractions = address(new Fractions(treasury));

		// Who should own the initial token?
		// IERC721(_target).transferFrom(_from, _fractions, _tokenId);
		Fractions(_fractions).initialize(_creator, _target, _tokenId, _name, _symbol, _fractionsCount, _fractionPrice, paymentToken);
		emit Fractionalize(_from, _target, _tokenId, _fractions);
		return _fractions;
	}

	event Fractionalize(address indexed _from, address indexed _target, uint256 indexed _tokenId, address _fractions);
}
