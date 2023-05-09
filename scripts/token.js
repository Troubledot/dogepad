// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat")
const { ethers, upgrades } = require("hardhat")
const USDT = artifacts.require("USDT")
const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

async function main() {
    await hre.run("compile")

    this.deployer = (await ethers.getSigners())[0].address
    console.log("deployer address", this.deployer)

    this.USDT = await USDT.new(
        "0xF29acE1FE5f36389d0dDe450a0195A30c3770245",
        "0x55d398326f99059fF775485246999027B3197955"
    )
    console.log("USDT address", this.USDT.address)
    await this.USDT.investment("0x9EbcDf712a859D32a49d9fa12acC151f1a4f60e2")
    console.log("investment")

    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
