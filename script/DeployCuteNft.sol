// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import { CuteNFT } from "../script/DeployCuteNft.sol"

contract CounterScript is Script {

    CuteNFT cuteNft;
    bytes merkleRoot = '0x635ba7d5269a9f0f2b4d5eb5aece16aae4809a307d987fa6206afb999fcc74c8';

    function run() public {
        vm.broadcast();
        cuteNft = new CuteNFT(merkleRoot);
    }
}
