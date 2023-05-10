export default function (sequelize, DataTypes) {
  var IDOP = sequelize.define('idop', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    tx: DataTypes.STRING,
    whitelist_amount: DataTypes.STRING,
    ga: DataTypes.STRING,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  IDOP.sync();
  return IDOP;
}
