// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IFractionsView is IERC20 {

    function getAllFractionHolders() external view returns(address[] memory);

    function fractionsCount() external view returns(uint);
}
