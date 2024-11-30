// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract MerkleAirdrop {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    function verifying() public {
        uint256 num = 10;

        if(num == 10) revert("not good");
    }
}
