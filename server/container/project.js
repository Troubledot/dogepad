import db from "../database/db.js";
import fs from "fs";
import Sequelize from "sequelize";
import e from "express";

const Op = db.Op;
const PROJECT = db.PROJECT;
const PROJECT_TEAM = db.PROJECT_TEAM;

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
      as: 'team',
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