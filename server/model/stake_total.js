export default function (sequelize, DataTypes) {
  var STAKETOTAL = sequelize.define('stake_total', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    rewardRate: DataTypes.STRING,
    rewardPerTokenStored: DataTypes.STRING,
    lastUpdateTime: DataTypes.STRING,
  })
  STAKETOTAL.sync();
  return STAKETOTAL;
}
