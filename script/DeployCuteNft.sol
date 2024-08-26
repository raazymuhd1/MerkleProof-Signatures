// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import { CuteNFT } from "../src/CuteNft.sol";

contract DeployCuteNFT is Script {

    CuteNFT cuteNft;
    string nftName = "Cutiee";
    string nftSymbol = "CT";

    function run() public returns(CuteNFT) {
        bytes32 merkleRoot = bytes32(0x635ba7d5269a9f0f2b4d5eb5aece16aae4809a307d987fa6206afb999fcc74c8);
        vm.broadcast();
        cuteNft = new CuteNFT(nftName, nftSymbol, merkleRoot);

        console.log('cute NFT contract', address(cuteNft));
        return cuteNft;
    }
}
