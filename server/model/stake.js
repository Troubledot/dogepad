export default function (sequelize, DataTypes) {
  var STAKE = sequelize.define('stake', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    tx: DataTypes.STRING,
    amount: DataTypes.STRING,
    inscriptionId: DataTypes.STRING,
    confirm: DataTypes.STRING,
    rewards: DataTypes.STRING,
    userRewardPerTokenPaid: DataTypes.STRING,
    ga: DataTypes.STRING,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  STAKE.sync();
  return STAKE;
}
