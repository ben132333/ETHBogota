//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Copyright is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Copyright", "CPRT") {}

    function mint() public {
       
    }
}
