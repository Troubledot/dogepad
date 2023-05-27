'use strict';
import Sequelize from 'sequelize';
import configs from './db.json';
const Op = Sequelize.Op;

const dbHost = configs.mysql.host,
    dbPort = configs.mysql.port,
    dbUsername = configs.mysql.username,
    dbPassword = configs.mysql.password,
    dbName = configs.mysql.dbName;

//mysql connect option
const db = {
    sequelize: new Sequelize(dbName, dbUsername, dbPassword, {
        host: dbHost,
        dialect: 'mysql',
        port: dbPort,
        operatorsAliases: false,
        pool: {
            max: 30,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            freezeTableName: true,
            timestamps: false,
        }
    })
};

//user table model
db.IDO = db.sequelize.import("../model/ido.js")
db.IDOP = db.sequelize.import("../model/idop.js")
db.STAKE = db.sequelize.import("../model/stake.js")
db.STAKETOTAL = db.sequelize.import("../model/stake_total.js")
db.InscriptionTOTAL = db.sequelize.import("../model/inscription_total.js")
db.BOX = db.sequelize.import("../model/box.js")
db.REFUND = db.sequelize.import("../model/refund.js")
db.Op = Op;

export default db;
