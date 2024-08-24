// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {CuteNFT} from "../src/CuteNFT.sol";

contract BaseTest is Test {

    CuteNFT cuteNft;
    bytes public merkleRoot = '0x635ba7d5269a9f0f2b4d5eb5aece16aae4809a307d987fa6206afb999fcc74c8';
    string public nftName = "Cutiee";
    string public nftSymbol = "CT";

    address public USER = makeAddr("USER");

    function setUp() public {
       cuteNft = new CuteNFT();

       console.log("NFT address", address(cuteNft));
    }


}
