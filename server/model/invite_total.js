export default function (sequelize, DataTypes) {
  var INVITETOTAL = sequelize.define('invite_total', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    account: DataTypes.STRING,
    total: DataTypes.INTEGER,
    state: DataTypes.INTEGER,
  })
  INVITETOTAL.sync();
  return INVITETOTAL;
}
