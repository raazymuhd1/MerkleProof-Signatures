"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merkletreejs_1 = require("merkletreejs");
const ethers_1 = require("ethers");
const keccak256_1 = __importDefault(require("keccak256"));
const fs_1 = __importDefault(require("fs"));
const whitelisters = [
    {
        user: '0xB42ce56dC138085f5947cCd4c9b74C9E13F31644',
        amount: 1
    },
    {
        user: '0x34699bE6B2a22E79209b8e9f9517C5e18db7eB89',
        amount: 1
    },
    {
        user: '0x77d88fcc80d4DdC8A80347d8Fc87116cEbB0Ef3C',
        amount: 1
    }
];
const generatingMerkleProof = () => {
    // leaf nodes
    const leaves = whitelisters.map(leaf => ethers_1.ethers.solidityPackedKeccak256(['string', 'uint'], [leaf.user, leaf.amount]));
    const tree = new merkletreejs_1.MerkleTree(leaves, keccak256_1.default, { sort: true });
    // root hash / merkle root
    const merkleRoot = tree.getHexRoot();
    const merkleProof = leaves.map(leaf => tree.getHexProof(leaf));
    fs_1.default.writeFileSync("merkleProof.txt", JSON.stringify(merkleProof));
    console.log(leaves);
    console.log(`root ${merkleRoot}`);
    console.log(merkleProof);
};
generatingMerkleProof();
