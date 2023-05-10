export default function (sequelize, DataTypes) {
  var IDO = sequelize.define('ido', {
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
  IDO.sync();
  return IDO;
}
