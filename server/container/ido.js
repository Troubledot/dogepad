import db from "../database/db.js"
import fs from "fs"
import Web3 from "web3"
import Sequelize from 'sequelize'
import e from "express"

const Op = db.Op
const IDO = db.IDO
const IDOP = db.IDOP

const WHITELIST = [
  "bc1pg085uvgzy6ma8x9kxnre50u8swcudtvwrn9n54h2npafjdt0tqhsuzc7q1"
]

export async function getTotalPublicSale(req, res) {
  const totalPublicSale = await IDOP.sum("whitelist_amount",{
    where: {
      state: 1,
    }
  })

  res.send({
    msg: "success",
    code: 1,
    data:{
      totalPublicSale: totalPublicSale
    }
  })

}

export async function getPublicSaleByAddress(req, res) {
  const { address } = req.params;
  console.log( req.query)
  if (!address) {
    res.send({
        msg: "Address is empty",
        code: 0
    })
    return
  }

  const totalBuy = await IDOP.sum("whitelist_amount",{
    where: {
      address: address,
      state: 1,
    }
  })

  res.send({
    msg: "success",
    code: 1,
    data:{
      address: address,
      totalBuy: totalBuy
    }
  })

}

export async function publicSale(req, res) {
  let {
    address,
    tx,
    amount
  } = req.body

  console.log( address, tx, amount)


  if (!address || !tx || !amount){
      res.send({
        msg: "Incomplete parameter",
        code: 0
      })
      return
  }

  const totalBuy = await IDOP.sum("whitelist_amount",{
    where: {
      address: address,
      state: 1,
    }
  })

  if(totalBuy >=  0.72){
    res.send({
        msg: "Have exceeded the limit",
        code: 0
    })
    return
  }

  const ga = !!req.cookies._ga ? req.cookies._ga : ""
  
  const result = await IDOP.create({
    address: address,
    tx: tx,
    whitelist_amount: amount,
    ga: ga,
    date: new Date().getTime(),
    state: 1
  })

  if (result) {
    res.send({
      msg: "Success",
      code: 1
    })
  } else {
    res.send({
      msg: "Save failure",
      code: 0
    })
  }
}


export async function getTotalWhitelistSale(req, res) {
  const totalWhitelistSale = await IDO.sum("whitelist_amount",{
    where: {
      state: 1,
    }
  })

  res.send({
    msg: "success",
    code: 1,
    data:{
      totalWhitelistSale: totalWhitelistSale
    }
  })

}

export async function getWhitelistSaleByAddress(req, res) {
  const { address } = req.params;
  console.log( req.query)
  if (!address) {
    res.send({
        msg: "Address is empty",
        code: 0
    })
    return
  }

  const totalBuy = await IDO.sum("whitelist_amount",{
    where: {
      address: address,
      state: 1,
    }
  })

  res.send({
    msg: "success",
    code: 1,
    data:{
      address: address,
      totalBuy: totalBuy
    }
  })

}


export async function checkWhitelist(req, res) {
  const { address } = req.params;
  console.log(address, WHITELIST.indexOf(address))
  res.send({
    msg: "success",
    code: 1,
    data:{
      isWhitelist: WHITELIST.indexOf(address) != -1 ? true: false,
    }
  })
}


export async function whitelistSale(req, res) {
  let {
    address,
    tx,
    whitelist_amount
  } = req.body

  console.log( address, tx, whitelist_amount)

  if(WHITELIST.indexOf(address) == -1){
      res.send({
        msg: "Not on the whitelist",
        code: 0
      })
      return
  }

  if (!address || !tx || !whitelist_amount){
      res.send({
        msg: "Incomplete parameter",
        code: 0
      })
      return
  }

  const totalBuy = await IDO.sum("whitelist_amount",{
    where: {
      address: address,
      state: 1,
    }
  })
  console.log("totalBuy",totalBuy)

  if(totalBuy >=  0.072){
    res.send({
        msg: "Have exceeded the limit",
        code: 0
    })
    return
  }

  const ga = !!req.cookies._ga ? req.cookies._ga : ""
  
  const result = await IDO.create({
    address: address,
    tx: tx,
    whitelist_amount: whitelist_amount,
    ga: ga,
    date: new Date().getTime(),
    state: 1
  })

  if (result) {
    res.send({
      msg: "Success",
      code: 1
    })
  } else {
    res.send({
      msg: "Save failure",
      code: 0
    })
  }
}
