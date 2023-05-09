import db from "../database/db.js"
import fs from "fs"
import Web3 from "web3"
import Sequelize from 'sequelize'
import e from "express"
import tokenConfig from "../../contract.config"
import {
  initWeb3,
  initETHWeb3,
  initContract
} from '../libs/utils'
import {
  utils
} from "ethers"

export async function getIDOData(req, res) {
  const web3 = initWeb3()
  const { ido } = tokenConfig
  const idoContract = new web3.eth.Contract(ido.abi, ido.address)
  const limitPromise = [],
    pricePromise = [],
    mintedPromise = [],
    timePromise = []
  for (let index = 0; index < 5; index++) {
    limitPromise.push(idoContract.methods.publicPrice(index).call())
    pricePromise.push(idoContract.methods.mintLimit(index).call())
    mintedPromise.push(idoContract.methods.alreadyMint(index).call())
  }
  for (let index = 0; index < 10; index++) {
    timePromise.push(idoContract.methods.publicSaleStartTime(index).call())
  }
  
  const mintLimit = await Promise.all(limitPromise)
  const publicPrice = await Promise.all(pricePromise)
  const alreadyMint = await Promise.all(mintedPromise)
  const publicSaleStartTime = await Promise.all(timePromise)
  const totalSupply = await idoContract.methods.totalSupply().call()
  console.log(publicSaleStartTime)
    res.send({
      alreadyMint,
      publicSaleStartTime,
      totalSupply,
      mintLimit,
      publicPrice
    })

}

export async function getCardById(req, res) {
  console.log("params", req.params)
  const {
    id
  } = req.params;
  if (!id) {
    res.send({})
    return
  }

  res.send({
    "description": "The League of France Football Club, FFC in short, is a project of the football ecosystem on Web3 jointly created by many top football clubs under the LIGUE 1. It is committed to building a football metaverse on Web3 through emerging technologies such as fan tokens, NFTs, and football games. It allows users to interact with football stars better in the ecosystem and participate in the development decisions of football clubs. Enable users for the club, expand the influence of all members from the LIGUE 1 ecosystem over the world, and connect with football fans worldwide to build an interactive football metaverse.",
    "image": "https://www.ffcfan.com/home/mint.mp4",
    "name": "FFC Alliance Rights Card NFT",
    "attributes": []
  })
  return
}