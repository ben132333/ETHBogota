// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./fractionalization/IFractions.sol";
import "hardhat/console.sol";

contract Treasury {
    IERC20 tokenAddress;
    IFractionsView fractions;

    constructor(address token) {
        fractions = IFractionsView(msg.sender);
        tokenAddress = IERC20(0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253);
    }

    function distributeFunds() public {
        address[] memory allHolders = fractions.getAllFractionHolders();
        uint256 totalFractionsCount = 1000;
        uint256 totalProfit = tokenAddress.balanceOf(address(this));
        uint256 profitToShare = (totalProfit * 2) / 5; // 40 %
        for (uint256 i = 0; i < allHolders.length; i++) {
            if (allHolders[i] != address(0)) {
                // console.log(
                //     "Transfering from to amount",
                //     msg.sender,
                //     treasury,
                //     amount * fractionPrice
                // );
                uint256 percentageToReceive = fractions.balanceOf(
                    allHolders[i]
                );

                uint256 tokensToReceive = percentageToReceive / profitToShare;
                tokenAddress.transferFrom(
                    address(this),
                    allHolders[i],
                    tokensToReceive
                );
            }
        }
    }
}
