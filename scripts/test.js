// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat")
const { ethers, upgrades } = require("hardhat")
const NFT = artifacts.require("NFT")
const USDT = artifacts.require("USDT")

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

async function main() {
    await hre.run("compile")

    this.deployer = (await ethers.getSigners())[0].address
    console.log("deployer address", this.deployer)

    // this.USDT = await USDT.new(
    //     "0xF29acE1FE5f36389d0dDe450a0195A30c3770245",
    //     "0x55d398326f99059fF775485246999027B3197955"
    // )
    // console.log("USDT", this.USDT.address)
    // console.log("USDT balanceOf", (await this.USDT.balanceOf(this.deployer)).toString())

    this.NFT = await NFT.new(1000, 10, 1000, 1670583600, "0x2Fe9d6267AEB229D48ef22A2D7ba843E19639EBA")
    console.log("NFT", this.NFT.address)

    // await this.USDT.approve(this.FFCNFT.address, ethers.utils.parseEther("10000"))



    // await this.FFCNFT.seedAllowlist([this.deployer],["2"])
    // await this.FFCNFT.allowlistMint()
    // console.log((await this.FFCNFT.numberMinted(this.deployer)).toString())

    // await ethers.provider.send("evm_setNextBlockTimestamp", [1670060116])
    // await ethers.provider.send("evm_mine")

    // await this.FFCNFT.publicSaleMint(2)
    // console.log((await this.FFCNFT.numberMinted(this.deployer)).toString())

    // await this.FFCNFT.publicSaleMint(6)
    // console.log((await this.FFCNFT.numberMinted(this.deployer)).toString())

    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
