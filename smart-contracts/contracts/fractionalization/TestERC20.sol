// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestERC20 is ERC20 {
 constructor() ERC20("TEST", "TST"){ }

 function mintTo(address to, uint amount) public {
    super._mint(to, amount);
 }
}
