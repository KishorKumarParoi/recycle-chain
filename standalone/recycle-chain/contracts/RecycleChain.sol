// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract RecycleChain {
    uint256 public productCounter;
    address payable public owner;

    constructor() {
        productCounter = 0;
        owner = payable(msg.sender);
    }
    enum ProductStatus{
        MANUFACTURED,
        RECYCLED,
        SOLD,
        RETURNED
    }

    struct  Product {
        uint256 id;
        string name;
        uint256 quantity;
        ToxicItem[] toxicItems;
        address manufacturer;       
    }
}
