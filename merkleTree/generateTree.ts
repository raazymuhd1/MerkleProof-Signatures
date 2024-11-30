import { MerkleTree } from "merkletreejs"
import { ethers } from "ethers"
import { Whitelisters } from "./interfaces"
import keccak256 from "keccak256"
import fs from "fs"

const whitelisters: Whitelisters[] = [
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
]


const generatingMerkleProof = () => {
    // leaf nodes
    const leaves = whitelisters.map(leaf => ethers.solidityPackedKeccak256(['string', 'uint'], [leaf.user, leaf.amount] ))
    const tree = new MerkleTree(leaves, keccak256, { sort: true })
    // root hash / merkle root
    const merkleRoot = tree.getHexRoot()
    const merkleProof = leaves.map(leaf => tree.getHexProof(leaf))

    fs.writeFileSync("merkleProof.txt", JSON.stringify(merkleProof))
    
    console.log(leaves)
    console.log(`root ${merkleRoot}`)
    console.log(merkleProof)
}

generatingMerkleProof()