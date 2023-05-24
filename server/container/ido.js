import db from "../database/db.js";
import fs from "fs";
import Web3 from "web3";
import Sequelize from "sequelize";
import e from "express";
import stake_total from "../model/stake_total.js";

const Op = db.Op;
const IDO = db.IDO;
const IDOP = db.IDOP;
const STAKE = db.STAKE;
const STAKETOTAL = db.STAKETOTAL;

const WHITELIST = [];

export async function getTotalPublicSale(req, res) {
  const totalPublicSale = await IDOP.sum("whitelist_amount", {
    where: {
      state: 1,
    },
  });

  const totalUsers = await IDOP.count({
    where: {
      state: 1,
    },
  });

  console.log(totalUsers);

  res.send({
    msg: "success",
    code: 1,
    data: {
      totalPublicSale: totalPublicSale,
      totalUsers: totalUsers,
    },
  });
}

export async function getPublicSaleByAddress(req, res) {
  const { address } = req.params;
  console.log(req.query);
  if (!address) {
    res.send({
      msg: "Address is empty",
      code: 0,
    });
    return;
  }

  const totalBuy = await IDOP.sum("whitelist_amount", {
    where: {
      address: address,
      state: 1,
    },
  });

  res.send({
    msg: "success",
    code: 1,
    data: {
      address: address,
      totalBuy: totalBuy,
    },
  });
}

export async function publicSale(req, res) {
  let { address, tx, amount } = req.body;

  console.log(address, tx, amount);

  if (!address || !tx || !amount) {
    res.send({
      msg: "Incomplete parameter",
      code: 0,
    });
    return;
  }

  const totalBuy = await IDOP.sum("whitelist_amount", {
    where: {
      address: address,
      state: 1,
    },
  });

  if (totalBuy >= 0.72) {
    res.send({
      msg: "Have exceeded the limit",
      code: 0,
    });
    return;
  }

  const ga = !!req.cookies._ga ? req.cookies._ga : "";

  const result = await IDOP.create({
    address: address,
    tx: tx,
    whitelist_amount: amount,
    ga: ga,
    date: new Date().getTime(),
    state: 1,
  });

  if (result) {
    res.send({
      msg: "Success",
      code: 1,
    });
  } else {
    res.send({
      msg: "Save failure",
      code: 0,
    });
  }
}

export async function getTotalWhitelistSale(req, res) {
  const totalWhitelistSale = await IDO.sum("whitelist_amount", {
    where: {
      state: 1,
    },
  });

  const totalUsers = await IDO.count({
    where: {
      state: 1,
    },
  });

  console.log(totalUsers);

  res.send({
    msg: "success",
    code: 1,
    data: {
      totalWhitelistSale: totalWhitelistSale,
      totalUsers: totalUsers,
    },
  });
}

export async function getWhitelistSaleByAddress(req, res) {
  const { address } = req.params;
  console.log(req.query);
  if (!address) {
    res.send({
      msg: "Address is empty",
      code: 0,
    });
    return;
  }

  const totalBuy = await IDO.sum("whitelist_amount", {
    where: {
      address: address,
      state: 1,
    },
  });

  res.send({
    msg: "success",
    code: 1,
    data: {
      address: address,
      totalBuy: totalBuy,
    },
  });
}

export async function checkWhitelist(req, res) {
  const { address } = req.params;
  console.log(address, WHITELIST.indexOf(address));
  res.send({
    msg: "success",
    code: 1,
    data: {
      isWhitelist: WHITELIST.indexOf(address) != -1 ? true : false,
    },
  });
}

export async function whitelistSale(req, res) {
  let { address, tx, whitelist_amount } = req.body;

  console.log(address, tx, whitelist_amount);

  if (WHITELIST.indexOf(address) == -1) {
    res.send({
      msg: "Not on the whitelist",
      code: 0,
    });
    return;
  }

  if (!address || !tx || !whitelist_amount) {
    res.send({
      msg: "Incomplete parameter",
      code: 0,
    });
    return;
  }

  const totalBuy = await IDO.sum("whitelist_amount", {
    where: {
      address: address,
      state: 1,
    },
  });
  console.log("totalBuy", totalBuy);

  if (totalBuy >= 0.072) {
    res.send({
      msg: "Have exceeded the limit",
      code: 0,
    });
    return;
  }

  const ga = !!req.cookies._ga ? req.cookies._ga : "";

  const result = await IDO.create({
    address: address,
    tx: tx,
    whitelist_amount: whitelist_amount,
    ga: ga,
    date: new Date().getTime(),
    state: 1,
  });

  if (result) {
    res.send({
      msg: "Success",
      code: 1,
    });
  } else {
    res.send({
      msg: "Save failure",
      code: 0,
    });
  }
}

const startTime = 1684909740
const endTime = 1684908900 + 3 * 24 * 60 * 60

export async function getStakeByAddress(req, res) {
  const { address } = req.params;
  const totalSupply = await STAKE.sum("amount", {
    where: {
      address: address,
      state: 1,
    },
  });

  res.send({
    msg: "success",
    code: 1,
    totalSupply: totalSupply
  });

}

export async function stake(req, res) {
  let { address, tx, amount, inscriptionId } = req.body;

  console.log(address, tx, amount, inscriptionId);

  if( parseInt(new Date().getTime() / 1000) < startTime){
    res.send({
      msg: "Not start!",
      code: 0,
    });
    return;
  }

  if (!address || !tx || !amount || !inscriptionId) {
    res.send({
      msg: "Incomplete parameter",
      code: 0,
    });
    return;
  }

  const ga = !!req.cookies._ga ? req.cookies._ga : "";

  updateReward(address)

  const result = await STAKE.create({
    address: address,
    tx: tx,
    inscriptionId: inscriptionId,
    amount: amount,
    ga: ga,
    date: new Date().getTime(),
    state: 1,
  });
  

  if (result) {
    res.send({
      msg: "Success",
      code: 1,
    });
  } else {
    res.send({
      msg: "Save failure",
      code: 0,
    });
  }
}

export async function rewardPerToken() {
  const totalSupply = await STAKE.sum("amount", {
    where: {
      state: 1,
    },
  });

  const stakeTotal = await STAKETOTAL.findOne({
    attributes: ["rewardRate", "rewardPerTokenStored", "lastUpdateTime"],
    where: {
      id: 1,
    },
  });
  if (totalSupply == 0) {
    return rewardPerTokenStored;
  }

  return (
    stakeTotal.rewardPerTokenStored +
    ((parseInt(new Date().getTime() / 1000) - stakeTotal.lastUpdateTime) *
      stakeTotal.rewardRate) /
      totalSupply
  );
}

export async function earn(req, res) {
  let { address } = req.params;

  console.log(address);
  if (!address) {
    res.send({
      msg: "Incomplete parameter",
      code: 0,
    });
    return;
  }
  res.send({
      msg: "Success",
      code: 1,
      earn: await earned(address)
    });
}

export async function earned(address) {
  const totalSupply = await STAKE.sum("amount", {
    where: {
      address: address,
      state: 1,
    },
  });

  console.log("totalSupply",totalSupply)

  const stake = await STAKE.findOne({
    attributes: ["userRewardPerTokenPaid", "rewards"],
    where: {
      address: address,
    },
  });

  console.log('stake', stake)

  if (!stake) {
    console.log("stake 0")
    return 0;
  }

  console.log("earned", stake.userRewardPerTokenPaid, stake.rewards);

  return (
    totalSupply * (await rewardPerToken() - stake.userRewardPerTokenPaid) +
    stake.rewards
  );
}

export async function updateReward(address) {
  let rewardPerTokenStored = await rewardPerToken();
  let lastUpdateTime = lastTimeRewardApplicable();
  await stake_total.update(
    {
      rewardPerTokenStored: rewardPerTokenStored,
      lastUpdateTime: lastUpdateTime,
    },
    {
      where: {
        id: 1,
      },
    }
  );
  let rewards = await earned(address);
  let userRewardPerTokenPaid = rewardPerTokenStored;
  await stake.update(
    {
      rewards: rewards,
      userRewardPerTokenPaid: userRewardPerTokenPaid,
    },
    {
      where: {
        state: 1,
        address: address,
      },
    }
  );
}

export async function lastTimeRewardApplicable() {
  return Math.min(parseInt(new Date().getTime() / 1000), endTime);
}
