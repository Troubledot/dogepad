import db from "../database/db.js";
import fs from "fs";
import Sequelize from "sequelize";
import e from "express";

const Op = db.Op;
const PROJECT = db.PROJECT;
const PROJECT_TEAM = db.PROJECT_TEAM;
const PROJECT_TOKEN = db.PROJECT_TOKEN;
const PROJECT_MEDIA = db.PROJECT_MEDIA;
const PROJECT_IDO = db.PROJECT_IDO;
const PROJECT_IDO_DETAIL = db.PROJECT_IDO_DETAIL;


PROJECT.hasMany(PROJECT_TEAM, {
  foreignKey: "projectID"
})

PROJECT_TEAM.belongsTo(PROJECT, {
  foreignKey: "projectID",
})

PROJECT.hasMany(PROJECT_TOKEN, {
  foreignKey: "projectID"
})

PROJECT_TOKEN.belongsTo(PROJECT, {
  foreignKey: "projectID",
})

PROJECT.hasMany(PROJECT_MEDIA, {
  foreignKey: "projectID"
})

PROJECT_MEDIA.belongsTo(PROJECT, {
  foreignKey: "projectID",
})

PROJECT.hasMany(PROJECT_IDO, {
  foreignKey: "projectID"
})

PROJECT_IDO.belongsTo(PROJECT, {
  foreignKey: "projectID",
})

const WHITELIST = ["bc1qq3lqktum6u4vjvp7x69sh4fvxeelp52mgp3dqe"];

// 获取Launchpad总数据
export async function getProjectTotalInfo(req, res) {
  const totalProjectCount = await PROJECT.count({
    where: {
      state: 1,
    },
  });

  console.log(totalProjectCount)

  res.send({
    msg: "success",
    code: 1,
    totalProjectCount: totalProjectCount,
    totalUser: 0,
    totalLiquidityRaised: 0,
    totalLockLiquidity: 0
  });
}

export async function getProjectInfo(req, res) {
    const { projectID } = req.params;
      if (!projectID) {
    res.send({
      msg: "Incomplete parameter",
      code: 0,
    });
    return;
  }
  const projectInfo = await PROJECT.findOne({
    where: {
        id:projectID,
        state: 1,
    },
    include: [{
      model: PROJECT_TEAM,
      required: true,
    },{
      model: PROJECT_TOKEN,
      required: true,
    },{
      model: PROJECT_MEDIA,
      required: true,
    },{
      model: PROJECT_IDO,
      required: true,
    }]
  });

   if (projectInfo) {
    res.send({
      msg: "Find!",
      code: 1,
      projectInfo:projectInfo
    });
  } else {
    res.send({
      msg: "Not Find",
      code: 0,
    });
  }
}

//IDO
export async function whitelistSale(req, res) {
  let { address, tx, amount, type, projectID } = req.body;

  if (WHITELIST.indexOf(address) == -1) {
    res.send({
      msg: "Not on the whitelist",
      code: 0,
    });
    return;
  }

  if (!address || !tx || !amount || !type || !projectID) {
    res.send({
      msg: "Incomplete parameter",
      code: 0,
    });
    return;
  }

  const totalBuy = await PROJECT_IDO_DETAIL.sum("amount", {
    where: {
      projectID:projectID,
      type:1,
      address: address,
      state: 1,
    },
  });
  console.log("totalBuy", totalBuy);

  if (totalBuy >= 0.077 || (totalBuy*1 + amount*1) >= 0.077 ) {
    res.send({
      msg: "Have exceeded the limit",
      code: 0,
    });
    return;
  }

  const ga = !!req.cookies._ga ? req.cookies._ga : "";

  const result = await PROJECT_IDO_DETAIL.create({
    projectID: projectID,
    address: address,
    type:1,
    tx: tx,
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

export async function getAmountByAddress(req, res) {
  const { address, projectID, type } = req.params;
  console.log(req.query);
  if (!address || !projectID || !type) {
    res.send({
      msg: "empty",
      code: 0,
    });
    return;
  }

  const totalBuy = await PROJECT_IDO_DETAIL.sum("amount", {
    where: {
      address: address,
      projectID: projectID,
      type : type,
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

export async function getTotalSale(req, res) {
  const { projectID, type } = req.params;

  if (!projectID || !type) {
    res.send({
      msg: "empty",
      code: 0,
    });
    return;
  }


  const totalPublicSale = await PROJECT_IDO_DETAIL.sum("amount", {
    where: {
      projectID: projectID,
      type: type,
      state: 1,
    },
  });

  const totalUsers = await PROJECT_IDO_DETAIL.count({
    distinct: "address",
    where: {
      projectID: projectID,
      type: type,
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